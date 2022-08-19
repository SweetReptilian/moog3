import styles from "../../styles/Home.module.scss"
import modalStyles from "../../styles/Modal.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "../../components/Sidebar"
import { FiMessageSquare } from "react-icons/fi"
import { RiHeartsLine } from "react-icons/ri"
import { AiOutlineHeart, AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { RiSendPlaneLine } from "react-icons/ri"
import { TiInputCheckedOutline } from "react-icons/ti"
import { IconContext } from "react-icons"
import { useState, useEffect } from "react"
import { backdrop, modal } from "../../animations/modalAnimations"
import { useRouter } from "next/router"
import getProfileData from "../../utils/getProfileData"
import { getCookies } from "cookies-next"

export function Home() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const [data, setData] = useState({})
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
        if (Object.keys(router.query).length > 0) {
            const getData = async () => {
                const profAddress = router.query.profAddress
                let temp = await getProfileData(profAddress)
                setData(temp)
            }
            getData().then()
        }
    }, [router.query])

    return (
        <div className={styles.mainBox}>
            <Sidebar />
            <AnimatePresence exitBeforeEnter>
                {show && (
                    <motion.div
                        className={modalStyles.backdrop}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div className={modalStyles.modal} variants={modal}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <motion.div
                                    whileHover={{ scale: 0.99 }}
                                    whileTap={{ scale: 1 }}
                                    className={modalStyles.modalCloseIcon}
                                    onClick={() => setShow(false)}
                                >
                                    <AiOutlineCloseCircle />
                                </motion.div>
                                <div>
                                    <RiHeartsLine />
                                </div>
                            </IconContext.Provider>
                            <p className={modalStyles.modalP}>Want to connect with Userx?</p>

                            <button className={modalStyles.modalButton}>
                                <a className={modalStyles.modalA} href="/">
                                    Yes!
                                </a>
                            </button>

                            <button className={modalStyles.modalButton}>
                                <a className={modalStyles.modalA} href="/">
                                    View Profile
                                </a>
                            </button>

                            <button className={modalStyles.modalButton}>
                                <a onClick={() => setShow(false)} className={modalStyles.modalA}>
                                    Maybe not
                                </a>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={styles.flexGrid}>
                <div className={styles.column}>
                    <div className={styles.firstRow}>
                        <img src={data.imageUri} className={styles.pfp} alt={"user"} />
                        <div className={styles.userData}>
                            <div className={styles.name}>{data.name}</div>
                            {/* <div className={styles.activeInactive}>Active Now</div> */}
                        </div>
                        <div className={styles.notifIcons}></div>
                    </div>
                </div>
            </div>

            <div className={styles.flexGridThirds}>
                <div className={styles.column}>
                    <div className={styles.secondRow}>
                        <div className={styles.notifChatSection}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <div>
                                    <FiMessageSquare />
                                </div>
                            </IconContext.Provider>

                            <div className={styles.notifChatTitle}> Messages</div>
                        </div>
                        <div className={styles.newMessagesSection}>
                            <a className={styles.aClass} href="messages">
                                <div className={styles.messageBox}>
                                    <div className={styles.messagesTitle}>User123</div>
                                    <div className={styles.messagesContent}>
                                        Hey I would like you to...
                                    </div>
                                </div>
                            </a>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>
                                    Hey I would like you to...
                                </div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>
                                    Hey I would like you to...
                                </div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>
                                    Hey I would like you to...
                                </div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>
                                    Hey I would like you to...
                                </div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>
                                    Hey I would like you to...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.secondRow}>
                        <div className={styles.contributionSection}>
                            <div className={styles.projHeader}>My Collabs</div>
                            <div className={styles.alignCollabDiv}>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in{" "}
                                        <a className={styles.aClass} href="/projects">
                                            Projectx
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in <a>Projectx</a>
                                    </div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in <a>Projectx</a>
                                    </div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in <a>Projectx</a>
                                    </div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in <a>Projectx</a>
                                    </div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in <a>Projectx</a>
                                    </div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}>
                                        <TiInputCheckedOutline />
                                    </div>
                                    <div className={styles.collabTitle}>
                                        Dev in <a>Projectx</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.secondRow}>
                        <div className={styles.notifChatSection}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <div>
                                    <RiHeartsLine />
                                </div>
                            </IconContext.Provider>

                            <div className={styles.notifChatTitle}> Matches </div>
                        </div>
                        <div className={styles.newMessagesSection}>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div
                                    onClick={() => setShow((show) => !show)}
                                    className={styles.notifTitle}
                                >
                                    User Number 8
                                </div>
                            </div>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 11</div>
                            </div>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 11</div>
                            </div>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 11</div>
                            </div>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 11</div>
                            </div>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 11</div>
                            </div>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 11</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.flexGridSecond}>
                <div className={styles.column}>
                    <div className={styles.thirdRow}>
                        <div className={styles.projectDiv}>
                            <div className={styles.projHeader}>My projects</div>
                            <div className={styles.alignDiv}>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a href="/profile/[profAddress].jsx" className={styles.projSectionA}>
                                        <img className={styles.pfp} src="../public/M.png" />
                                    </a>
                                </div>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a className={styles.projSectionA}>
                                        <img className={styles.pfp} src="../public/M.png" />
                                    </a>
                                </div>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a className={styles.projSectionA}>
                                        <img className={styles.pfp} src="../public/M.png" />
                                    </a>
                                </div>
                                <div className={styles.projSection}>
                                    <IconContext.Provider value={{ size: "50px", color: "white" }}>
                                        <div className={styles.projTitle}>New Project</div>
                                        <a className={styles.moreIcon} href="/CreateProject">
                                            <AiOutlinePlusCircle />
                                        </a>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blank} />
                <div className={styles.column}>
                    <div className={styles.thirdRow}>
                        <div className={styles.projectDiv}>
                            <div className={styles.projHeader}>Posts</div>
                            <div className={styles.postsBigBox}>
                                <div className={styles.postsFirstBox}>
                                    <select className={styles.selectProjectBox}>
                                        <option value="project1">Project1</option>
                                        <option value="project2">Project2</option>
                                        <option value="project3">Project3</option>
                                    </select>
                                    <input type="text" className={styles.textBox} />
                                    <IconContext.Provider value={{ size: "15px", color: "white" }}>
                                        <div className={styles.sendButton}>
                                            <RiSendPlaneLine />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <div className={styles.printPosts}>
                                    <a className={styles.aClass} href="/profile/[profAddress].jsx">
                                        <div className={styles.posts}>
                                            <div className={styles.postsTitle}>Project 1</div>
                                            <div className={styles.postsContent}>
                                                We implemented a new function
                                            </div>
                                        </div>
                                    </a>
                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>
                                            We implemented a new function
                                        </div>
                                    </div>
                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>
                                            We implemented a new function
                                        </div>
                                    </div>

                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>
                                            We implemented a new function
                                        </div>
                                    </div>

                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>
                                            We implemented a new function
                                        </div>
                                    </div>

                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>
                                            We implemented a new function
                                        </div>
                                    </div>

                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>
                                            We implemented a new function
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
