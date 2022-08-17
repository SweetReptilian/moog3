import {ethers} from "ethers";
import {MoogDaoContractAddress, MoogDaoAbi} from "../constants";
import {sequence} from "0xsequence";

const useContract = () => {
    const getContract = async () => {
        const network = "mumbai";
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        });
        const wallet = await sequence.getWallet()
        const provider = await wallet.getProvider()
        const signer = await  wallet.getSigner()

        const moogContract = new ethers.Contract(MoogDaoContractAddress, MoogDaoAbi, provider)
        return moogContract.connect(signer)
    }

    const addUserProfile = async (user) => {
        const contract = await getContract()
        const {name, image, profileUri} = user
        const res = await contract.createUserProfile(name, image, profileUri)
        console.log("response", res)
    }

    return {
        addUserProfile
    }
}

export default useContract;