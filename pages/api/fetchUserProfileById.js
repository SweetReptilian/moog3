import { profileTableUri } from "../../constants"

export default async function handler(req, res) {
    const id = req.body.data
    const query = profileTableUri + `%20WHERE%20id=${id}`
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

    res.status(200).send({ wallet, name, imageUri })
}
