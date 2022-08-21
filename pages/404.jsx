import styles from "../styles/SettingStyles.module.scss"
import Image from "next/image"


export default function NotFoundError() {
    return (
        <>
            <div className={styles.backgroundImg}>
                <div className={styles.errorCard}>
                    <div className={styles.errorDiv}>
                        <div className={styles.errorRight}>
                            <img className={styles.errorImg}
                                alt={"404"}
                                src={"https://lh3.googleusercontent.com/G6O8hG_peHi-e3vZIfT_5t8wiOiMKHz4XV3vDbP1IC1lfNXBAh0JGSq8FS2q3HdsyULxac-xjwtpWOQXVy-Nfq5j9zPJZHv3dmBEyUBQG5d0_8ToezRzhZ9mwf__RiL9_uf_-wvYGBCZjngKBJa4DduUkNKbefDr_OEr2ZBeNCcDTrZ-muRlCqkuunjxr1G5dkUUbvaz4gxnUgHAg0VlZ4O0qakWU3MAgGjMqODBUGebcwqnLkRB8D5yRqPcBCEyDk6Kaeh_t6YHgZBQMxAKnOPaK6xpgQoPwoz9oJEms8bMXY131gCl_jG2loPSuffLkb5LYEO7wTHiqkq6fbnuOO9rJEAUzisuGH2siu1VcfnC7g9mu0Md57OQWNOBu-wIxU1_e8_fgPDzKN93prwZ2C55kQf3OYXRUvT3PDrSQlzyajXxd4aEhtha1bStNhT-CFATqig9T3JMEtFxLwix-mHTkFycwpbet37oYjAVN2b3-ox8Ib15sirJn6G9Zj14QAfYygSs1zxHIfkmb0HJz4MxCUsscS_ZAI7p_KC0XPYEynaPTQKRW2Q961oXBfEfEmTUtJs9sdSmrbri1UnkAk3na3YZu0MIwTJm4xcsX-r8ZHupUseKKlUopp8_BSvkcp_yv7Sc3VoccSpnWJuGeNeUB2xqe7rU_wpTNh3nbmZKruu095CY6OGxEq7BtjteLHBvaWROrxDIy7m98xll_MBRQm6AdPOGsUFoU4GSen1BLoAPBECcmoivofTfV0AxQfnR-LdRiLKsoKWPz9vOxAcZ4uRSsms2g_qyTcJhV3Gz12oNt1SHoZAnFMEjcJexvLYR3Q=w620-h632-no?authuser=0"}
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