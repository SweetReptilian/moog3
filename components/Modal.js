import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "../styles/try.module.scss"

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

const Modal = ({ showModal, setModal }) => {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {showModal && (
                    <motion.div className={styles.backdrop}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                        <motion.div className={styles.modal}
                            variants={modal}>
                            <p>Want to connect with Userx?</p>
                            <Link to="">
                                <button>Yes!</button>
                            </Link>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Modal;