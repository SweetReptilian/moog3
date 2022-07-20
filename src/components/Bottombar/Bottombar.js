import React from 'react';
import styles from './Bottombar.module.scss'
import {defaultImgs} from "./../../defaultImgs"
import { Link, useLocation } from 'react-router-dom'
import { useMoralis } from "react-moralis";

const bottombarNavLinks = ["profile", "messages", "settings", "team"];
export default function Bottombar() {
    const { Moralis } = useMoralis();
    const user = Moralis.User.current();

    const location = useLocation();


    return (
        <>
            <aside className={styles.bottombar}>
                <div className={styles.bottombarContent}>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileImageDiv}>
                            <img className={styles.pfpStyle} src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]} alt="" />
                           
                        </div>
                        <p className={styles.userName}>{user.attributes.username.slice(0, 6)}</p>
                        <p className={styles.userWallet}>{`${user.attributes.ethAddress.slice(0, 4)}...
            ${user.attributes.ethAddress.slice(38)}`}</p>

                    </div>
                    <nav className={styles.bottombarNav}>
                        <ul>
                            {bottombarNavLinks.map((bottombarNavLink =>
                                <li className={styles.bottombarNavItem} key={bottombarNavLink}>
                                    <Link className={
                                        location.pathname === `/${bottombarNavLink}`
                                            ? styles.bottombarNavLinkActive
                                            : styles.bottombarNavLink
                                    }
                                        to={`/${bottombarNavLink}`}> 
                                        {bottombarNavLink.charAt(0).toUpperCase()+bottombarNavLink.slice(1)}
                                         </Link>
                                </li>
                            ))}

                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}