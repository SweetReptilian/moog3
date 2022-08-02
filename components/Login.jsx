import { sequence } from "0xsequence";
import { ETHAuth, Proof } from "@0xsequence/ethauth";
import { setCookie, getCookie } from "cookies-next";
import React from "react";

export default function Login(props) {
    const network = "mumbai";
    sequence.initWallet(network, {
        networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
    });
    const connect = async () => {
        const wallet = sequence.getWallet();
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
        });
        console.warn("connectDetails", { connectDetails });

        const ethAuth = new ETHAuth();
        if (connectDetails.proof) {
            const decodedProof = await ethAuth.decodeProof(
                connectDetails.proof.proofString,
                true
            );
            const isValid = await wallet.utils.isValidTypedDataSignature(
                await wallet.getAddress(),
                connectDetails.proof.typedData,
                decodedProof.signature,
                await wallet.getAuthChainId()
            );
            console.log("isValid?", isValid);
            setCookie("wallet", await wallet.getAddress(), { path: "/" });
            setCookie("loggedIn", isValid, { path: "/" });
            if (!isValid) throw new Error("sig invalid");
        }
    };
    return (
        <button onClick={() => props.handleClick}>
            Sign in with Sequence Wallet
        </button>
    );
}
