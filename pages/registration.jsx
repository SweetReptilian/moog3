import NavbarSettings from "../components/NavbarSettings"
import formStyles from "../styles/Forms.module.scss"
import {motion} from "framer-motion"
import Link from "next/link"
import {Checkbox, Spacer} from "@nextui-org/react";
import React, {useState} from 'react';
import {
    checkBox,
    item,
    item2,
    arrow,
    checkBox2,
    button,
    item3,
    arrow2,
    party,
    container
} from "../animations/registrationAnimations"
import useUploadToStorage from "../hooks/useUploadToStorage"
const {uploadFile} = useUploadToStorage()

export function Registration() {

    const [formData, setFormData] = useState({
        name: "moogle1",
        pfp: "./mooglesnft2.png",
        banner: "./logo3.png",
        about: "I love learning about Web3...",
        skills: {},
        interests: {}
    })
    const [name, setName] = useState(true);
    const [pfp, setPfp] = useState(false);
    const [banner, setBanner] = useState(false);
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [interests, setInterests] = useState(false);
    const [allDone, setAllDone] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handlePfpChange = async (event) => {
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://ipfs.io/ipfs/" + cid
        console.log("imageUri", imageURI)
        setFormData(prevState => ({
            ...prevState,
            pfp: imageURI
        }))
    }
    const handleBannerChange = async (event) => {
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://ipfs.io/ipfs/" + cid
        setFormData(prevState => ({
            ...prevState,
            banner: imageURI
        }))
    }

    const Name =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.welcomeText}>Alright! Just few more steps...</div>

                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Let's start with your name</div>
                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <input onChange={handleChange} name="name" type="text" placeholder="Moogle1" className={formStyles.inputName} required></input>
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
                    <img className={formStyles.pfp} src={formData.pfp} draggable={false}/>
                    <input name="pfp" type={"file"} onChange={handlePfpChange} />
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
                    <img className={formStyles.banner} src={formData.banner} draggable={false}/>
                    <input name="banner" type={"file"} onChange={handleBannerChange} />
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
                    <textarea name="about" value={formData.about} onChange={handleChange} placeholder="I love learning about Web3..." className={formStyles.textArea}></textarea>
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
                <Spacer/>
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
                                <div className={formStyles.checkLetters}> Development</div>
                            </Checkbox>

                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Design</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Marketing Digital</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Project Managment</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                <div className={formStyles.checkLetters}> Investment</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Others</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
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
                <Spacer/>
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
                                <div className={formStyles.checkLetters}>NFTs</div>
                            </Checkbox>

                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>DeFis</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>DAOs</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-4">
                            <Checkbox color="warning" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Cryptos</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="error" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>DIDs</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-5">
                            <Checkbox color="gradient" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Others</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
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
                    <img className={formStyles.pfp} src="./mooglesnft2.png" draggable={false}/>
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

export default Registration