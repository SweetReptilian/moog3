import {sequence} from "0xsequence";
import {ETHAuth} from "@0xsequence/ethauth";

export async function ConnectSequenceWallet() {
    const network = "mumbai";
    await sequence.initWallet(network, {
        networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
    });
    const wallet = sequence.getWallet()
    let walletAddress, isValid
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
    console.warn("connectDetails", {connectDetails})

    const ethAuth = new ETHAuth()
    if (connectDetails.proof) {
        const decodedProof = await ethAuth.decodeProof(connectDetails.proof.proofString, true)
        isValid = await wallet.utils.isValidTypedDataSignature(
            await wallet.getAddress(),
            connectDetails.proof.typedData,
            decodedProof.signature,
            await wallet.getAuthChainId()
        )
        console.log("isValid?", isValid)
        if (!isValid) throw new Error("sig invalid")
    }
    walletAddress = await wallet.getAddress()
    return {walletAddress: walletAddress, isValid: isValid}
}