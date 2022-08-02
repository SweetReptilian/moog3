import React from "react";
import styles from "../styles/Bottombar.module.scss";
import { defaultImgs } from "../constants/defaultImgs";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";

const bottombarNavLinks = ["profile", "messages", "settings", "team"];
export default function Bottombar() {
    const [address] = React.useState(getCookie("wallet") || "");

    let user;
    const router = useRouter();

    return (
        <>
            <aside className={styles.bottombar}>
                <div className={styles.bottombarContent}>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileImageDiv}>
                            <img
                                className={styles.pfpStyle}
                                src={
                                    user ? user.attributes.pfp : defaultImgs[0]
                                }
                                alt=""
                            />
                        </div>
                        <p className={styles.userName}>
                            {address
                                ? `${address.slice(0, 8)}...`
                                : "Loading..."}
                        </p>
                        <p className={styles.userWallet}>{`${address.slice(
                            0,
                            4
                        )}...${address.slice(38)}`}</p>
                    </div>
                    <nav className={styles.bottombarNav}>
                        <ul>
                            {bottombarNavLinks.map((bottombarNavLink) => (
                                <li
                                    className={styles.bottombarNavItem}
                                    key={bottombarNavLink}
                                >
                                    <Link
                                        className={
                                            router.pathname ===
                                            `/${bottombarNavLink}`
                                                ? styles.bottombarNavLinkActive
                                                : styles.bottombarNavLink
                                        }
                                        href={`/${bottombarNavLink}`}
                                    >
                                        {bottombarNavLink
                                            .charAt(0)
                                            .toUpperCase() +
                                            bottombarNavLink.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}
