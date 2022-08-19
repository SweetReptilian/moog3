import formStyles from "../styles/Forms.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react";
import React, { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { IconContext } from "react-icons";
import { TbTrashX } from "react-icons/tb";
import { checkBox, item, item2, arrow, checkBox2, button, item3, arrow2, party, container } from "../animations/registrationAnimations"
import getWalletAddress from "../utils/getWalletAddress"

export function CreateProject() {
    const [wallet, setWallet] = useState("")
    getWalletAddress().then(res => setWallet(res))
    const [name, setName] = useState(true);
    const [pfp, setPfp] = useState(false);
    const [banner, setBanner] = useState(false);
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [interests, setInterests] = useState(false);
    // const [gallery, setGallery] = useState(false);
    const [allDone, setAllDone] = useState(false);

    const Name =
        <>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.welcomeText}>Great choice! It's time to create something new</div>

                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>What is the name of the project?</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <input type="text" placeholder="Moogle1" className={formStyles.inputName}></input>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links2}>
                    <a onClick={() => setContent(2)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>;
    const Pfp =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.setText}>Set a nice pfp</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={formStyles.pfp} src="./mooglesnft2.png" draggable={false} />
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links2}>
                    <a onClick={() => setContent(3)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>

        </>;
    const Banner =
        <>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Now the banner</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <img className={formStyles.banner} src="./logo3.png" draggable={false} />
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links2}>
                    <a onClick={() => setContent(5)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>;
    const About =
        <>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Now, this project is all about...</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <textarea placeholder="A begginer-friendly app for learning about web3!" className={formStyles.textArea}></textarea>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Let's add some links</div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3} className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><AiFillGithub /></div><input type="text" placeholder="moogUser1" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3} className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><MdComputer /></div><input type="text" placeholder="www.moog3.com" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3} className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><FiTwitter /></div><input type="text" placeholder="@mymoog" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3} className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><TbBrandDiscord /></div><input type="text" placeholder="#serverlink" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links2}>
                    <a onClick={() => setContent(6)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>;
    const Skills =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}>Let's pick a category for (project's name)</div>
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
                <div className={formStyles.links2}>
                    <a onClick={() => setContent(7)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>;
    const Interests =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}>If you are looking for contributors, please specify</div>
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
                <div className={formStyles.links2}>
                    <a onClick={() => setContent(8)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>;
    const AllDone =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.welcomeText}>(Project's name) Project has been created!</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={party}>
                    <div className={formStyles.checkLetters}><span role="img" aria-label="party">Let's check how it looks</span>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <div>
                        <Link href="/proj-profile">
                            <button className={formStyles.styleButton}>Take me there!</button>

                        </Link>
                    </div>

                </motion.div>
            </div>
        </>;
    function setContent(id) {
        setName(id === 1);
        setPfp(id === 2);
        setBanner(id === 3);
        // setGallery(id === 4);
        setAbout(id === 5);
        setSkills(id === 6);
        setInterests(id === 7);
        setAllDone(id === 8);
    }
    return (

        <div className={formStyles.backgroundImg}>

            <div className={formStyles.secondDiv}>
                <IconContext.Provider value={{ size: "29px", color: "white", style: formStyles.trashBtn }}>
                    <a className={formStyles.trashA} href={`/home`}><TbTrashX /></a>
                </IconContext.Provider>
                {name && <div>{Name}</div>}
                {pfp && <div>{Pfp}</div>}
                {banner && <div>{Banner}</div>}
                {/* {gallery && <div>{Gallery}</div>} */}
                {about && <div>{About}</div>}
                {skills && <div>{Skills}</div>}
                {interests && <div>{Interests}</div>}
                {allDone && <div>{AllDone}</div>}
            </div>


        </div>


    )

}
export default CreateProject


// const Gallery =
//     <>
//         <div className={formStyles.container}>
//             <motion.div initial="hidden" animate="visible" variants={item}>
//                 <div className={formStyles.welcomeText}>Some more pics</div>

//             </motion.div>
//             <motion.div initial="hidden" animate="visible" variants={item}>
//                 <div className={formStyles.setText}>This goes for the gallery</div>
//             </motion.div>


//             <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
//                 <input type="text" placeholder="Moogle1" className={formStyles.inputName}></input>
//             </motion.div>
//         </div>
//         <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
//             <div className={formStyles.links2}>
//                 <a onClick={() => setContent(5)}><i className={formStyles.arrow}></i></a>
//             </div>

//         </motion.div>
//     </>;