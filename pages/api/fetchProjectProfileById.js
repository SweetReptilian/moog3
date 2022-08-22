import { projectTableUri } from "../../constants"

export default async function handler(req, res) {
    const {profAddress, id} = req.body.data
    const query = projectTableUri + `%20WHERE%20id=${id}`
    const request = await fetch(query)
    if (request.status.toString() === "404") {
        res.status(404).send({
            response: "data not found",
        })
        return
    }
    const response = await request.json()
    const row = response.rows[0]
    const wallet = row[0]
    const name = row[2]
    const imageUri = row[3]
    const bannerUri = row[4]
    const profileUri = row[5]

    const profReq = await fetch(profileUri)
    if (profReq.status.toString() === "404") {
        res.status(400).send({
            wallet: wallet,
            id: id,
            name: name,
            imageUri: imageUri,
            bannerUri: bannerUri,
            profileUri: "not found",
        })
        return
    }
    const profRes = await profReq.json()
    const about = profRes.about
    const skills = profRes.skills
    const interests = profRes.interests
    const website = profRes.website
    const discord = profRes.discord
    const twitter = profRes.twitter
    const github = profRes.github
    const requirements = profRes.requirements

    res.status(200).send({ wallet, id, name, imageUri, about, bannerUri, skills, interests, twitter, website, github, discord, requirements })
}
