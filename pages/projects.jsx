import styles from "../styles/SettingStyles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import Sidebar from "../components/Sidebar"
import { AiFillGithub, AiOutlinePlusCircle } from "react-icons/ai"
import SearchBar from "../components/SearchBar"
import { IconContext } from "react-icons/lib"


export function Projects() {
    return (
        <>
            <Sidebar />

            <div className={styles.backgroundImg}>
                <div className={styles.bigProjCard}>
                    <div className={styles.projUsersMaincontainer}>
                        {/* for projects and contributors, maybe changing the view as either proj or user 
                        this can also change thus the name and icon (projects to contributors and ) on the sidebar and vice versa*/}
                        <div className={styles.title}>Go ahead and find the perfect project for you!</div>
                        <SearchBar />
                    </div>
                    <div className={styles.projectUsersContainer}>


                        <div className={styles.projectUsersDiv}>
                            <img className={styles.projectUsersPic} src="./logo512.png" draggable={false} />
                            <div className={styles.projectUsersTitle}>DIDs</div>
                            <div className={styles.projectUsersDescription}>This is a short description about this project</div>
                            <IconContext.Provider
                                value={{ size: "25px", color: "white", className: styles.projectUsersSMIcons }}
                            >
                                <div><AiFillGithub /><AiFillGithub /><AiFillGithub /></div>
                            </IconContext.Provider>
                            {/* <Link href="#">
                                <IconContext.Provider
                                    value={{ size: "60px", color: "white" }}
                                >
                                    <button className={styles.projectUserButtonBox}><AiOutlinePlusCircle /></button>
                                </IconContext.Provider>
                            </Link> */}
                        </div>
                        <div className={styles.projectUsersDiv}>
                            <img className={styles.projectUsersPic} src="./logo512.png" draggable={false} />
                            <div className={styles.projectUsersTitle}>DIDs</div>
                            <div className={styles.projectUsersDescription}>This is a short description about thi
                                s projectabout this projectabout this projectabout this projectabout this projectabout this projectabout this projectabout this project </div>
                            <IconContext.Provider
                                value={{ size: "25px", color: "white", className: styles.projectUsersSMIcons }}
                            >
                                <div><AiFillGithub /><AiFillGithub /><AiFillGithub /></div>
                            </IconContext.Provider>
                            {/* <Link href="#">
                                <IconContext.Provider
                                    value={{ size: "60px", color: "white" }}
                                >
                                    <button className={styles.projectUserButtonBox}><AiOutlinePlusCircle /></button>
                                </IconContext.Provider>
                            </Link> */}
                        </div>
                        <div className={styles.projectUsersDiv}>
                            <img className={styles.projectUsersPic} src="./logo512.png" draggable={false} />
                            <div className={styles.projectUsersTitle}>DIDs</div>
                            <div className={styles.projectUsersDescription}>This is a short description about this project</div>
                            <IconContext.Provider
                                value={{ size: "25px", color: "white", className: styles.projectUsersSMIcons }}
                            >
                                <div><AiFillGithub /><AiFillGithub /><AiFillGithub /></div>
                            </IconContext.Provider>
                            {/* <Link href="#">
                                <IconContext.Provider
                                    value={{ size: "60px", color: "white" }}
                                >
                                    <button className={styles.projectUserButtonBox}><AiOutlinePlusCircle /></button>
                                </IconContext.Provider>
                            </Link> */}
                        </div>
                        <div className={styles.projectUsersDiv}>
                            <img className={styles.projectUsersPic} src="./logo512.png" draggable={false} />
                            <div className={styles.projectUsersTitle}>DIDs</div>
                            <div className={styles.projectUsersDescription}>This is a short description about this project</div>
                            <IconContext.Provider
                                value={{ size: "25px", color: "white", className: styles.projectUsersSMIcons }}
                            >
                                <div><AiFillGithub /><AiFillGithub /><AiFillGithub /></div>
                            </IconContext.Provider>
                            {/* <Link href="#">
                                <IconContext.Provider
                                    value={{ size: "60px", color: "white" }}
                                >
                                    <button className={styles.projectUserButtonBox}><AiOutlinePlusCircle /></button>
                                </IconContext.Provider>
                            </Link> */}
                        </div>
                        <div className={styles.projectUsersDiv}>
                            <img className={styles.projectUsersPic} src="./logo512.png" draggable={false} />
                            <div className={styles.projectUsersTitle}>DIDs</div>
                            <div className={styles.projectUsersDescription}>This is a short description about this project</div>
                            <IconContext.Provider
                                value={{ size: "25px", color: "white", className: styles.projectUsersSMIcons }}
                            >
                                <div><AiFillGithub /><AiFillGithub /><AiFillGithub /></div>
                            </IconContext.Provider>
                            {/* <Link href="#">
                                <IconContext.Provider
                                    value={{ size: "60px", color: "white" }}
                                >
                                    <button className={styles.projectUserButtonBox}><AiOutlinePlusCircle /></button>
                                </IconContext.Provider>
                            </Link> */}
                        </div>
                        <div className={styles.projectUsersDiv}>
                            <img className={styles.projectUsersPic} src="./logo512.png" draggable={false} />
                            <div className={styles.projectUsersTitle}>DIDs</div>
                            <div className={styles.projectUsersDescription}>This is a short description
                                about this project about this projectabout this projectabout this projectabout this projectabout this projectabout this project</div>
                            <IconContext.Provider
                                value={{ size: "25px", color: "white", className: styles.projectUsersSMIcons }}
                            >
                                <div><AiFillGithub /><AiFillGithub /><AiFillGithub /></div>
                            </IconContext.Provider>
                            {/* <Link href="#">
                                <IconContext.Provider
                                    value={{ size: "60px", color: "white" }}
                                >
                                    <button className={styles.projectUserButtonBox}><AiOutlinePlusCircle /></button>
                                </IconContext.Provider>
                            </Link> */}
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects