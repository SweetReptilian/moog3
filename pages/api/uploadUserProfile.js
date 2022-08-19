import fs from "fs"
import { Web3Storage, getFilesFromPath } from 'web3.storage'

const uploadJson = async (jsonObject) => {
    const apiToken = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY
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
