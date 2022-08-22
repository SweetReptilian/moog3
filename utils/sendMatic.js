import { sequence } from "0xsequence"
import { ethers } from "ethers"

export const sendMatic = async (amount, recepient) => {
    // const network = "mumbai";
    // await sequence.initWallet(network, {
    //     networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
    // })
    const wallet = sequence.getWallet()
    const signer = wallet.getSigner()

    const tx1= {
        delegateCall: false,
        revertOnError: false,
        gasLimit: '0x55555',
        to: recepient,
        value: ethers.utils.parseEther(amount),
        data: '0x'
    }
    try{
        return await signer.sendTransaction(tx1)
    } catch (e){
        console.error(e)
        return false
    }
}