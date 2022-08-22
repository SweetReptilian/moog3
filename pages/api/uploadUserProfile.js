import {NFTStorage, File} from "nft.storage"

const uploadJson = async (jsonObject) => {
    const token = process.env.NEXT_PUBLIC_NFT_STORAGE_API
    const storage = new NFTStorage({ token })
    const jsonFile = new File(jsonObject, "moogData.json", {type: "application/json"})

    return await storage.storeDirectory([jsonFile])
}


export default async function handler(req, res) {
    const data = req.body.data
    console.log("data", data)
    const jsonCid = await uploadJson(JSON.stringify(data))
    const response = "https://nftstorage.link/ipfs/" + jsonCid + "/moogData.json"
    res.status(200).send({
        response,
    })
}