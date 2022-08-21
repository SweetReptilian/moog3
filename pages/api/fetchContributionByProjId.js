import { contributionTableUri } from "../../constants"

export default async function handler(req, res) {
    const id = req.body.data
    const query = contributionTableUri + `%20WHERE%20projId=${id}`
    const request = await fetch(query)
    if (request.status.toString() === "404") {
        res.status(404).send({
            response: "data not found",
        })
        return
    }
    const response = await request.json()
    let row = []
    response.rows.map(i => row.push(i))

    res.status(200).send({
        response: row
    })
}
