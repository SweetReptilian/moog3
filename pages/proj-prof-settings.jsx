
import formStyles from "../styles/Forms.module.scss"
import styles from "../styles/Home.module.scss"
import { AiOutlinePlusCircle } from "react-icons/ai"
import React, { useState } from 'react';
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
                            <div className={styles.projTitle}>Nick Suhel</div>
                            <a href="/settings" className={styles.projSectionA}><img className={styles.pfp} src="./mooglesnft3.png" /></a>
                        </div>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                        </div>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a className={styles.projSectionA}><img className={styles.pfp} src="./M.png" /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )

}