import formStyles from "../styles/Forms.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react"
import React, { useEffect, useState } from "react"
import {
    checkBox, item, item2, arrow, checkBox2, button, item3, arrow2, party, container
} from "../animations/registrationAnimations"
import useUploadToStorage from "../hooks/useUploadToStorage"
import useContract from "../hooks/useContract"
import { TailSpin } from "react-loader-spinner"
import { getCookies } from "cookies-next"

export function Registration() {
    const [isLoading, setIsLoading] = useState(false)
    const { uploadFile } = useUploadToStorage()
    const { addUserProfile } = useContract()
    const {wallet} = getCookies()
    const [formData, setFormData] = useState({
        name: "moogle1",
        pfp: "https://ipfs.io/ipfs/bafkreic2mr4bcejdcfrpya6aiev37vmhdy3pjtxbni4lh3cdmy7kovrswe",
        banner: "https://ipfs.io/ipfs/bafkreigxiia7k4ct7tnynfaikgu4ghn2zqzvpak3tdozf2u4deb4ag26si",
        about: "I love learning about Web3..."
    })
    const [name, setName] = useState(true)
    const [pfp, setPfp] = useState(false)
    const [banner, setBanner] = useState(false)
    const [about, setAbout] = useState(false)
    const [skills, setSkills] = useState(false)
    const [interests, setInterests] = useState(false)
    const [allDone, setAllDone] = useState(false)
    const [skillSelected, setSkillSelected] = useState([])
    const [interestsSelected, setInterestsSelected] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target
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

    useEffect(() => {
        const upload = async () => {
            if (allDone) {
                const obj = {
                    about: formData.about,
                    banner: formData.banner,
                    skills: skillSelected,
                    interests: interestsSelected
                }

                const apiReq = await fetch("/api/uploadUserProfile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        data: obj
                    })
                })

                const apiRes = await apiReq.json()
                const profileCid = apiRes.response

                const userProfileObject = {
                    name: formData.name,
                    image: formData.pfp,
                    profileUri: profileCid
                }
                await addUserProfile(userProfileObject)
            }
        }
        (async () => await upload())()
    }, [allDone])

    const Name =
        <>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.welcomeText}>Alright! Just few more steps...</div>

                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Let's start with your name</div>
                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <input onChange={handleChange} name="name" type="text" placeholder="Moogle1"
                           className={formStyles.inputName} required></input>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(2)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>

        </>
    const Pfp =
        <>

            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.setText}>Set your PFP</div>

                </motion.div>

                <motion.div className={formStyles.someFlex} initial="hidden" animate="visible" exit="exit"
                            variants={item3}>
                    <img className={formStyles.pfp} src={formData.pfp} draggable={false} alt={"user pfp"} />
                    <input className={formStyles.uploadFiles} name="pfp" type={"file"} onChange={handlePfpChange} />
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(3)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>

        </>
    const Banner =
        <>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Set your banner</div>
                </motion.div>


                <motion.div className={formStyles.someFlex} initial="hidden" animate="visible" exit="exit"
                            variants={item2}>
                    <img className={formStyles.banner} src={formData.banner} draggable={false} alt={"banner"} />
                    <input name="banner" type={"file"} onChange={handleBannerChange} />
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(4)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>
    const About =
        <>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Write something about you</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <textarea name="about" value={formData.about} onChange={handleChange}
                              placeholder="I love learning about Web3..." className={formStyles.textArea}></textarea>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(5)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>
    const Skills =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}>Your skills</div>
                </motion.div>
                <Spacer />
                <Checkbox.Group value={skillSelected} onChange={setSkillSelected}>
                    <motion.div className="loader">
                        <motion.div
                            variants={container}

                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="loader-inner"
                        >
                            <motion.div variants={checkBox} id="check-1">
                                <Checkbox name={"Development"} value={"Development"}
                                          color="primary" defaultSelected={false}>
                                    <div className={formStyles.checkLetters}> Development</div>
                                </Checkbox>

                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-2">
                                <Checkbox name={"Design"} value={"Design"}
                                          color="secondary" defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>Design</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-3">
                                <Checkbox name={"Digital Marketing"}
                                          value={"Digital Marketing"} color="success" defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>Digital Marketing</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-4">
                                <Checkbox name={"Project Management"}
                                          value={"Project Management"} color="warning" defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>Project Management</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-5">
                                <Checkbox name={"Investment"} value={"Investment"}
                                          color="error" defaultSelected={false}>
                                    <div className={formStyles.checkLetters}> Investment</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-5">
                                <Checkbox name={"Others"} value={"Others"} color="gradient"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>Others</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                        </motion.div>
                    </motion.div>
                </Checkbox.Group>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(6)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>
    const Interests =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}>Your interests</div>
                </motion.div>
                <Spacer />
                <Checkbox.Group value={interestsSelected} onChange={setInterestsSelected}>
                    <motion.div className="loader">
                        <motion.div
                            variants={container}

                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="loader-inner"
                        >
                            <motion.div variants={checkBox} id="check-1">
                                <Checkbox value={"NFTs"} color="primary"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>NFTs</div>
                                </Checkbox>

                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-2">
                                <Checkbox value={"DeFi"} color="secondary"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>DeFi</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-3">
                                <Checkbox value={"DAOs"} color="success"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>DAOs</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-4">
                                <Checkbox value={"Crypto"} color="warning"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>Crypto</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-5">
                                <Checkbox value={"DIDs"} color="error"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>DIDs</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                            <motion.div variants={checkBox} id="check-5">
                                <Checkbox value={"Others"} color="gradient"
                                          defaultSelected={false}>
                                    <div className={formStyles.checkLetters}>Others</div>
                                </Checkbox>
                            </motion.div>
                            <Spacer />
                        </motion.div>
                    </motion.div>
                </Checkbox.Group>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(7)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </>
    const AllDone =
        <>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.welcomeText}>You're all set!!</div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                    <img className={formStyles.pfp} src={formData.pfp} draggable={false} />
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={party}>
                    <div className={formStyles.welcomeText}><span role="img" aria-label="party">🥳🥳🥳🥳🥳🥳🥳</span>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <div>
                        <Link href={`/home/${wallet}`}>
                            <button className={formStyles.styleButton}> Let's go!</button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>

    function setContent(id) {
        setName(id === 1)
        setPfp(id === 2)
        setBanner(id === 3)
        setAbout(id === 4)
        setSkills(id === 5)
        setInterests(id === 6)
        setAllDone(id === 7)
    }

    return (

        <div className={formStyles.backgroundImg}>

            <div className={formStyles.secondDiv}>

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