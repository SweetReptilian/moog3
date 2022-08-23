const getProfileData = async (profAddress, id) => {

    const apiReq = await fetch("https://moog3.herokuapp.com/api/fetchProjectProfile", {
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

export default getProfileData
