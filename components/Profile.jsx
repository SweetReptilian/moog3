import modalStyles from "../styles/Modal.module.scss"
import styles from "../styles/Profile.module.scss"
import Sidebar from "../components/Sidebar"
import { IconContext } from "react-icons"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { FcLikePlaceholder } from "react-icons/fc"
import { TbBrandDiscord } from "react-icons/tb"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { TbPlugConnected, TbPlugConnectedX } from "react-icons/tb"
import getProfileData from "../utils/getProfileData"
import { getCookies } from "cookies-next"
import getWalletAddress from "../utils/getWalletAddress"
import { backdrop, modal } from "../animations/modalAnimations"
import useContract from "../hooks/useContract"
import toast, {Toaster} from "react-hot-toast"

const Profile = ({ profAddress }) => {
    const [data, setData] = useState({})
    const [owner, setOwner] = useState(false)
    getWalletAddress().then(res => {
        setOwner(res === profAddress)
    })
    const { loggedIn } = getCookies()
    const {mintNFT} = useContract()
    useEffect(() => {
        const getData = async () => {
            let temp = await getProfileData(profAddress)
            setData(temp)
        }
        getData().then()
    }, [])
    const [connect, setConnect] = useState(false)

    return (
        <div className={styles.mainContainer}>
            {loggedIn && <Sidebar />}

            <div className={styles.bigCard}>
                <div><Toaster position="top-right" reverseOrder={false} /></div>
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
                                   href={data.github}><AiOutlineGithub /></a>
                                <a className={styles.aDecor}
                                   href={data.website}><RiPagesLine /></a>
                                <a className={styles.aDecor}
                                   href={data.discord}><TbBrandDiscord /></a>
                                <a className={styles.aDecor}
                                   href={data.twitter}><AiOutlineTwitter /></a>

                            </div>

                        </IconContext.Provider>


                        <div className={styles.description}>
                            {data.about}
                        </div>
                        {/* <AnimatePresence exitBeforeEnter>
                            {showModal && (
                                <motion.div className={modalStyles.backdrop}
                                    variants={backdrop}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden">
                                    <motion.div className={modalStyles.modal}
                                        variants={modal}>
                                        <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                            <motion.div whileHover={{ scale: 0.99 }}
                                                whileTap={{ scale: 1 }}
                                                className={modalStyles.modalCloseIcon}
                                                onClick={() => setShowModal(false)}>

                                            </motion.div>
                                        </IconContext.Provider>
                                        <p className={modalStyles.modalP}>This people like you!</p>
                                    </motion.div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className={styles.likesSection}>
                            <AnimatePresence>
                                <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                    <motion.div
                                        onClick={() => setShowModal(showModal => !showModal)}
                                        whileTap={{ rotate: 360, scale: 1.3 }}

                                    >
                                        <FcLikePlaceholder />
                                    </motion.div>
                                </IconContext.Provider>
                            </AnimatePresence>
                        </div> */}

                        {typeof window !== "undefined" && loggedIn && owner && <AnimatePresence>
                            <motion.div className={styles.iconSpace} onClick={async () => {
                                try {
                                    await mintNFT()
                                    toast.success("Minted NFT Successfully")
                                } catch (e){
                                    console.error(e)
                                    toast.error("You can have just 1 NFT\nOr try again if you have 0")
                                }

                                setConnect(connect => !connect)
                            }}
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1 }}>
                                <div>Mint NFT</div>
                                <IconContext.Provider
                                    value={{ size: "29px", color: "white", className: styles.checkedIcon2 }}>
                                    <TbPlugConnected />
                                </IconContext.Provider>
                            </motion.div>
                        </AnimatePresence>
                        }
                        {!loggedIn && <AnimatePresence>
                            <motion.div className={styles.iconSpace} onClick={() => setConnect(connect => !connect)}
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1 }}>

                                <a href={"/"}>Login To Explore More</a>

                            </motion.div>
                        </AnimatePresence>}

                    </div>


                </div>
            </div>

        </div>

    )
}
export default Profile
