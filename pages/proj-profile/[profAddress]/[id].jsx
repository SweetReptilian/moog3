import styles from "../../../styles/Profile.module.scss"
import modalStyles from "../../../styles/Modal.module.scss"
import Sidebar from "../../../components/Sidebar"
import { TbHammer, TbHammerOff } from "react-icons/tb"
import { IconContext } from "react-icons"
import { AiOutlineGithub, AiOutlinePicture, AiOutlineCloseCircle, AiOutlineTwitter } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { TbBrandDiscord, TbPencilOff } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { RiSendPlaneLine } from "react-icons/ri"
import { backdrop, modal } from "../../../animations/modalAnimations"
import { getCookies } from "cookies-next"
import { useRouter } from "next/router"
import getProjectDataById from "../../../utils/getProjectDataById"


const Profile = () => {
    const [connect, setConnect] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})
    const router = useRouter()
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
        if (Object.keys(router.query).length > 0) {
            const getData = async () => {
                const { profAddress, id } = router.query
                const temp = await getProjectDataById(profAddress, id)
                setData(temp)
            }
            getData().then(() => {
                console.log(data)
            })
        }
    }, [router.query])

    return (
        <div className={styles.mainContainer}>
            <Sidebar />
            <AnimatePresence exitBeforeEnter>
                {show && (
                    <motion.div className={modalStyles.backdropProfile}
                                variants={backdrop}
                                initial="hidden"
                                animate="visible"
                                exit="hidden">

                        <motion.div className={modalStyles.printPostsModal}
                                    variants={modal}>
                            <AnimatePresence>
                                <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                    <motion.div whileHover={{ scale: 0.99 }}
                                                whileTap={{ scale: 1 }}
                                                className={modalStyles.modalCloseIcon}
                                                onClick={() => setShow(false)}>
                                        <AiOutlineCloseCircle />
                                    </motion.div>
                                </IconContext.Provider>
                            </AnimatePresence>
                            <div className={modalStyles.postsModal}>
                                <div className={modalStyles.postsTitleModal}>Project 1</div>
                                <div className={modalStyles.postsContentModal}>We implemented a new function</div>
                                <div className={modalStyles.picturePostModal}> Picture preview</div>

                            </div>


                            {/* <p className={modalStyles.modalPProfile}>Want to connect with Userx?</p>

                            <button className={modalStyles.modalButtonProfile}><a className={modalStyles.modalAProfile} href="/">Yes!</a></button>

                            <button className={modalStyles.modalButtonProfile}><a className={modalStyles.modalAProfile} href="/">View Profile</a></button>

                            <button className={modalStyles.modalButtonProfile}><a className={modalStyles.modalAProfile} href="/">Maybe not</a></button> */}
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
            <div className={styles.bigCard}>

                <div className={styles.presentation}>
                    <img src={data.bannerUri} alt="banner" className={styles.banner} />

                    <div className={styles.sides}>
                        <img src={data.imageUri} alt="pfp" className={styles.pfp} />
                        <div className={styles.name}>NFT Motion</div>
                        <label className={styles.projectTags}>#NFT #Desing #Defi</label>

                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <div className={styles.links}>
                                <a className={styles.aDecor} href={data.github}><AiOutlineGithub /></a>
                                <a className={styles.aDecor} href={data.website}><RiPagesLine /></a>
                                <a className={styles.aDecor} href={data.discord}><TbBrandDiscord /></a>
                                <a className={styles.aDecor} href={data.twitter}><AiOutlineTwitter /></a>
                            </div>

                        </IconContext.Provider>
                        <div className={styles.description}>
                            {data.about}
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>We are looking for...</div>

                <div className={styles.lookingForSection}>
                    {
                        data.interests?.map((item, i) => <motion.button className={styles.lookingForOptions}>
                            {/* <a className={styles.aDecor} href="/apply-form"> */}
                            <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                <div className={styles.checkedIcon}></div>
                            </IconContext.Provider>
                            <div className={styles.lookingForName}>{item}</div>
                            {/* </a> */}
                        </motion.button>)
                    }


                    <AnimatePresence>
                        <motion.div className={styles.iconSpace} onClick={() => setConnect(connect => !connect)}
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1 }}>
                            <div>Contribute</div>
                            <IconContext.Provider
                                value={{ size: "29px", color: "white", className: styles.checkedIcon2 }}>

                                {connect ? <TbHammerOff /> : <TbHammer />}
                            </IconContext.Provider>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>Posts</div>
                <div className={styles.container}>

                    <div className={styles.postsBox}>
                        <input className={styles.inputText} placeholder="An attractive title" type="text" />

                        <AnimatePresence>
                            <div className={styles.iconSpaceWrite}>
                                <textarea className={styles.textArea} placeholder="Any updates?" />
                                <div className={styles.iconSpace}> Picture preview</div>

                                <motion.div onClick={() => setConnect(connect => !connect)} whileHover={{ scale: 0.9 }}
                                            whileTap={{ scale: 1 }}>
                                    <IconContext.Provider
                                        value={{ size: "33px", color: "white", className: styles.checkedIcon2 }}>
                                        <RiSendPlaneLine />
                                    </IconContext.Provider>
                                </motion.div>
                                <motion.div onClick={() => setConnect(connect => !connect)} whileHover={{ scale: 0.9 }}
                                            whileTap={{ scale: 1 }}>
                                    <IconContext.Provider
                                        value={{ size: "33px", color: "white", className: styles.checkedIcon2 }}>
                                        <AiOutlinePicture />
                                    </IconContext.Provider>
                                </motion.div>

                            </div>

                        </AnimatePresence>
                    </div>
                </div>
                <div className={styles.printPosts}>
                    <div className={styles.posts} onClick={() => setShow(show => !show)}>
                        <div className={styles.postsTitle}>Project 1</div>
                        <div className={styles.postsContent}>We implemented a new function</div>
                        <div className={styles.picturePost}> Picture preview</div>

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

            </div>


            {/* <div className={styles.bigCard}>
                <div className={styles.lookingForTitle}>Gallery</div>


            </div> */}


            <div className={styles.lookingForTitle}>Contributors</div>
            <div className={styles.contributorsSection}>
                <img src="mooglesnft.png" alt="contributor" className={styles.contributorsPic} />
                <img src="mooglesnft3.png" alt="contributor" className={styles.contributorsPic} />
                <img src="mooglesnft4.png" alt="contributor" className={styles.contributorsPic} />
                <img src="mooglesnft2.png" alt="contributor" className={styles.contributorsPic} />
            </div>
            <div></div>


        </div>

    )
}
export default Profile
