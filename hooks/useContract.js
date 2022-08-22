import { ethers } from "ethers"
import { MoogDaoContractAddress, MooglesNFTContractAddress, MoogleNFTAbi, MoogDaoAbi } from "../constants"
import { sequence } from "0xsequence"

const useContract = () => {
    const getContract = async () => {
        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        })
        const wallet = await sequence.getWallet()
        const provider = await wallet.getProvider()
        const signer = await wallet.getSigner()

        const moogContract = new ethers.Contract(MoogDaoContractAddress, MoogDaoAbi, provider)
        return moogContract.connect(signer)
    }
    const getContractForNFT = async () => {
        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        })
        const wallet = await sequence.getWallet()
        const provider = await wallet.getProvider()
        const signer = await wallet.getSigner()
        const moogleContract = new ethers.Contract(MoogDaoContractAddress, MoogleNFTAbi, provider)
        return moogleContract.connect(signer)
    }

    const getReadContract = async () => {
        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        })
        const wallet = sequence.getWallet()
        const signer = wallet.getSigner()
        return new ethers.Contract(MoogDaoContractAddress, MoogDaoAbi, signer)
    }

    const addUserProfile = async (user) => {
        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        })
        const wallet = await sequence.getWallet()
        const provider = await wallet.getProvider()
        const signer = await wallet.getSigner()

        const moogContract = new ethers.Contract(MoogDaoContractAddress, MoogDaoAbi, provider)
        const contract = moogContract.connect(signer)
        const { name, image, profileUri } = user
        await contract.createUserProfile(name, image, profileUri)
    }

    const sendNFT = async (recipientAddress, tokenId, erc721TokenAddress) => {
        const erc721Interface = new ethers.utils.Interface([
            'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'
        ])

        const network = "mumbai"
        await sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        })
        const wallet = await sequence.getWallet()
        const signer = await wallet.getSigner()

        const address = await wallet.getAddress()
        const data = erc721Interface.encodeFunctionData(
            'safeTransferFrom', [address, recipientAddress, tokenId]
        )
        const transaction = {
            to: erc721TokenAddress,
            data
        }
        const txnResponse = await signer.sendTransaction(transaction)
        await txnResponse.wait()
    }

    const getTokens = async () => {
        const wallet = sequence.getWallet()

        const signer = wallet.getSigner()
        const accountAddress = await signer.getAddress()

        const indexer = new sequence.indexer.SequenceIndexerClient(sequence.indexer.SequenceIndexerServices.POLYGON_MUMBAI)
        const usersCollectibles = await indexer.getTokenBalances({
            accountAddress: accountAddress,
            includeMetadata: true,
            contractAddress: '0x90B08E04F319a5468E054C14CbB270DF6CD912cb'
        })
        let userNftData = []
        for(let i=0; i<usersCollectibles.balances.length; i++){
            const collectible = usersCollectibles.balances[i]
            const img = collectible.tokenMetadata.image
            const tokenId = collectible.tokenID
            const title = collectible.tokenMetadata.name
            const collectionContractAddress = collectible.tokenMetadata.contractAddress
            userNftData.push({img, tokenId, title, collectionContractAddress})
        }
        return userNftData
    }

    const updateUserProf = async (user) => {
        const contract = await getContract()
        const { name, id, image, profileUri } = user
        await contract.updateUserProfile(id, image, profileUri, name)
    }

    const addProjectProfile = async (project) => {
        const contract = await getContract()
        const { name, image, banner, profileUri } = project
        await contract.createProjectProfile(name, image, banner, profileUri)
    }

    const updateProjectProf = async (project) => {
        const contract = await getContract()
        const {name, id, image, banner, profileUri} = project
        await contract.updateProjectProfile(id, image, banner, profileUri, name)
    }

    const createPost = async (post) => {
        const contract = await getContract()
        const {id, postUri} = post
        await contract.addPost(postUri, id)
    }

    const createContribution = async (contribution) => {
        const contract = await getContract()
        const {title, contributionUri, projectId} = contribution
        await contract.addContribution(title, "", contributionUri, projectId)
    }

    const likeProject = async (projectCreator) => {
        const contract = await getContract()
        await contract.Follow(projectCreator, false, true)
    }
    const likeContribution = async (id) => {
        const contract = await getContract()
        await contract.likeContribution(id, false)
    }

    const getFollower = async (projectCreator) => {
        const contract = await getReadContract()
        return contract.getFollowers(projectCreator)
    }

    const getContributionLikes = async (id) => {
        const contract = await getReadContract()
        return contract.getContributionLikes(id)
    }

    return {
        addUserProfile,
        updateUserProf,
        addProjectProfile,
        updateProjectProf,
        addPost: createPost,
        createContribution,
        likeProject,
        likeContribution,
        getFollower,
        getContributionLikes,
        getTokens,
        sendNFT
    }
}

export default useContract
