import { Web3Storage } from 'web3.storage'
// import {Blob} from 'node:buffer';

const useUploadToStorage = () => {
    const apiToken = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY

    const storage = new Web3Storage({ token: apiToken })

    const uploadFile = async (file) => {
        const blob = new Blob([file], { type: "image" })
        return await storage.put([new File([blob], "image.png")])
    }

    return { uploadFile }
}

export default useUploadToStorage
