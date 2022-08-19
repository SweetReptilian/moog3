import styles from "../../styles/Profile.module.scss"
import Sidebar from "../../components/Sidebar"
import { IconContext } from "react-icons"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { TbBrandDiscord } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { TbPlugConnected, TbPlugConnectedX } from "react-icons/tb"
import getProfileData from "../../utils/getProfileData"
import { useRouter } from "next/router"
import { getCookies } from "cookies-next"

const Profile = () => {
    const router = useRouter()
    const [data, setData] = useState({
        name: "", banner: "", pfp: "", about: "", interests: [], skills: [], github: "", discord: "", twitter: "", website: ""
    })
    const { loggedIn } = getCookies()
    useEffect(() => {
        if (typeof window !== "undefined" && Object.keys(router.query).length > 0) {
            const getData = async () => {
                const profAddress = router.query.profAddress
                let temp = await getProfileData(profAddress)
                setData(temp)
            }
            getData().then()
        }
    }, [router.query])
    const [connect, setConnect] = useState(false)
    return (
        <div className={styles.mainContainer}>
            {typeof window !== "undefined" && loggedIn && <Sidebar />}
            <div className={styles.bigCard}>
                <div className={styles.presentation}>
                    <img src={data.banner} alt="" className={styles.banner} />

                    <div className={styles.sides}>
                        <img src={data.imageUri} alt="pfp" className={styles.pfp} />
                        <div className={styles.name}>{data.name}</div>
                        <label className={styles.projectTags}>{data.interests?.map((item, i) => <span
                            key={i}>#{item} </span>)}</label>

                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <div className={styles.links}>
                                <a className={styles.aDecor}
                                   href={`https://github.com/${data.github}`}><AiOutlineGithub /></a>
                                <a className={styles.aDecor}
                                   href={data.website}><RiPagesLine /></a>
                                <a className={styles.aDecor}
                                   href={`https://discordapp.com/users/${data.discord}`}><TbBrandDiscord /></a>
                                <a className={styles.aDecor}
                                   href={`https://twitter.com/${data.twitter}`}><AiOutlineTwitter /></a>

                            </div>

                        </IconContext.Provider>


                        <div className={styles.description}>
                            {data.about}
                        </div>
                        {typeof window !== "undefined" && loggedIn && <AnimatePresence>
                            <motion.div className={styles.iconSpace} onClick={() => setConnect(connect => !connect)}
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1 }}>
                                <div>Connect</div>
                                <IconContext.Provider
                                    value={{ size: "29px", color: "white", className: styles.checkedIcon2 }}>

                                    {connect ? <TbPlugConnectedX /> : <TbPlugConnected />}
                                </IconContext.Provider>
                            </motion.div>
                        </AnimatePresence>}
                        {typeof window !== "undefined" && !loggedIn && <AnimatePresence>
                            <motion.div className={styles.iconSpace} onClick={() => setConnect(connect => !connect)}
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1 }}>
                                <div>
                                    <a className={styles.links}>Login To Explore More</a>
                                </div>
                            </motion.div>
                        </AnimatePresence>}
                    </div>

                </div>
            </div>
            {/* <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>Posts</div>
                <AnimatePresence>
                    <div className={styles.iconSpaceWrite}>
                        <textarea className={styles.textArea} placeholder="Any updates?" />

                        <motion.div onClick={() => setConnect(connect => !connect)} whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 1 }}>
                            <IconContext.Provider value={{ size: "39px", color: "white", className: styles.checkedIcon2 }}>
                                <RiSendPlaneLine />
                            </IconContext.Provider>
                        </motion.div>
                    </div>
                </AnimatePresence>

                <div className={styles.printPosts}>
                    <div className={styles.posts}>
                        <div className={styles.postsTitle}>Project 1</div>
                        <div className={styles.postsContent}>We implemented a new function</div>
                    </div>
                    <div className={styles.posts}>
                        <div className={styles.postsTitle}>Project 1</div>
                        <div className={styles.postsContent}>We implemented a new function</div>
                    </div>
                    <div className={styles.posts}>
                        <div className={styles.postsTitle}>Project 1</div>
                        <div className={styles.postsContent}>We implemented a new function</div>
                    </div>

                    <div className={styles.posts}>
                        <div className={styles.postsTitle}>Project 1</div>
                        <div className={styles.postsContent}>We implemented a new function</div>
                    </div>

                    <div className={styles.posts}>
                        <div className={styles.postsTitle}>Project 1</div>
                        <div className={styles.postsContent}>We implemented a new function</div>

                    </div>
                </div> 

            </div> */}

        </div>

    )
}
export default Profile
