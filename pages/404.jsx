import styles from "../styles/SettingStyles.module.scss"


export default function NotFoundError() {
    return (
        <>
            <div className={styles.backgroundImg}>
                <div className={styles.errorCard}>
                    <div className={styles.errorDiv}>
                        <div className={styles.errorRight}>
                            <img className={styles.errorImg}
                                alt={"logoGIf"}
                                src="./404.png"
                                draggable={false} />
                        </div>
                        <div className={styles.errorLeft}>
                            <div className={styles.errorTitle}><span>Oops!</span> <br />  I think we can't find this page</div>
                            <div className={styles.errorWelcomeText}>Don't worry, this button will guide you to a safe place...</div>
                            <button className={styles.goBack}>
                                <a href="/profile">Let's go!</a>
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}