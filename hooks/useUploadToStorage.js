import { Web3Storage } from 'web3.storage'
// import {Blob} from 'node:buffer';

const useUploadToStorage = () => {
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2NDkyQzIxOEU3YzA0ZkIxYkUwZTBkMjczNjliZjI5NjVkZTJEODciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA5MTMzMjU0NjgsIm5hbWUiOiJNb29nMyJ9.1xflGYW2O5cTRgmA-T251RRKoh1nXJAYgKrz0QFVMHg"
    console.log(apiToken)
    const storage = new Web3Storage({ token: apiToken })

    const uploadFile = async (file) => {
        const blob = new Blob([file], { type: "image" })
        return await storage.put([new File([blob], "image.png")])
    }

    return { uploadFile }
}

export default useUploadToStorage
