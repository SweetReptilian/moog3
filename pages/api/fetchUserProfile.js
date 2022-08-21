import { profileTableUri } from "../../constants"

export default async function handler(req, res) {
    const walletAddress = req.body.data
    const query = profileTableUri + `%20WHERE%20profAddress=\"${walletAddress}\"`
    console.log(query)
    const request = await fetch(query)
    if (request.status.toString() === "404") {
        res.status(404).send({
            response: "data not found",
        })
        return
    }
    const response = await request.json()
    console.log("response", response)
    const row = response.rows[0]
    const wallet = row[0]
    const id = row[1]
    const name = row[2]
    const imageUri = row[3]
    const profileUri = row[4]
    console.log("profileUri", profileUri)
    const profReq = await fetch(profileUri)
    if (profReq.status.toString() === "404") {
        res.status(400).send({
            wallet: wallet,
            id: id,
            name: name,
            imageUri: imageUri,
            profileUri: "not found",
        })
        return
    }
    const profRes = await profReq.json()
    const about = profRes.about
    const banner = profRes.banner
    const skills = profRes.skills
    const interests = profRes.interests
    const website = profRes.website
    const discord = profRes.discord
    const twitter = profRes.twitter
    const github = profRes.github

    res.status(200).send({
        wallet,
        id,
        name,
        imageUri,
        about,
        banner,
        skills,
        interests,
        twitter,
        website,
        github,
        discord
    })
}
