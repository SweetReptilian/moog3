import { sequence } from "0xsequence"
import { ETHAuth } from "@0xsequence/ethauth"
import { setCookie, getCookie, deleteCookie } from "cookies-next"
import React, { useEffect, useState } from "react"
import styles from "../styles/LoginStyle.module.scss"
import Navbar from "../components/Navbar"
import { TailSpin } from "react-loader-spinner"
import { useRouter } from "next/router"
import toast, { Toaster } from "react-hot-toast"
import getProfileData from "../utils/getProfileData"
import Aos from "aos"
import "aos/dist/aos.css"


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
                // keepWalletOpened: true,
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
            await router.push(`/home/${address}`)
        }
    }

    if (isLoggedIn) {
        const wallet = sequence.getWallet()
        wallet.getAddress().then(res => {
            redirect(res.toLowerCase()).then()
        })
    }
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            {!isLoggedIn &&
                <div className={styles.html}>
                    <div><Toaster /></div>
                    <Navbar />
                    <div className={styles.container}>
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
                                {/* <div className={styles.sponsorSvgsSection}>
                                    <img className={styles.sponsorSvgs} alt={"sponsor-logo"} src="spheron.ico" />
                                    <img className={styles.sponsorSvgs} alt={"sponsor-logo"}
                                        src="https://ipfs.io/ipfs/bafkreiewn7tto6i7uesmr7cavijj5ffumr7e2mob4hrztvt7t32rlsuqmi" />
                                    <img className={styles.sponsorSvgs} alt={"sponsor-logo"} src="ipfs.ico" />

                                </div> */}
                            </div>

                            <div data-aos="fade-up" className={styles.colTwo}>
                                <img className={styles.mainImgHeroSection}
                                     alt={"logoGIf"}
                                     src="./Group.png"
                                     draggable={false} />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className={styles.secondContainer}>
                        <div className={styles.welcomeTextHeroSection}> What is Moog3?</div>
                        <div className={styles.connText2}> The first web3 platform who allows you to [decentralized]
                            connect with anyone you want, to build your perfect Web3 team.
                            <br />Making <span>easy</span> for you to bring your ideas and knowledge
                            into <span>reallity</span>.
                        </div>
                    </div>

                    <div className={styles.thirdContainer}>

                        <div className={styles.projectUsersContainer}>

                            <div data-aos="flip-right" className={styles.projectUsersDiv}>
                                <div className={styles.projectUsersTitle}>Vision</div>
                                <div className={styles.projectUsersDescription}>Integrate to this platform
                                    all the new web3 improvements to make <span>Moog3</span> more
                                    useful and interesting for you.
                                </div>

                            </div>
                        </div>
                        <div data-aos="flip-right" className={styles.projectUsersContainer}>

                            <div className={styles.projectUsersDiv}>
                                <div className={styles.projectUsersTitle}>Team & community</div>
                                <div className={styles.projectUsersDescription}>Basically the most important things to
                                    make something works.
                                    The best team to attend to community requests.
                                </div>

                            </div>
                        </div>
                        <div data-aos="flip-right" className={styles.projectUsersContainer}>

                            <div className={styles.projectUsersDiv}>
                                <div className={styles.projectUsersTitle}>Renewals</div>
                                <div className={styles.projectUsersDescription}>We want to keep Moog3 up to date all the
                                    time, so we keep working hard on creating new features.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className={styles.secondContainer}>
                        <div className={styles.welcomeTextHeroSection}>What this is all about</div>
                        <div className={styles.connText2}> Is about community and help. We are a team with a lot
                            of <span>connected ideas</span>, and we always talk about how
                            amazing was crossing paths, since sometimes is not easy find people align to a same goal as
                            you. That's why we decided to create this
                            platform where <span>makes easy</span> the "looking for" process. All of us are excited
                            about discovering new functionalities
                            and make unique useful dApps and tools for <span>Web3 evolution</span>.
                        </div>
                    </div>
                </div>

            }
        </>
    )
}
