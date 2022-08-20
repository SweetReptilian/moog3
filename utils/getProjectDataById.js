const getProjectDataById = async (profAddress, id) => {

    const apiReq = await fetch("/api/fetchProjectProfileById", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: { profAddress, id },
        }),
    })
    return await apiReq.json()
}

export default getProjectDataById
