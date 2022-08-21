import styles from "../styles/Posts.module.scss"
import Sidebar from "./Sidebar"
import { IconContext } from "react-icons"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { FcLikePlaceholder } from "react-icons/fc"
import { TbBrandDiscord } from "react-icons/tb"
import { TbTrashX } from "react-icons/tb"
import { FaShareSquare } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { getCookies } from "cookies-next"
import getProfileData from "../utils/getProfileData"


const showAnimation = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}


const Posts = (props) => {

    const [show, setShow] = useState(false)
    const [userData, setUserData] = useState()
    const { loggedIn } = getCookies()
    const { body, id, image, title } = props.content
    useEffect(() => {
        console.log(props)
        const user = async () => {
            const author = props.content.author
            getProfileData(author).then(res => setUserData(res))
        }
        user()
    }, [props])
    console.log(image)
    return (
        <div className={styles.mainContainer}>
            {loggedIn && <Sidebar />}
            <div className={styles.bigCard}>
                <div className={styles.userData}>

                    <div className={styles.nameAndSocialMediaSection}>

                        <div className={styles.nameAndSocialMediaLinks}>
                            <img src={userData?.imageUri} alt="" className={styles.userPic} />
                            <div>{userData?.name}
                                <IconContext.Provider value={{ size: "20px", color: "white" }}>
                                    <div>
                                        <a href={userData?.github}>
                                            < AiOutlineGithub />
                                        </a>
                                        <a href={userData?.twitter}>
                                            <AiOutlineTwitter />
                                        </a>
                                        <a href={userData?.discord}>
                                            < TbBrandDiscord />
                                        </a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>


                    </div>

                </div>


                <div className={styles.pictureSection}>
                    <img src={image} alt="" className={styles.postPic} />

                </div>
                <div className={styles.titleSection}>

                    <div className={styles.title}>{title}</div>


                </div>
                <div className={styles.bodySection}>
                    <div className={styles.keepItCentered}>
                    </div>

                    <div className={styles.bodyText}>
                        {body}
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Posts

// <div className={styles.dotsSection}>
//     <AnimatePresence>
//     <IconContext.Provider value={{ size: "29px", color: "white" }}>
// <motion.div
// whileTap={{ scale: 0.75 }}
// onClick={() => setShow((show) => !show)}
// >
// <BsThreeDots />
// </motion.div>
//
//
// </IconContext.Provider>
// <div className={styles.all}>
//     <div>
//
//         {show && (
//             <motion.nav
//                 variants={showAnimation}
//                 initial="hidden"
//                 animate="show"
//                 exit="hidden"
//             >
//                 <motion.div className={styles.innerNav}>
//                     <div className={styles.littleMenu}>
//                         <IconContext.Provider value={{ size: "15px" }}>
//
//                             <a className={styles.littleMenuLi}
//                                href="components/Post.jsx">
//                                 <div><FaShareSquare /></div>
//                                 <div>Share</div>
//                             </a>
//                         </IconContext.Provider>
//                         <IconContext.Provider value={{ size: "18px" }}>
//
//                             <a className={styles.littleMenuLi}
//                                href="components/Post.jsx">
//                                 <div><TbTrashX /></div>
//                                 <div>Delete</div>
//                             </a>
//                         </IconContext.Provider>
//
//                     </div>
//
//
//                 </motion.div>
//             </motion.nav>
//
//         )}
//     </div>
// </div>
// </AnimatePresence>
// </div>