import {Blob, File, NFTStorage} from "nft.storage"
import fs from "fs"

const uploadJson = async (jsonObject) => {
    const endpoint = "https://api.nft.storage"
    const token = process.env.NEXT_PUBLIC_NFT_STORAGE_API

    const storage = new NFTStorage({endpoint, token})
    await fs.promises.writeFile("./constants/userProfile.json", jsonObject)
    let file = await fs.promises.readFile("./constants/userProfile.json", "utf-8")
    return await storage.storeDirectory([new File([file], "userProfile.json")])
}

export default async function handler(req, res) {
    const data = req.body.data
    console.log("data", data)
    const jsonCid = await uploadJson(JSON.stringify(data))
    const response = "https://ipfs.io/ipfs" + jsonCid + "/userProfile.json"
    res.status(200).send({
        response
    })
}