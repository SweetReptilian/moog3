import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import {getCookie} from "cookies-next";
import {useState} from "react";

export function NavbarSettings() {
    const [address, setAddress] = useState(getCookie("wallet"))
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a>
                    <img className={styles.imgG} src="./M.png" draggable={false}/>
                </a>
            </Link>
            <div className={styles.mooglesM}><label className={styles.labelL}>Moog3</label></div>
            <div className={styles.actions}>
                <button className={styles.styleButtonConn}>{`${address.slice(0, 4)}...${address.slice(38)}`}
                </button>

            </div>
        </div>

    );
}

export default NavbarSettings