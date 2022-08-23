const getProfileData = async (profAddress) => {

    const apiReq = await fetch("https://moog3.herokuapp.com/api/fetchUserProfile", {
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

export default getProfileData
