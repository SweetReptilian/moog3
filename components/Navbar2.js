import styles from "../styles/Navbar2.module.scss";


export function Navbar2() {


    return (


        <html className={styles.htmlStyle}>
            <div id="sidebar" className={styles.sidebar}>
                <div className={styles.logoDetails}>
                    <i class='bx bxl-c-plus-plus'></i>
                    <label className={styles.logo_name}>Moog3</label>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#">
                            <i class="bx bx-grid-alt"></i>
                            <span className={styles.linkName}> Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="bx bx-grid-alt"></i>
                            <span className={styles.linkName}> Profile </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="bx bx-grid-alt"></i>
                            <span className={styles.linkName}> Projects </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="bx bx-grid-alt"></i>
                            <span className={styles.linkName}> Contributors </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="bx bx-grid-alt"></i>
                            <span className={styles.linkName}> Settings </span>
                        </a>
                    </li>
                    <li>

                        <div className={styles.profileDetails}>
                            <div className={styles.profileContent}>
                                <img src="" alt="" />
                            </div>

                            <div className={styles.name}>
                                <div className={styles.userName}>Horus</div>

                            </div>
                            <i class="bx bx-log-out"></i>
                        </div>
                    </li>

                </ul>
            </div >
            <section className={styles.homeSection}>
                <div className={styles.homeContent}>
                    <i class="bx bx-menu"></i>
                    <button id="text" className={styles.text} >Drop down sidebar</button>
                </div>
            </section>


        </html >
    )

}

export default Navbar2;