import styles from "../styles/Home.module.scss"
import modalStyles from "../styles/Modal.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Sidebar from "../components/Sidebar"
import { FiMessageSquare } from "react-icons/fi"
import { RiHeartsLine } from "react-icons/ri"
import { AiOutlineHeart, AiOutlinePlusCircle } from "react-icons/ai"
import { RiSendPlaneLine } from "react-icons/ri"
import { TiInputCheckedOutline } from "react-icons/ti"
import { IconContext } from "react-icons"
import { useState } from "react"



const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "200px", opacity: 1,
        transition: { delay: 0.5 }
    },

}


export function Home() {
    const [show, setShow] = useState(false);

    return (


        <div className={styles.mainBox}>
            <Sidebar />
            {/* <div className={anotherStyles.titleSet}>
                <div className={anotherStyles.settingsTitle}>Home</div>
            </div> */}
            <AnimatePresence exitBeforeEnter>
                {show && (
                    <motion.div className={modalStyles.backdrop}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                        <motion.div className={modalStyles.modal}
                            variants={modal}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <div ><RiHeartsLine /></div>
                            </IconContext.Provider>
                            <p className={modalStyles.modalP}>Want to connect with Userx?</p>

                            <button className={modalStyles.modalButton}><a className={modalStyles.modalA} href="/">Yes!</a></button>

                            <button className={modalStyles.modalButton}><a className={modalStyles.modalA} href="/">View Profile</a></button>

                            <button className={modalStyles.modalButton}><a className={modalStyles.modalA} href="/">Maybe not</a></button>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
            <div className={styles.flexGrid}>
                <div className={styles.column}>
                    <div className={styles.firstRow}>
                        <img src="./mooglesnft3.png" className={styles.pfp} />
                        <div className={styles.userData}>
                            <div className={styles.name}>Suhel Nick</div>
                            <div className={styles.activeInactive}>Active Now</div>
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
                                <div ><FiMessageSquare /></div>
                            </IconContext.Provider>

                            <div className={styles.notifChatTitle}> Messages</div>
                        </div>
                        <div className={styles.newMessagesSection}>
                            <a className={styles.aClass} href="messages">
                                <div className={styles.messageBox}>
                                    <div className={styles.messagesTitle}>User123</div>
                                    <div className={styles.messagesContent}>Hey I would like you to...</div>
                                </div></a>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>Hey I would like you to...</div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>Hey I would like you to...</div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>Hey I would like you to...</div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>Hey I would like you to...</div>
                            </div>
                            <div className={styles.messageBox}>
                                <div className={styles.messagesTitle}>User123</div>
                                <div className={styles.messagesContent}>Hey I would like you to...</div>
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
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a className={styles.aClass} href="/projects">Projectx</a></div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a>Projectx</a></div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a>Projectx</a></div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a>Projectx</a></div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a>Projectx</a></div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a>Projectx</a></div>
                                </div>
                                <div className={styles.checkedCollabs}>
                                    <div className={styles.checkedIcon}><TiInputCheckedOutline /></div>
                                    <div className={styles.collabTitle}>Dev in <a>Projectx</a></div>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.secondRow}>
                        <div className={styles.notifChatSection}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <div ><RiHeartsLine /></div>
                            </IconContext.Provider>

                            <div className={styles.notifChatTitle}> Matches </div>
                        </div>
                        <div className={styles.newMessagesSection}>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div onClick={() => setShow(show => !show)} className={styles.notifTitle}>User Number 8</div>
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
                                    <a href="/profile" className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                                </div>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                                </div>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                                </div>
                                <div className={styles.projSection}>

                                    <IconContext.Provider value={{ size: "50px", color: "white" }}>
                                        <div className={styles.projTitle}>New Project</div>
                                        <a className={styles.moreIcon} href="/create-project"><AiOutlinePlusCircle /></a></IconContext.Provider>
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

                                        <div className={styles.sendButton}><RiSendPlaneLine /></div>
                                    </IconContext.Provider>
                                </div>
                                <div className={styles.printPosts}>
                                    <a className={styles.aClass} href="/profile">
                                        <div className={styles.posts}>
                                            <div className={styles.postsTitle}>Project 1</div>
                                            <div className={styles.postsContent}>We implemented a new function</div>
                                        </div></a>
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

                                    <div className={styles.posts}>
                                        <div className={styles.postsTitle}>Project 1</div>
                                        <div className={styles.postsContent}>We implemented a new function</div>
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