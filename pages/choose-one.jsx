
import formStyles from "../styles/Forms.module.scss"
import styles from "../styles/Home.module.scss"
import { AiOutlinePlusCircle } from "react-icons/ai"
import React from 'react';
import { IconContext } from "react-icons/lib";
import Sidebar from "../components/Sidebar";



export default function PickAProj() {
    return (

        <div className={formStyles.backgroundImg}>
            <Sidebar />
            <div className={formStyles.secondDivProj}>

                <div className={styles.container}>
                    <div className={styles.alignDivProj}>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a href="/proj-profile" className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                        </div>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                        </div>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                        </div>
                        <div className={styles.projSection}>

                            <IconContext.Provider value={{ size: "50px", color: "white" }}>
                                <div className={styles.projTitle}>New Project</div>
                                <a className={styles.moreIcon} href="/create-project"><AiOutlinePlusCircle /></a></IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )

}