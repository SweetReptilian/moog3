import { sequence } from "0xsequence"
import { ETHAuth } from "@0xsequence/ethauth"
import { setCookie, getCookie, getCookies } from "cookies-next"
import React, { useEffect, useState } from "react"
import styles from "../styles/LoginStyle.module.scss"
import Navbar from "../components/Navbar"
import { TailSpin } from "react-loader-spinner"
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { useRouter } from "next/router"
import toast, { Toaster } from "react-hot-toast"
import { motion } from "framer-motion"
import getProfileData from "../utils/getProfileData"
import Aos from "aos"
import "aos/dist/aos.css"
import { IconContext } from "react-icons"


export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(getCookie("loggedIn") || false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const connect = async () => {
        try {
            const wallet = sequence.getWallet()
            const connectDetails = await wallet.connect({
                app: "Moog3",
                authorize: true,
                ...{
                    settings: {
                        theme: "indigoDark",
                        includedPaymentProviders: ["moonpay"],
                        defaultFundingCurrency: "matic",
                        defaultPurchaseAmount: 111
                    }
                }
            })

            const ethAuth = new ETHAuth()
            if (connectDetails.proof) {
                const decodedProof = await ethAuth.decodeProof(connectDetails.proof.proofString, true)
                const isValid = await wallet.utils.isValidTypedDataSignature(
                    await wallet.getAddress(),
                    connectDetails.proof.typedData,
                    decodedProof.signature,
                    await wallet.getAuthChainId()
                )
                console.log("isValid?", isValid)
                setCookie("wallet", (await wallet.getAddress()).toLowerCase(), { path: "/" })
                setCookie("loggedIn", isValid, { path: "/" })
                if (!isValid) throw new Error("sig invalid")
            }
            await redirect((await wallet.getAddress()).toLowerCase())
        } catch (e) {
            throw new Error("login failed")
        }
    }

    const redirect = async (address) => {
        const apiRes = await getProfileData(address)
        if (apiRes.response === "data not found") {
            await router.push("/registration")
        } else {
            await router.push(`/network`)
        }
    }
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    if (isLoggedIn) {
        const wallet = sequence.getWallet()
        wallet.getAddress().then(res => {
            redirect(res.toLowerCase()).then()
        })
    }
    return (
        <>
            <div className={styles.html}>
                <div><Toaster /></div>
                <Navbar />
                <div>
                    <div data-aos="fade-up" className={styles.twoColDiv}>
                        <div className={styles.colOne}>
                            <div className={styles.welcomeTextHeroSection}>Get an idea, <br />make
                                it <span>Real</span></div>
                            <div className={styles.connText}>To get started, please connect your Sequence Wallet
                            </div>
                            <button data-aos="fade-up" className={styles.styleButtonConn}
                                onClick={async () => {
                                    setIsLoading(true)
                                    try {
                                        await connect()
                                    } catch (err) {
                                        toast.error("Login Failed.\nTry logging in again.", {
                                            duration: 4500
                                        })
                                        setIsLoading(false)
                                    }

                                    setIsLoggedIn(getCookie("loggedIn") || false)
                                }}
                            >
                                {isLoading ? <TailSpin
                                    height="15"
                                    width="15"
                                    color="#4e4646"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                /> : "Connect Wallet"}
                            </button>
                        </div>

                        <div data-aos="fade-up" className={styles.colTwo}>
                            <img className={styles.mainImgHeroSection}
                                alt={"logoGIf"}
                                src="./Group.png"
                                draggable={false} />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" >
                    <div className={styles.welcomeTextHeroSection}> What is Moog3?</div>
                    <div className={styles.connText2}> The first web3 platform who allows you to [decentralized]
                        connect with anyone you want, to build your perfect Web3 team.
                        <br />Making <span>easy</span> for you to bring your ideas and knowledge
                        into <span>reality</span>.
                    </div>
                </div>

                <div className={styles.thirdContainer}>

                    <div className={styles.projectUsersContainer}>

                        <div data-aos="flip-right" className={styles.projectUsersDiv}>
                            <div className={styles.projectUsersTitle}>Vision</div>
                            <div className={styles.projectUsersDescription}>Integrate all new web3 enhancements to
                                this platform to make <span>Moog3</span> more
                                useful and interesting for you.
                            </div>

                        </div>
                    </div>
                    <div data-aos="flip-right" className={styles.projectUsersContainer}>

                        <div className={styles.projectUsersDiv}>
                            <div className={styles.projectUsersTitle}>Team & community</div>
                            <div className={styles.projectUsersDescription}>Basically the most important things to
                                make something work.
                                We are the best team to meet the requests of the community.
                            </div>

                        </div>
                    </div>
                    <div data-aos="flip-right" className={styles.projectUsersContainer}>

                        <div className={styles.projectUsersDiv}>
                            <div className={styles.projectUsersTitle}>Renewals</div>
                            <div className={styles.projectUsersDescription}>We want to keep Moog3 up to date all the
                                time, so we keep working hard to create new features.
                            </div>

                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className={styles.sponsorsHere}>
                    <div className={styles.welcomeTextHeroSection}>Sponsors We've Integrated in Moog3</div>

                    <div className={styles.sponsorContainer}>
                        <motion.a whileHover={{ scale: 0.99 }}
                            whileTap={{ scale: 1.1 }}
                            href="https://spheron.network/?utm_source=Devpost&utm_medium=PolygonSponsor&utm_campaign=Sponsorship" target="_blank">
                            <img className={styles.sponsorPic} src="./sph.png" alt="spheron" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 0.99 }}
                            whileTap={{ scale: 1.1 }}
                            href="https://sequence.xyz/?utm_source=Devpost&utm_medium=PolygonSponsor&utm_campaign=Sponsorship" target="_blank">
                            <img className={styles.sponsorPic} src="./seq.png" alt="sequence" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 0.99 }}
                            whileTap={{ scale: 1.1 }}
                            href="https://ipfs.io/?utm_source=Devpost&utm_medium=PolygonSponsor&utm_campaign=Sponsorship" target="_blank">
                            <img className={styles.sponsorPic} src="./ipf.png" alt="ipfs" />
                        </motion.a>


                    </div>
                </div>

                <div data-aos="fade-right" className={styles.secondContainer}>
                    <div className={styles.welcomeTextHeroSection}>What this is all about</div>
                    <div className={styles.connText2}> It's about community and improvement. We are a team with
                        many <span>connected ideas</span>,
                        and we always talk about how
                        amazing was crossing paths, since sometimes is not easy find people align to a same goal as
                        you. That's why we decided to create this
                        platform where it <span>FACILITATES</span> the "search" process. All of us are excited
                        about discovering new
                        features and creating unique and useful dApps and tools for <span>Web3 evolution</span>.
                    </div>
                </div>

                <div data-aos="fade-down-right" className={styles.secondContainer}>
                    <div className={styles.welcomeTextHeroSection2}>The team</div>
                    <div className={styles.teamSection}>
                        <div className={styles.teamKit}>
                            <img className={styles.teamPic} src="./Nick.png" />
                            <div className={styles.connText3}><span>Nick </span><br />
                                <span>-</span> Smart Contract engineer

                            </div>
                        </div>
                        <div className={styles.teamKit}>
                            <a href={"https://www.suhelkapadia.engineer/"} target={"_blank"}>
                            <img className={styles.teamPic} src="./Suhel.png" />
                            </a>
                            <div className={styles.connText3}><span>Suhel </span><br />
                                <span>-</span> Fullstack Developer and Database Designer

                            </div>
                        </div>
                        <div className={styles.teamKit}>
                            <img className={styles.teamPic} src="./Horus.png" />
                            <div className={styles.connText3}><span>Horus </span><br />
                                <span>-</span> Frontend Developer and Artist

                            </div>
                        </div>

                    </div>

                </div>

                <div data-aos="fade-right" className={styles.secondContainer}>
                    <div className={styles.welcomeTextHeroSection}>Roadmap</div>
                    <div className={styles.connText4}> <span>Coming soon...</span><br />
                        But you can join our discord in the meantime to keep up to date!

                        <motion.div
                            whileHover={{ scale: 0.99 }}
                            whileTap={{ scale: 1.1 }}
                            className={styles.discordBtn}>
                            <IconContext.Provider value={{ size: "40px", color: "white" }}>
                                <TbBrandDiscord />
                            </IconContext.Provider>
                        </motion.div></div>

                </div>
            </div>
        </>
    )
}
