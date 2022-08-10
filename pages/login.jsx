import NavbarSettings from "../components/NavbarSettings"
import settingStyles from "../styles/SettingStyles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react";
import React, { useState } from 'react';


export function LogIn() {
    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    };
    const checkBox = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: "easeInOut",
                duration: 0.8,
            },
        },
    };
    const checkBox2 = {
        hidden: {
            x: 100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0
            }
        },

    }
    const item = {
        hidden: {
            x: -100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.3,
                delay: 0.4
            }
        },

    }
    const item2 = {
        hidden: {
            x: 100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0.6
            }
        },

    }
    const item3 = {
        hidden: {
            y: -100,
            scale: 1,
            opacity: 0

        },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0.9
            }
        },
        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }

    const party = {
        hidden: {
            x: -100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5,
                delay: 1
            }
        },

        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }
    const button = {
        hidden: {
            scale: 0,
            opacity: 0,

        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5,
                delay: 1.1
            }
        },

        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }
    const arrow = {
        hidden: {
            x: -100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5,
                delay: 1
            }
        },

        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }
    const arrow2 = {
        hidden: {
            x: -100,
            scale: 1,
            opacity: 0,

        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5,
                delay: 2.7
            }
        },

        exit: {
            y: 200,
            scale: 0,
            opacity: 0
        }

    }
    
    const [name, setName] = useState(true);
    const [pfp, setPfp] = useState(false);
    const [banner, setBanner] = useState(false);
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [interests, setInterests] = useState(false);
    const [allDone, setAllDone] = useState(false);

    const Name =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={settingStyles.welcomeText}>Alright! Just few more steps before creating...</div>

                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={settingStyles.setText}>Your name</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <input type="text" placeholder="Moogle1" className={settingStyles.inputName}></input>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <a onClick={() => setContent(2)}><i className={settingStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Pfp =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={settingStyles.connText}>Set your PFP</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={settingStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <a onClick={() => setContent(3)}><i className={settingStyles.arrow}></i></a>
                </div>

            </motion.div>

        </div>;
    const Banner =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={settingStyles.setText}>Set your banner</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <img className={settingStyles.banner} src="./logo3.png" draggable={false} />
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <a onClick={() => setContent(4)}><i className={settingStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const About =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={settingStyles.setText}>Write something about you</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <textarea placeholder="I love learning about Web3..." className={settingStyles.textArea}></textarea>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={settingStyles.links}>
                    <a onClick={() => setContent(5)}><i className={settingStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Skills =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={settingStyles.setText}>Your skills</div>
                </motion.div>
                <Spacer />
                <motion.div className="loader">
                    <motion.div
                        variants={container}

                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="loader-inner"
                    >
                        <motion.div variants={checkBox} id="check-1">
                            <Checkbox color="primary" defaultSelected={false}>
                                Development
                            </Checkbox>

                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                Design
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                Marketing Digital
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                Project Managment
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                Investment
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                Others
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                    </motion.div>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                <div className={settingStyles.links}>
                    <a onClick={() => setContent(6)}><i className={settingStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Interests =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={settingStyles.setText}>Your interests</div>
                </motion.div>
                <Spacer />
                <motion.div className="loader">
                    <motion.div
                        variants={container}

                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="loader-inner"
                    >
                        <motion.div variants={checkBox} id="check-1">
                            <Checkbox color="primary" defaultSelected={false}>
                                NFTs
                            </Checkbox>

                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                DeFis
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                DAOs
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                Cryptos
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                DIDs
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                Others
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                    </motion.div>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                <div className={settingStyles.links}>
                    <a onClick={() => setContent(7)}><i className={settingStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const AllDone =
        <div className={settingStyles.backgroundImg}>
            <div className={settingStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={settingStyles.welcomeText}>You're all set!!</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={settingStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={party}>
                    <div className={settingStyles.welcomeText}><span role="img" aria-label="party">🥳🥳🥳🥳🥳🥳🥳</span>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <div>
                        <Link href="/">
                            <button className={settingStyles.styleButtonConn}> Let's go!</button>

                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>;
    function setContent(id) {
        setName(id === 1);
        setPfp(id === 2);
        setBanner(id === 3);
        setAbout(id === 4);
        setSkills(id === 5);
        setInterests(id === 6);
        setAllDone(id === 7);
    }
    return (

        <div className={settingStyles.backgroundImg}>
            <NavbarSettings />
            <div className={settingStyles.setProfileStepsDiv}>
                {name && <div>{Name}</div>}
                {pfp && <div>{Pfp}</div>}
                {banner && <div>{Banner}</div>}
                {about && <div>{About}</div>}
                {skills && <div>{Skills}</div>}
                {interests && <div>{Interests}</div>}
                {allDone && <div>{AllDone}</div>}
            </div>


        </div>


    )

}
export default LogIn