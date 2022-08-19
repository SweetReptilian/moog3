import { sequence } from "0xsequence"

const getWalletAddress = async () => {
    if (typeof window !== "undefined"){
        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com"
        })
        const seqWallet = sequence.getWallet()
        return (await seqWallet.getAddress()).toLowerCase()
    }
}

export default getWalletAddress;