import { profileTableUri, projectTableUri } from "../constants/tablelandTables"

export default async function getAllData(){
    const temp = await fetch(projectTableUri)
    const projectData = await temp.json()
    const temp2 = await fetch(profileTableUri)
    const profileData = await temp2.json()
    return{
        projectData: projectData.rows,
        profileData: profileData.rows
    }
}