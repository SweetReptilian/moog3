import NavbarSettings from "../components/NavbarSettings"
import settingStyles from "../styles/SettingStyles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react";





const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};
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
            delay: 0
        }
    },

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

const Loader = () => {


    return (
        <div className={settingStyles.backgroundImg}>
            <NavbarSettings />
            <div className={settingStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={settingStyles.setText}>Your skills</div>
                </motion.div>
                <Spacer />
                <motion.div className="loader">
                    <motion.div
                        variants={container}

                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="loader-inner"
                    >
                        <motion.div variants={item} id="check-1">
                            <Checkbox color="primary" defaultSelected={false}>
                                Development
                            </Checkbox>

                        </motion.div>
                        <Spacer />
                        <motion.div variants={item} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                Design
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={item} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                Marketing Digital
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={item} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                Project Managment
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={item} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                Investment
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={item} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                Others
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                    </motion.div>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <Link href="/interests">
                        <a><i className={settingStyles.arrow}></i></a>
                    </Link>
                </div>

            </motion.div>



        </div>


    )

};
export const CheckBlock = ({ posX, posY, variants, id }) => {
    return (
        <motion.div
            variants={variants}
            className={`check-block ${id}`}
            style={{
                top: `${posY}vh`,
                left: `${posX}vw `,
            }}
        >
        </motion.div>
    );
};
export default Loader;

