import formStyles from "../styles/Forms.module.scss"
import styles from "../styles/Home.module.scss"
import { AiOutlinePlusCircle } from "react-icons/ai"
import React, { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"
import Sidebar from "../components/Sidebar"
import { getCookies } from "cookies-next"
import { useRouter } from "next/router"
import getProjectByAddress from "../utils/getProjectByAddress"
import getWalletAddress from "../utils/getWalletAddress"


export default function PickAProj() {
    const router = useRouter()
    const [wallet, setWallet] = useState("")
    const [ids, setIds] = useState()
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
        getWalletAddress().then(wallet => {
            setWallet(wallet)
            getProjectByAddress(wallet).then(res => setIds(res))
        })
    }, [router.query])
    console.log("ids", ids)
    return (

        <div className={formStyles.backgroundImg}>
            <Sidebar />
            <div className={formStyles.secondDivProj}>

                <div className={styles.container}>
                    <div className={styles.alignDivProj}>
                        {
                            ids?.response !== "data not found" &&
                            ids?.ids.map((name) =>
                                <div className={styles.projSection}>
                                    <div className={styles.projTitle}>{name[1]}</div>
                                    <a href={`/proj-profile/${wallet}/${name[0]}`} className={styles.projSectionA}>
                                        <img alt={"project pfp"} className={styles.pfp} src={name[2]} />
                                    </a>
                                </div>
                            )
                        }

                        <div className={styles.projSection}>

                            <IconContext.Provider value={{ size: "50px", color: "white" }}>
                                <div className={styles.projTitle}>New Project</div>
                                <a className={styles.moreIcon}
                                   href="/create-project"><AiOutlinePlusCircle /></a></IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}