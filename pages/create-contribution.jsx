import formStyles from "../styles/Forms.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react"
import React, { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import { TbTrashX } from "react-icons/tb"
import { checkBox, item, item2, arrow, checkBox2, button, item3, arrow2, party, container, trashie, trashieSlow } from "../animations/registrationAnimations"
import { getCookies } from "cookies-next"
import { useRouter } from "next/router"
import useContract from "../hooks/useContract"
import getWalletAddress from "../utils/getWalletAddress"
import getProjectDataById from "../utils/getProjectDataById"


export function CreateProject() {
    const router = useRouter()
    const { updateProjectProf } = useContract()
    const [wallet, setWallet] = useState("")
    const [formData, setFormData] = useState({
        title: "",
        time: "",
        amount: "",
        id: ""
    })
    const [name, setName] = useState(true)
    const [pfp, setPfp] = useState(false)
    const [banner, setBanner] = useState(false)
    const [about, setAbout] = useState(false)
    const [skills, setSkills] = useState(false)
    const [interests, setInterests] = useState(false)
    const [allDone, setAllDone] = useState(false)
    const [interestsSelected, setInterestsSelected] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [projectData, setProjectData] = useState()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        const setUpData = async () => {
            const { projectId } = router.query
            const profAddress = await getWalletAddress()
            const projectData = await getProjectDataById(profAddress, projectId)
            setProjectData(projectData)

            setFormData(prevState => ({
                ...prevState,
                id: projectId
            }))
        }
        setUpData().then()
    }, [router.query])

    useEffect(() => {
        const upload = async () => {
            setDisabled(true)
            if (allDone) {
                const obj = {
                    title: formData.title,
                    time: formData.time,
                    amount: formData.amount,
                    interests: interestsSelected
                }
                const toUpload = {
                    about: projectData?.about,
                    discord: projectData?.discord,
                    twitter: projectData?.twitter,
                    github: projectData?.github,
                    website: projectData?.website,
                    interests: projectData?.interests,
                    skills: projectData?.skills,
                    requirements: [...projectData?.requirements, obj]
                }
                const apiReq = await fetch("/api/uploadUserProfile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        data: toUpload
                    })
                })

                const apiRes = await apiReq.json()
                const profileCid = apiRes.response
                const updatedObj = {
                    name: projectData?.name,
                    id: router.query.projectId,
                    image: projectData?.imageUri,
                    banner: projectData?.bannerUri,
                    profileUri: profileCid
                }
                console.log("updatedObj", updatedObj)
                await updateProjectProf(updatedObj)
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
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={trashie} className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA} href={`/choose-one`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <div className={formStyles.container}>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.welcomeText}>Let's find the perfect contributor</div>

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
                            <a className={formStyles.trashA} href={`/choose-one`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(1)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setText}>Detail a little bit more about this contributor</div>
                        </motion.div>


                        <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                            <textarea name="title" value={formData.title} onChange={handleChange} placeholder="I need a person who can handle a big team and..."
                                className={formStyles.textArea}></textarea>
                        </motion.div>

                    </div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(4)}><i className={formStyles.arrow}></i></a>
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
                            <a className={formStyles.trashA} href={`/choose-one`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(2)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>

                    {/* <div className={formStyles.container}>
                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setText}>Is this a paid contribution?</div>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.connTextContr}>If so, specify the amount</div>
                        </motion.div>
                        <div className={formStyles.someFlexCheck}>

                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div></div>
                                    <input onChange={handleChange} value={formData.amount} name="amount" type="text" placeholder="500 Matic" className={formStyles.inputName}></input>
                                </IconContext.Provider>
                            </motion.div>

                        </div>


                    </div> */}
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
                            <a className={formStyles.trashA} href={`/choose-one`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(2)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setTextContr}>Is this a paid contribution?</div>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.connTextContr}>If so, specify the amount</div>
                        </motion.div>
                        <div className={formStyles.someFlexCheck}>

                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div></div>
                                    <input onChange={handleChange} name="amount" value={formData.amount} type="text" placeholder="500 Matic" className={formStyles.inputName}></input>
                                </IconContext.Provider>
                            </motion.div>

                        </div>
                    </div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(5)}><i className={formStyles.arrow}></i></a>
                        </div>

                    </motion.div>

                </div>
            </div>
        </>
    const Skills =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashie} className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA} href={`/choose-one`}><TbTrashX /></a></IconContext.Provider>
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(4)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={item}>
                            <div className={formStyles.setTextContr}>Any expected time?</div>
                        </motion.div>
                        <div className={formStyles.someFlexCheck}>

                            <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}
                                className={formStyles.linksBox}>
                                <IconContext.Provider value={{ size: "35px", color: "white" }}>
                                    <div></div>
                                    <input onChange={handleChange} name="time" value={formData.time} type="text" placeholder="20 hours/day" className={formStyles.inputName}></input>
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
    const Interests =
        <>
            <div className={formStyles.backgroundImg}>

                <div className={formStyles.secondDiv}>
                    <motion.div initial="hidden" animate="visible" variants={trashieSlow} className={formStyles.trashBtn}>
                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <a className={formStyles.trashA} href={`/choose-one`}><TbTrashX /></a></IconContext.Provider>

                    </motion.div>
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow2}>
                        <div className={formStyles.links2}>
                            <a onClick={() => setContent(5)}><i className={formStyles.backArrow}></i></a>
                        </div>

                    </motion.div>
                    <div className={formStyles.container}>

                        <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                            <div className={formStyles.setText}>Let's put this contributor in a category</div>
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
                            <a onClick={() => setContent(7)}><i className={formStyles.arrow}></i></a>
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
                            <div className={formStyles.welcomeText}> This is done!</div>

                        </motion.div>

                        <motion.div initial="hidden" animate="visible" exit="exit" variants={item3}>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={party}>
                            <div className={formStyles.checkLetters}><span role="img" aria-label="party"></span>
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                            <div>
                                <Link href={`/choose-one`}>
                                    <button disabled={disabled} className={formStyles.styleButton}>Go back to work</button>
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
        setAbout(id === 4)
        setSkills(id === 5)
        setInterests(id === 6)
        setAllDone(id === 7)
    }

    return (
        <>

            {name && <div>{Name}</div>}
            {pfp && <div>{Pfp}</div>}
            {banner && <div>{Banner}</div>}
            {/* {gallery && <div>{Gallery}</div>} */}
            {about && <div>{About}</div>}
            {skills && <div>{Skills}</div>}
            {interests && <div>{Interests}</div>}
            {allDone && <div>{AllDone}</div>}

        </>


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