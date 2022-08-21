import styles from "../styles/SettingStyles.module.scss"
import Image from "next/image"


export default function NotFoundError() {
    return (
        <>
            <div className={styles.backgroundImg}>
                <div className={styles.errorCard}>
                    <div className={styles.errorDiv}>
                        <div className={styles.errorRight}>
                            <Image className={styles.errorImg}
                                alt={"404"}
                                src={"/404.png"}
                                   width={350}
                                   height={400}
                                draggable={false} />
                        </div>
                        <div className={styles.errorLeft}>
                            <div className={styles.errorTitle}><span>Oops!</span> <br />  I think we can't find this page</div>
                            <div className={styles.errorWelcomeText}>Don't worry, this button will guide you to a safe place...</div>
                            <button className={styles.goBack}>
                                <a href="/">Let's go!</a>
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}