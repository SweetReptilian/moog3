const getProjectDataByProfile = async (profAddress) => {

    const apiReq = await fetch("https://moog3.herokuapp.com/api/fetchProjectByProfile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: profAddress,
        }),
    })
    return await apiReq.json()
}

export default getProjectDataByProfile
