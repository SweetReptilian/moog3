import React, { useState } from "react"
import sideStyles from "../styles/Sidebar.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose, AiOutlineMessage, AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BiHomeAlt } from "react-icons/bi"
import { IconContext } from "react-icons"
import { FaRegUserCircle } from "react-icons/fa"
import { BiNetworkChart } from "react-icons/bi"
import { MdOutlineManageAccounts } from "react-icons/md"
import { HiOutlineCog } from "react-icons/hi"
import { sequence } from "0xsequence"
import { deleteCookie, getCookies } from "cookies-next"
import { useRouter } from "next/router"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}
const showAnimation = {
    hidden: {
        opacity: 0,
        x: "-100%",
        transition: {
            duration: 0.5,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
}

const Sidebar = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { wallet } = getCookies()
    const disconnect = async () => {
        const wallet = sequence.getWallet()
        wallet.disconnect()
        deleteCookie("wallet", { path: "/" })
        deleteCookie("loggedIn", { path: "/" })
        router.push("/").then()
    }

    return (
        <div className={sideStyles.all}>
            <div className={sideStyles.sideBody}>
                <motion.button
                    className={sideStyles.toggle}
                    onClick={() => setShow((show) => !show)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IconContext.Provider value={{ size: "20px" }}>
                        {show ? <AiOutlineClose /> : <BiMenu />}
                    </IconContext.Provider>
                </motion.button>
                <AnimatePresence>
                    {show && (
                        <motion.nav
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className={sideStyles.sideNav}
                        >
                            <motion.div className={sideStyles.innerNav}>
                                <ul className={sideStyles.sideUl}>
                                    <IconContext.Provider
                                        value={{ size: "25px", className: sideStyles.icons }}
                                    >
                                        {/* <motion.li className={sideStyles.sideLi}>
                                            <a
                                                className={sideStyles.sideA}
                                                href={`/home/${wallet}`}
                                            >
                                                {" "}
                                                <BiHomeAlt /> Home
                                            </a>
                                        </motion.li> */}
                                        <motion.li className={sideStyles.sideLi}>
                                            <a className={sideStyles.sideA} href="/network">
                                                {" "}
                                                <BiHomeAlt /> Network
                                            </a>
                                        </motion.li>

                                        <motion.li className={sideStyles.sideLi}>
                                            <a className={sideStyles.sideA} href={`/profile/${wallet}`}>
                                                {" "}
                                                <FaRegUserCircle /> Profile
                                            </a>
                                        </motion.li>

                                        <motion.li className={sideStyles.sideLi}>
                                            <a className={sideStyles.sideA} href="/choose-one">
                                                {" "}
                                                <AiOutlineFundProjectionScreen /> Projects Profile
                                            </a>
                                        </motion.li>

                                        {/* 
                                        <motion.li className={sideStyles.sideLi}>
                                            <a className={sideStyles.sideA} href="/projects"> <AiOutlineFundProjectionScreen /> Projects</a>
                                        </motion.li> */}


                                        {/* 
                                        <motion.li className={sideStyles.sideLi}>
                                            <a className={sideStyles.sideA} href="/messages">
                                                {" "}
                                                <AiOutlineMessage /> Messages
                                            </a>
                                        </motion.li> */}

                                        <motion.li className={sideStyles.sideLi}>
                                            {/* in case that that person doesn't have any projects then redirect to settings
                                        <a className={sideStyles.sideA} href="/settings"> <HiOutlineCog /> Settings</a>
                                            */}
                                            <a
                                                className={sideStyles.sideA}
                                                href="/proj-prof-settings"
                                            >
                                                {" "}
                                                <HiOutlineCog /> Settings
                                            </a>
                                        </motion.li>

                                        <motion.li className={sideStyles.sideLi}>
                                            <div className={sideStyles.buttonSpace}>
                                                <button
                                                    className={sideStyles.sideButton}
                                                    onClick={async () => await disconnect()}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </motion.li>
                                    </IconContext.Provider>
                                </ul>
                            </motion.div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
export default Sidebar
