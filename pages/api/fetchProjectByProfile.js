export default async function handler(req, res) {
    const profAddress = req.body.data
    const query = `https://testnet.tableland.network/query?s=SELECT%20id,title,imageUri%20FROM%20MoogProjects_80001_846%20WHERE%20profAddress="${profAddress}"`
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
        ids: row
    })
}
