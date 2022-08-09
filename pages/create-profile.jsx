import NavbarSettings from "../components/NavbarSettings"
import settingStyles from "../styles/SettingStyles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"


export function CreateProfile() {
    const item = {
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
                duration: 0.3,
                delay: 0.4
            }
        },

    }
    const item2 = {
        hidden: {
            x: 100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0.6
            }
        },

    }
    const item3 = {
        hidden: {
            y: -100,
            scale: 1,
            opacity: 0

        },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0.9
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
    return (

        <div className={settingStyles.backgroundImg}>
            <NavbarSettings />

            <div className={settingStyles.container}>
              
                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={settingStyles.connText}>Set your PFP</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={settingStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <Link href="/set-banner">
                        <a><i className={settingStyles.arrow}></i></a>
                    </Link>
                </div>

            </motion.div>



        </div>


    )

}
export default CreateProfile