import styles from "../styles/SettingStyles.module.scss"
import someStyles from "../styles/AnotherStyles.module.scss"
import Sidebar from "../components/Sidebar"
import { AiFillGithub, AiOutlinePlusCircle } from "react-icons/ai"
import SearchBar from "../components/SearchBar"
import { IconContext } from "react-icons/lib"
import { FiTwitter } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { useEffect, useState } from "react"
import { getCookies } from "cookies-next"
import { useRouter } from "next/router"
import getAllData from "../utils/getAllData"
import getDataFromUri from "../utils/getDataFromUri"
import { RiPagesLine } from "react-icons/ri"

export function Network() {
    const router = useRouter()
    const [profileData, setProfileData] = useState([])
    const [projectData, setProjectData] = useState([])
    const [showProject, setShowProject] = useState(true)
    const [showProfile, setShowProfile] = useState(true)
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
        const getData = async () => {
            const { profileData, projectData } = await getAllData()
            const tempProject = [], tempProfile = []
            for (let i = 0; i < projectData.length; i++) {
                const obj = projectData[i]
                const metadata = await getDataFromUri(obj[5])
                const final = [obj[0], obj[1], obj[2], obj[3], metadata.about, metadata.discord, metadata.website, metadata.twitter, metadata.github]
                tempProject.push(final)
            }
            for (let i = 1; i < profileData.length; i++) { // reset it to 0 when deploying
                const obj = profileData[i]
                const metadata = await getDataFromUri(obj[4])
                const final = [obj[0], obj[1], obj[2], obj[3], metadata.about, metadata.discord, metadata.website, metadata.twitter, metadata.github]
                tempProfile.push(final)
            }
            return { tempProject, tempProfile }
        }
        getData().then(res => {
            setProjectData(res.tempProject)
            setProfileData(res.tempProfile)
        })
    }, [])
    const projectCards = projectData?.map(project =>
        <div onClick={() => router.push(`/proj-profile/${project[0]}/${project[1]}`).then()} key={project[1]}
            className={styles.projectUsersDiv}>
            <img className={styles.projectUsersPic} src={project[3]} draggable={false} />
            <div className={styles.projectUsersTitle}>{project[2]}</div>
            <div className={styles.projectUsersDescription}>{project[4].slice(0, 20)}...</div>
            <IconContext.Provider
                value={{
                    size: "25px",
                    color: "white",
                    className: styles.projectUsersSMIcons
                }}
            >
                <div>
                    <a href={project[8]}><AiFillGithub /></a>
                    <a href={project[7]}><FiTwitter /></a>
                    <a href={project[6]}><RiPagesLine /></a>
                    <a href={project[5]}><TbBrandDiscord /></a>
                </div>
            </IconContext.Provider>
        </div>
    )
    const profileCards = profileData?.map(profile =>
        <div onClick={() => router.push(`/profile/${profile[0]}`).then()} key={profile[1]}
            className={styles.projectUsersDiv}>
            <img className={styles.projectUsersPic} src={profile[3]} draggable={false} />
            <div className={styles.projectUsersTitle}>{profile[2]}</div>
            <div className={styles.projectUsersDescription}>{profile[4].slice(0, 20)}...</div>
            <IconContext.Provider
                value={{
                    size: "25px",
                    color: "white",
                    className: styles.projectUsersSMIcons
                }}
            >
                <div>
                    <a href={profile[8]}><AiFillGithub /></a>
                    <a href={profile[7]}><FiTwitter /></a>
                    <a href={profile[6]}><RiPagesLine /></a>
                    <a href={profile[5]}><TbBrandDiscord /></a>
                </div>
            </IconContext.Provider>
        </div>
    )
    function toggleProfile() {
        console.log("I was clicked")
        setShowProfile(prevState => !prevState)
    }
    function toggleProject() {
        console.log("I was clicked too")
        setShowProject(prevState => !prevState)
    }
    return (
        <>
            <Sidebar />
            <div className={someStyles.settingsTitle}>Network</div>

            <div className={styles.backgroundImg}>
                <div className={styles.bigProjCard}>
                    <div className={styles.projUsersMaincontainer}>
                        {/* for projects and contributors, maybe changing the view as either proj or user 
                        this can also change thus the name and icon (projects to contributors and ) on the sidebar and vice versa*/}
                        <div className={styles.title}>Go ahead and find who you need!</div>
                        <SearchBar handleProjectClick={toggleProject} handleProfileClick={toggleProfile} />
                    </div>
                    <div className={styles.projectUsersContainer}>
                        {showProject && projectCards}
                        {showProfile && profileCards}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Network