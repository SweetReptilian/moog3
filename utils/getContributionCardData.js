import getProfileData from "./getProfileData"
import getDataFromUri from "./getDataFromUri"
import useContract from "../hooks/useContract"

const getData = async (user, contri) => {
    const userData = await getProfileData(user)
    const contriData = await getDataFromUri(contri)
    return {userData, contriData}
}

const {getContributionLikes} = useContract()

const getContributionCardData = async (contributionData) => {
    let finalArr = []
    for (let i=0; i<contributionData?.length; i++){
        const tempUser = contributionData[i]
        const res = await getData(tempUser[1], tempUser[5])
        const likes = await getContributionLikes(tempUser[0])
        const finObj = {
            contributionId: tempUser[0],
            title: tempUser[3],
            description: res.contriData?.description,
            github: res?.contriData?.github,
            author: res?.userData.name,
            authorPfp: res?.userData.imageUri,
            authorWallet: res?.userData.wallet,
            likes: likes.length
        }
        finalArr.push(finObj)
    }
    return finalArr
}

export default getContributionCardData
