import { sequence } from "0xsequence"

const getWalletAddress = async () => {
    const network = "mumbai";
    await sequence.initWallet(network, {
        networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
    })
    const seqWallet = sequence.getWallet()
    return (await seqWallet.getAddress()).toLowerCase()
}

export default getWalletAddress;