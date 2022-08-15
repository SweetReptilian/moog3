import NavbarSettings from "../components/NavbarSettings"
import formStyles from "../styles/Forms.module.scss"
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
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.welcomeText}>Alright! Just few more steps before creating...</div>

                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Let's start with your name</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <input type="text" placeholder="Moogle1" className={formStyles.inputName}></input>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(2)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Pfp =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.setText}>Set your PFP</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={formStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(3)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>

        </div>;
    const Banner =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Set your banner</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <img className={formStyles.banner} src="./logo3.png" draggable={false} />
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(4)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const About =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Write something about you</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <textarea placeholder="I love learning about Web3..." className={formStyles.textArea}></textarea>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(5)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Skills =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}>Your skills</div>
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
                                <div className={formStyles.checkLetters} > Development</div>
                            </Checkbox>

                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >Design</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >Marketing Digital</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >Project Managment</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                <div className={formStyles.checkLetters} > Investment</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >Others</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                    </motion.div>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(6)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Interests =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}>Your interests</div>
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
                                <div className={formStyles.checkLetters} >NFTs</div>
                            </Checkbox>

                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >DeFis</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >DAOs</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >Cryptos</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >DIDs</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                <div className={formStyles.checkLetters} >Others</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer />
                    </motion.div>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(7)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const AllDone =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.welcomeText}>You're all set!!</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={formStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={party}>
                    <div className={formStyles.welcomeText}><span role="img" aria-label="party">🥳🥳🥳🥳🥳🥳🥳</span>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <div>
                        <Link href="/">
                            <button className={formStyles.styleButton}> Let's go!</button>

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

        <div className={formStyles.backgroundImg}>

            <div className={formStyles.setProfileStepsDiv}>
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