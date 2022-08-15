import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import Sidebar from "../components/Sidebar"
import { FiMessageSquare } from "react-icons/fi"
import { RiHeartsLine } from "react-icons/ri"
import { AiOutlineHeart } from "react-icons/ai"
import { RiSendPlaneLine } from "react-icons/ri"
import { TiInputCheckedOutline } from "react-icons/ti"

import { Checkbox, Spacer } from "@nextui-org/react";

export function Home() {
    return (

        <div className={styles.mainBox}>
            <Sidebar />
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
                            <FiMessageSquare />
                            <div className={styles.notifChatTitle}> Messages</div>
                        </div>
                        <div className={styles.newMessagesSection}>
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
                            <RiHeartsLine />
                            <div className={styles.notifChatTitle}> Matches </div>
                        </div>
                        <div className={styles.newMessagesSection}>
                            <div className={styles.notifBox}>
                                <AiOutlineHeart />
                                <div className={styles.notifTitle}>User Number 8</div>
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
                                    <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                                </div>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                                </div>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>My project's Name</div>
                                    <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
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
                                    <input type="text" className={styles.textBox}>
                                    </input>
                                    <button className={styles.sendButton}><RiSendPlaneLine /></button>
                                </div>
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