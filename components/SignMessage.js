import {sequence} from "0xsequence"
import {ethers} from "ethers"

export default function SignMessage(){
    const sign = async () => {
        const wallet = sequence.getWallet()

        console.log("Signing message...")
        const signer = wallet.getSigner()
        console.log("Signer", signer)

        const message = `Ayyy signing message with sequence shitass wallet`

        const sig = await signer.signMessage(message)
        console.log("Signature:", sig)

        const isValidHex = await wallet.utils.isValidMessageSignature(
            await wallet.getAddress(),
            ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message)),
            sig,
            await signer.getChainId()
        )
        console.log('isValidHex?', isValidHex)

        const isValid = await wallet.utils.isValidMessageSignature(await wallet.getAddress(), message, sig, await signer.getChainId())
        console.log('isValid?', isValid)
        if (!isValid) throw new Error('sig invalid')
    }
    return (
        <div>
            <button onClick={sign}>
                Sign message with sequence wallet
            </button>
        </div>
    )
}