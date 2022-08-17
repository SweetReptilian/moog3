import { sequence } from "0xsequence"
import { ETHAuth } from "@0xsequence/ethauth"
import { setCookie, getCookie, deleteCookie } from "cookies-next"
import React, { useState } from "react"
import App from "../src/App";

export default function WalletConect() {
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
            {
                <html className={settingStyles.html}>
                    <div className={settingStyles.backgroundImg}>
                        <App />
                    </div>
                </html>
            }
        </>
    )
}
