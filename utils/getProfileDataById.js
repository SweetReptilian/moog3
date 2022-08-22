const getProfileDataById = async (id) => {

    const apiReq = await fetch("/api/fetchUserProfileById", {
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

export default getProfileDataById
