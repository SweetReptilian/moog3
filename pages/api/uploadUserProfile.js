import fs from "fs"
import { Web3Storage, getFilesFromPath } from 'web3.storage'

const uploadJson = async (jsonObject) => {
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2NDkyQzIxOEU3YzA0ZkIxYkUwZTBkMjczNjliZjI5NjVkZTJEODciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA5MTMzMjU0NjgsIm5hbWUiOiJNb29nMyJ9.1xflGYW2O5cTRgmA-T251RRKoh1nXJAYgKrz0QFVMHg"
    const storage = new Web3Storage({ token: apiToken })

    await fs.promises.writeFile("./constants/userProfile.json", jsonObject)
    let file = "./constants/userProfile.json"
    const pathFiles = await getFilesFromPath(file)
    return await storage.put(pathFiles)
}


export default async function handler(req, res) {
    const data = req.body.data
    const jsonCid = await uploadJson(JSON.stringify(data))
    const response = "https://" + jsonCid + ".ipfs.w3s.link/userProfile.json"
    console.log("response", response)
    res.status(200).send({
        response,
    })
}
