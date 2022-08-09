import NavbarSettings from "../components/NavbarSettings"
import settingStyles from "../styles/SettingStyles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"


export function CreateProfile() {

    const item2 = {
        hidden: {
            scale: 0,
            rotate: 180,

        },
        visible: {
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },

    }
    const item3 = {
        hidden: {
            scale: 0,
            opacity: 0

        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0.2
            }
        },
        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }

    const arrow = {
        hidden: {
            x: -100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5,
                delay: 1
            }
        },

        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }
    const button = {
        hidden: {
            scale: 0,
            opacity: 0,

        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5,
                delay: 1
            }
        },

        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }
    return (

        <div className={settingStyles.backgroundImg}>
            <NavbarSettings />

            <div className={settingStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={settingStyles.welcomeText}>You're all set!!</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={settingStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={item3}>
                    <div className={settingStyles.welcomeText}><span role="img" aria-label="party">🥳🥳🥳🥳🥳🥳🥳</span>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <button className={settingStyles.styleButtonConn}> Let's go!</button>

                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <Link href="/">
                        <a><i className={settingStyles.arrow}></i></a>
                    </Link>
                </div>
            </motion.div>


        </div>


    )

}
export default CreateProfile