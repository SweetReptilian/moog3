import { sequence } from "0xsequence"
import { ETHAuth } from "@0xsequence/ethauth"
import { setCookie, getCookie, deleteCookie } from "cookies-next"
import React, { useState } from "react"
import styles from "../styles/LoginStyle.module.scss"
import settingStyles from "../styles/SettingStyles.module.scss"
import Navbar from "../components/Navbar";
import NavbarSettings from "./NavbarSettings"
import { TailSpin } from 'react-loader-spinner'
import App from "../src/App.js"

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(getCookie("loggedIn") || false)
    const [isLoading, setIsLoading] = useState(false)
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

            {isLoggedIn ? (

                <html className={settingStyles.html}>
                    <div className={settingStyles.backgroundImg}>

                        <App />
                    </div>

                    <button className="logout" onClick={async () => await disconnet()}>
                        Logout
                    </button>
                </html>

            ) : (
                <html className={styles.html}>
                    <Navbar />


                    <div className={styles.backgroundImg}>

                        <div className={styles.container}>

                            <img className={styles.logoGif}
                                alt={"logoGIf"}
                                src="https://ipfs.io/ipfs/bafybeicggcet7yfifxhavfv6ysx24zcjilylrv2ls6y7rys4iob3wxaabm" />
                            <div className={styles.welcomeText}>Welcome to Moog3!</div>
                            <div className={styles.connText}>To get started, please connect your Sequence Wallet</div>
                            <button className={styles.styleButtonConn}
                                onClick={async () => {
                                    setIsLoading(true)
                                    await connect()
                                    setIsLoggedIn(getCookie("loggedIn") || false)
                                }}
                            >
                                {isLoading ? <TailSpin
                                    height="15"
                                    width="15"
                                    color="#4e4646"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                /> : "Connect Wallet"}
                            </button>
                            <div className={styles.sponsorSvgsSection}>
                                <img className={styles.sponsorSvgs} alt={"sponsor-logo"} src="spheron.ico" />
                                <img className={styles.sponsorSvgs} alt={"sponsor-logo"}
                                    src="https://ipfs.io/ipfs/bafkreiewn7tto6i7uesmr7cavijj5ffumr7e2mob4hrztvt7t32rlsuqmi" />
                                <img className={styles.sponsorSvgs} alt={"sponsor-logo"} src="ipfs.ico" />

                            </div>
                        </div>
                    </div>
                </html>
            )
            }
        </>
    )
}
