import React from "react"
import styles from "../styles/App.module.scss"
import { sequence } from "0xsequence"
import { ETHAuth, Proof } from "@0xsequence/ethauth"
import { configureLogger } from "@0xsequence/utils"
import { log, warn } from "console-browserify"
import { useCookies } from "react-cookie"
import Sidebar from "../components/Sidebar.js"
import Network from "../pages/network"
// import Home from "../pages/home/[profAddress]"

configureLogger({ logLevel: "DEBUG" })

const network = "mumbai"
sequence.initWallet(network, {
    networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
})

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["wallet", "loggedIn"])
    const [isLoggedIn, setIsLoggedIn] = React.useState(cookies.loggedIn || false)
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
        warn("connectDetails", { connectDetails })

        const ethAuth = new ETHAuth()
        if (connectDetails.proof) {
            const decodedProof = await ethAuth.decodeProof(connectDetails.proof.proofString, true)
            const isValid = await wallet.utils.isValidTypedDataSignature(
                await wallet.getAddress(),
                connectDetails.proof.typedData,
                decodedProof.signature,
                await wallet.getAuthChainId()
            )
            log("isValid?", isValid)
            setIsLoggedIn(isValid)
            setCookie("wallet", await wallet.getAddress(), { path: "/" })
            setCookie("loggedIn", isValid, { path: "/" })
            if (!isValid) throw new Error("sig invalid")
        }
    }

    return (
        <>
            {isLoggedIn ? (
                <div className="page">
                    <div className="bottomBar">
                        <Sidebar />
                        <Network />

                        {/* <button
                            className="logout"
                            onClick={() => {
                                const wallet = sequence.getWallet();
                                wallet.disconnect();
                                removeCookie("wallet", { path: "/" });
                                removeCookie("loggedIn", { path: "/" });
                                setIsLoggedIn(false);
                            }}
                        >
                            Logout
                        </button> */}
                    </div>
                </div>
            ) : (
                <div>
                    <button className={styles.buttonStyle} onClick={() => connect()}>
                        Login via Sequence Wallet
                    </button>
                </div>
            )}
        </>
    )
}

export default App
