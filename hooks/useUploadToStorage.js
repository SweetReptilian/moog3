import {Blob, NFTStorage} from "nft.storage"

const useUploadToStorage = () => {
    const endpoint = "https://api.nft.storage"
    const token = process.env.NEXT_PUBLIC_NFT_STORAGE_API

    const storage = new NFTStorage({endpoint, token})

    const uploadFile = async (file) => {
        const blob = new Blob([file], {type: "image/png"})
        return await storage.storeBlob(blob)
    }


    return {uploadFile}
}

export default useUploadToStorage