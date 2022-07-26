import formStyles from "../styles/Forms.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react"
import React, { useEffect, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { MdComputer } from "react-icons/md"
import { FiTwitter } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { IconContext } from "react-icons"
import { TbTrashX } from "react-icons/tb"
import { checkBox, item, item2, arrow, checkBox2, button, item3, arrow2, party, container, trashie, trashieSlow } from "../animations/registrationAnimations"
import { getCookies } from "cookies-next"
import { useRouter } from "next/router"
import useUploadToStorage from "../hooks/useUploadToStorage"
import useContract from "../hooks/useContract"
import { TailSpin } from "react-loader-spinner"

export function CreateProject() {
    const router = useRouter()
    const { uploadFile } = useUploadToStorage()
    const { addProjectProfile } = useContract()
    const [wallet, setWallet] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        pfp: "https://ipfs.io/ipfs/bafkreic2mr4bcejdcfrpya6aiev37vmhdy3pjtxbni4lh3cdmy7kovrswe",
        banner: "https://ipfs.io/ipfs/bafkreigxiia7k4ct7tnynfaikgu4ghn2zqzvpak3tdozf2u4deb4ag26si",
        about: "",
        discord: "",
        twitter: "",
        website: "",
        github: ""
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
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handlePfpChange = async (event) => {
        setLoading(true)
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://nftstorage.link/ipfs/" + cid
        console.log("imageUri", imageURI)
        setFormData(prevState => ({
            ...prevState,
            pfp: imageURI
        }))
        setLoading(false)
    }
    const handleBannerChange = async (event) => {
        setLoading(true)
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://nftstorage.link/ipfs/" + cid
        setFormData(prevState => ({
            ...prevState,
            banner: imageURI
        }))
        setLoading(false)
    }

    useEffect(() => {
        const upload = async () => {
            setDisabled(true)
            if (allDone) {
                const obj = {
                    about: formData.about,
                    skills: skillSelected,
                    interests: interestsSelected,
                    website: formData.website,
                    discord: formData.discord,
                    github: formData.github,
                    twitter: formData.twitter,
                    requirements: []
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

                const projectProfileObject = {
                    name: formData.name,
                    image: formData.pfp,
                    banner: formData.banner,
                    profileUri: profileCid
                }
                await addProjectProfile(projectProfileObject)
            }
            setDisabled(false)
        }
        (async () => await upload())()
    }, [allDone])

    useEffect(() => {
        const { wallet, loggedIn } = getCookies()
        setWallet(wallet)
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
    }, [])

    const Name =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={trashie}
                        className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA}
                                href={`/network`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <div className={formStyles.container}>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.welcomeText}>Great choice! It's time to create something new
                            </div>

                        </motion.div>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setText}>What is the name of the project?</div>
                        </motion.div>


                        <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                            <input onChange={handleChange} value={formData.name} name="name" type="text" placeholder="Moogle1"
                                className={formStyles.inputName} required />
                        </motion.div>
                    </div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(2)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    const Pfp =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashie} className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA}
                                href={`/network`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(1)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={item2}>
                            <div className={formStyles.setText}>Set a nice pfp</div>

                        </motion.div>

                        <motion.div className={formStyles.someFlex} initial="hidden" animate="visible" exit="exit"
                            variants={item3}>
                            <img className={formStyles.pfp} src={formData.pfp} draggable={false} alt={"project pfp"} />

                            {loading ? <TailSpin
                                height="15"
                                width="15"
                                color="#4e4646"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            /> : <input className={formStyles.uploadFiles} name="pfp" type={"file"}
                                onChange={handlePfpChange} />}
                        </motion.div>
                    </div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(3)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>
                </div>
            </div>

        </>
    const Banner =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashie} className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA}
                                href={`/network`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(2)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setText}>Now the banner</div>
                        </motion.div>


                        <motion.div className={formStyles.someFlex} initial="hidden" animate="visible" exit="exit"
                            variants={item2}>
                            <img className={formStyles.banner} src={formData.banner} draggable={false} alt={"banner"} />
                            {loading ? <TailSpin
                                height="15"
                                width="15"
                                color="#4e4646"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            /> : <input className={formStyles.uploadFiles} name="banner" type={"file"}
                                onChange={handleBannerChange} />}
                        </motion.div>

                    </div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(5)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    const About =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashie} className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA}
                                href={`/network`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(3)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setText}>Now, this project is all about...</div>
                        </motion.div>


                        <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                            <textarea name="about" value={formData.about} onChange={handleChange}
                                placeholder="A beginner-friendly app for learning about web3!"
                                className={formStyles.textArea}></textarea>
                        </motion.div>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setText}>Let's add some links</div>
                        </motion.div>
                        <div className={formStyles.someFlexCheck}>

                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div><AiFillGithub /></div>
                                    <input onChange={handleChange} value={formData.github} name="github" type="text" placeholder="moogUser1"
                                        className={formStyles.inputName}></input>
                                </IconContext.Provider>
                            </motion.div>
                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div><MdComputer /></div>
                                    <input onChange={handleChange} value={formData.website} name="website" type="text"
                                        placeholder="www.moog3.com" className={formStyles.inputName}></input>
                                </IconContext.Provider>
                            </motion.div>
                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div><FiTwitter /></div>
                                    <input onChange={handleChange} value={formData.twitter} name="twitter" type="text" placeholder="@mymoog"
                                        className={formStyles.inputName}></input>
                                </IconContext.Provider>
                            </motion.div>
                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div><TbBrandDiscord /></div>
                                    <input onChange={handleChange} value={formData.discord} name="discord" type="text" placeholder="#serverlink"
                                        className={formStyles.inputName}></input>
                                </IconContext.Provider>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(6)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>


                </div>
            </div>
        </>
    const Skills =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashieSlow}
                        className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA}
                                href={`/network`}><TbTrashX /></a></IconContext.Provider>
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(5)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                            <div className={formStyles.setText}>Let's pick a category for {formData.name}</div>
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
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(7)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    const Interests =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashieSlow}
                        className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA}
                                href={`/network`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(6)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                            <div className={formStyles.setText}>If you are looking for contributors, please specify
                            </div>
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
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(8)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    const AllDone =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>

                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={item2}>
                            <div className={formStyles.welcomeText}>{formData.name} Project has been created!</div>

                        </motion.div>

                        <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={party}>
                            <div className={formStyles.checkLetters}><span role="img" aria-label="party">Let's check how it looks</span>
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                            <div>
                                <Link href="/choose-one">
                                    <button disabled={disabled} className={formStyles.styleButton}>Take me there!</button>
                                </Link>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    function setContent(id) {
        setName(id === 1)
        setPfp(id === 2)
        setBanner(id === 3)
        // setGallery(id === 4);
        setAbout(id === 5)
        setSkills(id === 6)
        setInterests(id === 7)
        setAllDone(id === 8)
    }

    return (

        <div className={formStyles.backgroundImg}>

            <div className={formStyles.secondDiv}>
                {/*<IconContext.Provider value={{ size: "29px", color: "white", style: formStyles.trashBtn }}>*/}
                {/*    <a className={formStyles.trashA} href={`/home/${wallet}`}><TbTrashX /></a></IconContext.Provider>*/}
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