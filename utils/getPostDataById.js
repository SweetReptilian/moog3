const getPostDataById = async (id) => {

    const apiReq = await fetch("/api/fetchPostById", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: id,
        }),
    })
    return await apiReq.json()
}

export default getPostDataById
