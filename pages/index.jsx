import React, { useState } from "react"
import Head from "next/head"
import "../styles/App.module.css"
import Bottombar from "../components/Bottombar"
import Link from "next/link"
import { setCookie, getCookie, deleteCookie } from "cookies-next"
import { sequence } from "0xsequence"
import { ETHAuth } from "@0xsequence/ethauth"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(getCookie("loggedIn") || false)
    const connect = async () => {
        const wallet = sequence.getWallet()
        const connectDetails = await wallet.connect({
            app: "Moog3",
            authorize: true,
            // keepWalletOpened: true,
            ...{
                settings: {
                    theme: "indigoDark",
                    includedPaymentProviders: ["moonpay"],
                    defaultFundingCurrency: "matic",
                    defaultPurchaseAmount: 111,
                },
            },
        })
        console.warn("connectDetails", { connectDetails })

        const ethAuth = new ETHAuth()
        if (connectDetails.proof) {
            const decodedProof = await ethAuth.decodeProof(connectDetails.proof.proofString, true)
            const isValid = await wallet.utils.isValidTypedDataSignature(
                await wallet.getAddress(),
                connectDetails.proof.typedData,
                decodedProof.signature,
                await wallet.getAuthChainId()
            )
            console.log("isValid?", isValid)
            setCookie("wallet", await wallet.getAddress(), { path: "/" })
            setCookie("loggedIn", isValid, { path: "/" })
            if (!isValid) throw new Error("sig invalid")
        }
    }

    const disconnet = async () => {
        const wallet = sequence.getWallet()
        wallet.disconnect()
        deleteCookie("wallet", { path: "/" })
        deleteCookie("loggedIn", { path: "/" })
        setIsLoggedIn(false)
    }
    return (
        <>
            <Head>
                <title>Moog3</title>
                <meta name="description" content="Moog3 - web3 social network" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {isLoggedIn ? (
                <div className="page">
                    <div className="bottomBar">
                        <Bottombar />
                        <div className="logout" onClick={async () => await disconnet()}>
                            Logout
                        </div>
                    </div>
                    <div className="mainWindow">
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                        <Link href="/settings">
                            <a>Settings</a>
                        </Link>
                        <Link href="/selectedList">
                            <a>Selected List</a>
                        </Link>
                        <Link href="/findYN">
                            <a>Find Your Network</a>
                        </Link>
                        <Link href="/messages">
                            <a>Messages</a>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                        onClick={async () => {
                            await connect()
                            setIsLoggedIn(getCookie("loggedIn") || false)
                        }}
                    >
                        Login with Sequence Wallet
                    </button>
                </div>
            )}
        </>
    )
}

export default App
