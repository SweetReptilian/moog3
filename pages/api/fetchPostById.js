import { postTableUri } from "../../constants"

export default async function handler(req, res) {
    const id = req.body.data
    const query = postTableUri + `%20WHERE%20projId=${id}`
    const request = await fetch(query)
    if (request.status.toString() === "404") {
        res.status(404).send({
            response: "data not found"
        })
        return
    }
    const response = await request.json()
    const result = response.rows
    let finResponse = []
    for (let i = 0; i < result.length; i++) {
        const tempPost = result[i]
        const tempReq = await fetch(tempPost[3])
        const temp = await tempReq.json()
        const tempRes = {postId: tempPost[2], author: tempPost[0], ...temp}
        finResponse.push(tempRes)
    }
    res.status(200).send({
       response: finResponse
    })
}
