import formStyles from "../../../styles/FormSettings.module.scss"
import { Checkbox, Spacer } from "@nextui-org/react"
import React, { useEffect, useState } from "react"
import Sidebar from "../../../components/Sidebar"
import { IconContext } from "react-icons/lib"
import { AiFillGithub } from "react-icons/ai"
import { MdComputer } from "react-icons/md"
import { FiTwitter } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { useRouter } from "next/router"
import getProfileData from "../../../utils/getProfileData"
import useUploadToStorage from "../../../hooks/useUploadToStorage"
import toast, { Toaster } from "react-hot-toast"
import useContract from "../../../hooks/useContract"
import { getCookies } from "cookies-next"
import { TailSpin } from "react-loader-spinner"
import getWalletAddress from "../../../utils/getWalletAddress"

export function LogIn() {
    const router = useRouter()
    const { uploadFile } = useUploadToStorage()
    const { updateUserProf } = useContract()
    const [data, setData] = useState({})
    const [loadingP, setLoadingP] = useState(false)
    const [loadingB, setLoadingB] = useState(false)
    const [loadingS, setLoadingS] = useState(false)
    const [userFormData, setUserFormData] = useState({
        name: data.name,
        imageUri: data.imageUri,
        banner: data.banner,
        about: data.about,
        skills: data.skills,
        interests: data.interests,
        discord: data.discord,
        website: data.website,
        twitter: data.twitter,
        github: data.github
    })
    const [skillSelected, setSkillSelected] = useState([])
    const [interestsSelected, setInterestsSelected] = useState([])
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }

        if (Object.keys(router.query).length > 0) {
            const getData = async () => {
                const profAddress = router.query.profAddress
                getWalletAddress().then(res => {
                    if (res !== profAddress) {
                        alert("You can't change the settings of another account!")
                        router.push("/").then()
                    }
                })
                let temp = await getProfileData(profAddress)
                setData(temp)
                setUserFormData(temp)
            }
            getData().then()
        }
    }, [router.query])
    const formDone = async () => {
        setLoadingS(true)
        const obj = {
            banner: userFormData.banner,
            about: userFormData.about,
            skills: (skillSelected.length > 0) ? skillSelected : data.skills,
            interests: (interestsSelected.length > 0) ? interestsSelected : data.interests,
            discord: userFormData.discord,
            website: userFormData.website,
            github: userFormData.github,
            twitter: userFormData.twitter
        }
        try {
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
            const updatedProfileObj = {
                name: userFormData.name,
                id: data.id,
                image: userFormData.imageUri,
                profileUri: profileCid
            }
            console.log(updatedProfileObj)
            await updateUserProf(updatedProfileObj)
            toast.success("Successfully updated!")
        } catch (e) {
            console.error(e)
            toast.error("Something broke!\nTry Again")
        }
        setLoadingS(false)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handlePfpChange = async (event) => {
        setLoadingP(true)
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://nftstorage.link/ipfs/" + cid
        setUserFormData(prevState => ({
            ...prevState,
            imageUri: imageURI
        }))
        setLoadingP(false)
    }
    const handleBannerChange = async (event) => {
        setLoadingB(true)
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://nftstorage.link/ipfs/" + cid
        setUserFormData(prevState => ({
            ...prevState,
            banner: imageURI
        }))
        setLoadingB(false)
    }
    return (
        <div className={formStyles.backgroundImg}>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <Sidebar />
            <div className={formStyles.settingsTitleTwo}>Settings</div>
            <div className={formStyles.mainContainer}>
                <div className={formStyles.container}>

                    <img className={formStyles.banner}
                        src={userFormData.banner}
                        draggable={false} alt={"banner"} />
                    {loadingB ? <TailSpin
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
                    <img className={formStyles.pfp} src={userFormData.imageUri} draggable={false}
                        alt={"pfp"} />
                    {loadingP ? <TailSpin
                        height="15"
                        width="15"
                        color="#4e4646"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> : <input className={formStyles.uploadFilesPfp} name="pfp" type={"file"}
                        onChange={handlePfpChange} />}
                    <div className={formStyles.setText}>Name</div>
                    <input
                        onChange={handleChange} name="name"
                        type="text"
                        placeholder={data.name}
                        className={formStyles.inputName}
                    ></input>
                    <div className={formStyles.setTextAbout}>About</div>

                    <textarea
                        onChange={handleChange}
                        name={"about"}
                        placeholder={data.about}
                        className={formStyles.textArea}
                    ></textarea>
                </div>
                <div className={formStyles.skillsAndInterests}>
                    <div className={formStyles.containerBigCheck}>
                        <div className={formStyles.setTextAbout}>Your skills</div>
                        <Spacer />
                        <Checkbox.Group value={skillSelected} onChange={setSkillSelected}>
                            <Checkbox name={"Development"} value={"Development"}
                                color="primary" defaultSelected={false}>
                                <div className={formStyles.checkLetters}> Development</div>
                            </Checkbox>
                            <Checkbox name={"Design"} value={"Design"}
                                color="secondary" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Design</div>
                            </Checkbox>
                            <Checkbox name={"Digital Marketing"}
                                value={"Digital Marketing"} color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Digital Marketing</div>
                            </Checkbox>
                            <Checkbox name={"Project Management"}
                                value={"Project Management"} color="warning" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Project Management</div>
                            </Checkbox>
                            <Checkbox name={"Investment"} value={"Investment"}
                                color="error" defaultSelected={false}>
                                <div className={formStyles.checkLetters}> Investment</div>
                            </Checkbox>
                            <Checkbox name={"Others"} value={"Others"} color="gradient"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Others</div>
                            </Checkbox>
                        </Checkbox.Group>
                        <Spacer />

                    </div>
                    <div className={formStyles.containerBigCheck}>
                        <div className={formStyles.setTextAbout}>Your interests</div>
                        <Spacer />
                        <Checkbox.Group value={interestsSelected} onChange={setInterestsSelected}>
                            <Checkbox value={"NFTs"} color="primary"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>NFTs</div>
                            </Checkbox>
                            <Checkbox value={"DeFi"} color="secondary"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>DeFi</div>
                            </Checkbox>
                            <Checkbox value={"DAOs"} color="success"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>DAOs</div>
                            </Checkbox>
                            <Checkbox value={"Crypto"} color="warning"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Crypto</div>
                            </Checkbox>
                            <Checkbox value={"DIDs"} color="error"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>DIDs</div>
                            </Checkbox>
                            <Checkbox value={"Others"} color="gradient"
                                defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Others</div>
                            </Checkbox>
                        </Checkbox.Group>
                        <Spacer />
                    </div>
                </div>
                <div>
                    <div className={formStyles.setText}></div>
                </div>
                <div className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div className={formStyles.linksHere}>
                            <div>
                                <AiFillGithub />
                            </div>

                            <input
                                onChange={handleChange}
                                name={"github"}
                                type="text"
                                placeholder={data.discord || "moogUser1"}
                                className={formStyles.inputName}
                            ></input></div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div className={formStyles.linksHere}>
                            <div>
                                <MdComputer />
                            </div>

                            <input
                                onChange={handleChange}
                                name={"website"}
                                type="text"
                                placeholder={data.website || "www.moog3.com"}
                                className={formStyles.inputName}
                            ></input></div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div className={formStyles.linksHere}>
                            <div>
                                <FiTwitter />
                            </div>


                            <input
                                type="text"
                                onChange={handleChange}
                                name={"twitter"}
                                placeholder={data.twitter || "@mymoog"}
                                className={formStyles.inputName}
                            ></input>
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div className={formStyles.linksHere}>
                            <div>
                                <TbBrandDiscord />
                            </div>


                            <input
                                type="text"
                                onChange={handleChange}
                                name={"discord"}
                                placeholder={data.discord || "#serverlink"}
                                className={formStyles.inputName}
                            ></input>
                        </div>
                    </IconContext.Provider>
                </div>

                <div className={formStyles.saveBtnSection}>
                    <button onClick={async () => await formDone()} className={formStyles.styleButton}>{
                        loadingS ? <TailSpin
                            height="15"
                            width="15"
                            color="#4e4646"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        /> : "Save"
                    }</button>
                </div>

                {/* for projects also we
                 can add an edit function in their
                  profiles or in the dashboard,
                 when on right click they can either
                 edit it or eraser */}
            </div>

        </div >
    )
}

export default LogIn
