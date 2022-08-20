import styles from "../styles/Posts.module.scss"
import Sidebar from "../components/Sidebar"
import { IconContext } from "react-icons"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { FcLikePlaceholder } from "react-icons/fc"
import { TbBrandDiscord } from "react-icons/tb"
import { TbTrashX } from "react-icons/tb"
import { FaShareSquare } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"


const showAnimation = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
}


const Posts = () => {

    const [show, setShow] = useState(false)

    return (
        <div className={styles.mainContainer} >
            <Sidebar />
            <div className={styles.bigCard}>
                <div className={styles.userData}>

                    <div className={styles.nameAndSocialMediaSection}>

                        <div className={styles.nameAndSocialMediaLinks}>
                            <img src="./M.png" alt="" className={styles.userPic} />
                            <div>Nick Suh
                                <IconContext.Provider value={{ size: "20px", color: "white" }}>
                                    <div>< AiOutlineGithub /> <AiOutlineTwitter /> < TbBrandDiscord />

                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className={styles.likesSection}>
                            <AnimatePresence>
                                <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                    <motion.div
                                        whileTap={{ rotate: 360, scale: 1.3 }}
                                    >
                                        <FcLikePlaceholder />
                                    </motion.div>
                                </IconContext.Provider>
                            </AnimatePresence>
                            {/* <motion.div className={styles.likesCounter}>Like</motion.div> */}
                        </div>
                        <div className={styles.dotsSection}>
                            <AnimatePresence>
                                <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                    <motion.div
                                        whileTap={{ scale: 0.75 }}
                                        onClick={() => setShow((show) => !show)}
                                    >
                                        <BsThreeDots />
                                    </motion.div>


                                </IconContext.Provider>
                                <div className={styles.all}>
                                    <div>

                                        {show && (
                                            <motion.nav
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                            >
                                                <motion.div className={styles.innerNav}>
                                                    <div className={styles.littleMenu}>
                                                        <IconContext.Provider value={{ size: "15px" }}>

                                                            <a className={styles.littleMenuLi} href="">
                                                                <div><FaShareSquare /></div>
                                                                <div>Share</div>
                                                            </a>
                                                        </IconContext.Provider>
                                                        <IconContext.Provider value={{ size: "18px" }}>

                                                            <a className={styles.littleMenuLi} href="">
                                                                <div><TbTrashX /></div>
                                                                <div>Delete</div>
                                                            </a>
                                                        </IconContext.Provider>

                                                    </div>


                                                </motion.div>
                                            </motion.nav>

                                        )}
                                    </div>
                                </div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>


                <div className={styles.pictureSection}>
                    <img src="./logo3.png" alt="" className={styles.postPic} />

                </div>
                <div className={styles.titleSection}>

                    <div className={styles.title}>Title</div>



                </div>
                <div className={styles.bodySection}>
                    <div className={styles.keepItCentered}>This is a subtitle loll idskxjfiadsjfias djfiodshjsdiksd
                        kdfjidskjfiskjd
                    </div>

                    <div className={styles.bodyText}>In many ways, this dynamic industry is a balancing act between creating new ways to engage users, while listening to and taking care of their needs. And as we are a part of what's curating the Design world in 2022, it's obvious that it's moving forward in a way that goes beyond metrics.

                        This story briefs about the UI and UX Design Trends that are worth inspiring yourself within 2022. I'm listing a collection of ideas you should try implementing in your future projects if you haven't already to keep up with the latest design trends! It might definitely be challenging but it'll only hone your skills and make you a jack of all trades.

                        Let's briefly go through with the new design trends in this article.

                        Dark Mode
                        You can't miss out on Dark mode when it's used by both Android & iOS. Popular platforms like Facebook,
                        Instagram, Youtube, Whatsapp, Google
                        (Docs, Gmail, Maps), and Twitter all have implemented dark mode in their design and code.
                        Added advantages of dark mode are-
                        - It saves the battery if the device uses OLED or AMOLED screens.
                        - It is better in the readability of text.
                        - Minimal eye strain while using the device at night.
                        - It reduces the screen glare and minimizes blue light.</div>
                </div>

            </div >
        </div >

    )
}
export default Posts
