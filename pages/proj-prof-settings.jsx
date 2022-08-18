import formStyles from "../styles/Forms.module.scss"
import styles from "../styles/Home.module.scss"
import { AiOutlinePlusCircle } from "react-icons/ai"
import React, { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"
import Sidebar from "../components/Sidebar"
import getWalletAddress from "../utils/getWalletAddress"

export default function PickAProj() {
    const [wallet, setWallet] = useState("")
    useEffect(() => {
        const addr = async() => {
            const address = await getWalletAddress()
            setWallet(address)
        }
        addr().then()
    }, [])
    return (
        <div className={formStyles.backgroundImg}>
            <Sidebar />
            <div className={formStyles.secondDivProj}>
                <div className={styles.container}>
                    <div className={styles.alignDivProj}>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>Nick Suhel</div>
                            <a href={`/settings/${wallet}`} className={styles.projSectionA}>
                                <img className={styles.pfp} src="./mooglesnft3.png" />
                            </a>
                        </div>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a className={styles.projSectionA}>
                                <img className={styles.pfp} src="./M.png" />
                            </a>
                        </div>
                        <div className={styles.projSection}>
                            <div className={styles.projTitle}>My project's Name</div>
                            <a className={styles.projSectionA}>
                                <img className={styles.pfp} src="./M.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
