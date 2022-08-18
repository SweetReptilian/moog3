const getProfileData = async (profAddress) => {
    console.log("profAddress", profAddress)

    const apiReq = await fetch("/api/fetchUserProfile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: profAddress,
        }),
    })
    const apiResponse = await apiReq.json()
    return apiResponse
}

export default getProfileData
