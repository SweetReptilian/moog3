import React from "react";
import styles from "./Bottombar.module.scss";
import { defaultImgs } from "./../../defaultImgs";
import { Link, useLocation } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { sequence } from "0xsequence";
import { log, warn } from "console-browserify";
import { useCookies } from "react-cookie";

const bottombarNavLinks = ["profile", "messages", "settings", "team"];
export default function Bottombar() {
    const [cookies, setCookie] = useCookies(["wallet", "loggedIn"]);
    const [address, setAddress] = React.useState(cookies.wallet || "");

    let user;
    const getWalletAddress = async () => {
        const wallet = sequence.getWallet();
        const address = await wallet.getAddress();
        setAddress(address);
    };
    (async () => await getWalletAddress())();
    const location = useLocation();

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
                                            location.pathname ===
                                            `/${bottombarNavLink}`
                                                ? styles.bottombarNavLinkActive
                                                : styles.bottombarNavLink
                                        }
                                        to={`/${bottombarNavLink}`}
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
