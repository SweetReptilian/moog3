import styles from "../styles/Profile.module.scss";
import { FcLikePlaceholder } from "react-icons/fc"
import Sidebar from "../components/Sidebar";
import { AiOutlineEye } from "react-icons/ai"
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { TbBrandDiscord, TbPencilOff } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri"


const Profile = () => {

    const [connect, setConnect] = useState(false);
    return (
        <div className={styles.mainContainer}>
            <Sidebar />
            <div className={styles.bigCard}>

                <div className={styles.presentation}>
                    <img src="./log.png" alt="" className={styles.banner} />

                    <div className={styles.sides}>
                        <img src="./mooglesnft2.png" alt="pfp" className={styles.pfp} />
                        <div className={styles.name}>NFT Motion</div>
                        <label className={styles.projectTags}>#NFT #Desing #Defi</label>

                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <div className={styles.links} >
                                <a className={styles.aDecor} href="#"><AiOutlineGithub /></a>
                                <a className={styles.aDecor} href="#"><RiPagesLine /></a>
                                <a className={styles.aDecor} href="#"><TbBrandDiscord /></a>
                            </div>

                        </IconContext.Provider>


                        <div className={styles.description}>This is a project which goal is sakjkfasdjlkasfdjk dfanfjkzasd fdjafjsThis is a project which goal is sakjkfasdjlkasfdjk dfanfjkzasd fdjafjs This is a project which goal is sakjkfasdjlkasfdjk dfanfjkzasd fdjafjs This is a project which goal is sakjkfasdjlkasfdjk dfanfjkzasd fdjafjs</div>

                    </div>

                </div>
            </div>
            {/* <this section only goes for projects*/}
            <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>We are looking for...</div>

                <div className={styles.lookingForSection}>
                    <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }} className={styles.lookingForOptions}>

                        {/* <a className={styles.aDecor} href="/apply-form"> */}
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <div className={styles.checkedIcon}><FcLikePlaceholder /></div>
                        </IconContext.Provider>
                        <div className={styles.lookingForName}>Blockchain Developer</div>
                        {/* </a> */}
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }} className={styles.lookingForOptions}>

                        {/* <a className={styles.aDecor} href="/apply-form"> */}
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <div className={styles.checkedIcon}><FcLikePlaceholder /></div>
                        </IconContext.Provider>
                        <div className={styles.lookingForName}>Marketing Digital</div>
                        {/* </a> */}
                    </motion.button>

                </div>
            </div>
            {/* gallery for projects (or may not) also contributors */}

            <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>Posts</div>
                <AnimatePresence>
                    <div className={styles.iconSpaceWrite}>
                        <textarea className={styles.textArea} placeholder="Any updates?" />

                        <motion.div onClick={() => setConnect(connect => !connect)} whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 1 }}>
                            {/* this heart goes only on the users profiles */}
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

            </div>


            <div className={styles.bigCard}>
                <div className={styles.lookingForTitle}>Gallery</div>


            </div>


            <div className={styles.lookingForTitle}>Contributors</div>
            <div className={styles.contributorsSection} >
                <img src="./mooglesnft.png" alt="contributor" className={styles.contributorsPic} />
                <img src="./mooglesnft3.png" alt="contributor" className={styles.contributorsPic} />
                <img src="./mooglesnft4.png" alt="contributor" className={styles.contributorsPic} />
                <img src="./mooglesnft2.png" alt="contributor" className={styles.contributorsPic} />
            </div>
            <div></div>










        </div >

    );
};
export default Profile;
