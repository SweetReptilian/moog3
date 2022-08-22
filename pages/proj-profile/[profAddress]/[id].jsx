import styles from "../../../styles/Profile.module.scss"
import modalStyles from "../../../styles/Modal.module.scss"
import someStyles from "../../../styles/AnotherStyles.module.scss"
import Sidebar from "../../../components/Sidebar"
import { TbBrandDiscord, TbHammer } from "react-icons/tb"
import { IconContext } from "react-icons"
import {
    AiOutlineCloseCircle,
    AiOutlineGithub,
    AiOutlinePicture,
    AiOutlinePlusCircle,
    AiOutlineTwitter
} from "react-icons/ai"
import { RiPagesLine, RiSendPlaneLine } from "react-icons/ri"
import { FcLikePlaceholder } from "react-icons/fc"
import { FaHands } from "react-icons/fa"
import { BiLike } from "react-icons/bi"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { backdrop, modal } from "../../../animations/modalAnimations"
import { getCookies } from "cookies-next"
import { useRouter } from "next/router"
import getProjectDataById from "../../../utils/getProjectDataById"
import getWalletAddress from "../../../utils/getWalletAddress"
import { TailSpin } from "react-loader-spinner"
import formStyles from "../../../styles/FormSettings.module.scss"
import useUploadToStorage from "../../../hooks/useUploadToStorage"
import toast, { Toaster } from "react-hot-toast"
import useContract from "../../../hooks/useContract"
import Link from "next/link"
import getContributionDataByProjectId from "../../../utils/getContributionDataByProjectId"
import getPostDataById from "../../../utils/getPostDataById"
import getProfileDataById from "../../../utils/getProfileDataById"
import getContributionCardData from "../../../utils/getContributionCardData"

const Profile = () => {
    const [connect, setConnect] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})
    const [contributionData, setContribuitionData] = useState()
    const [postData, setPostData] = useState()
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [showDonate, setShowDonate] = useState(false)
    const [showNFTDiv, setShowNFTDiv] = useState(false)
    const [showDaiDiv, setShowDaiDiv] = useState(false)
    const [owner, setOwner] = useState(false)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState()
    const [showPost, setShowPost] = useState(true)
    const [projectCreator, setProjectCreator] = useState()
    const [followers, setFollowers] = useState([])
    const [showContri, setShowContri] = useState(true)
    const [userNfts, setUserNfts] = useState([])
    const [nftToSend, setNftToSend] = useState({
        recipientAddress: projectCreator,
        tokenId: 0,
        erc721TokenAddress: ""
    })
    const [maticDonation, setMaticDonation] = useState({ amount: 0 })
    const [contributionForm, setContributionForm] = useState({
        title: "",
        description: "",
        github: ""
    })
    const [contributionCardData, setContributionCardData] = useState()
    const { uploadFile } = useUploadToStorage()
    const { addPost, createContribution, likeProject, getFollower, likeContribution, getTokens, sendNFT } = useContract()
    const [post, setPost] = useState({
        title: "",
        body: "",
        imageUri: ""
    })
    const handleModalNFT = () => {
        setShowNFTDiv(true)
        setShowDaiDiv(false)
    }
    const handleModalDai = () => {
        setShowNFTDiv(false)
        setShowDaiDiv(true)
    }
    const handleImageChange = async (event) => {
        setLoading(true)
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://nftstorage.link/ipfs/" + cid
        setPost(prevState => ({
            ...prevState,
            imageUri: imageURI
        }))
        setLoading(false)
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setPost((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const uploadPost = async () => {
        setLoading(true)
        const obj = {
            title: post.title,
            body: post.body,
            imageUri: post.imageUri
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
            const postCid = apiRes.response
            const updatedPostObj = {
                id: data.id,
                postUri: postCid
            }
            console.log("updatedPost", updatedPostObj)
            await addPost(updatedPostObj)
            toast.success("Post added successfully!")
        } catch (e) {
            toast.error("Error uploading post\nTry again")
            console.error(e)
        }
        setLoading(false)
    }
    useEffect(() => {
        const { loggedIn } = getCookies()
        if (typeof window !== "undefined" && !loggedIn) {
            router.push("/").then()
        }
        if (Object.keys(router.query).length > 0) {
            const getData = async () => {
                const { profAddress, id } = router.query
                setId(id)
                setProjectCreator(profAddress)
                getWalletAddress().then(res => {
                    setOwner(res === profAddress)
                })
                const temp = await getProjectDataById(profAddress, id)
                const contriTemp = await getContributionDataByProjectId(id)
                const postTemp = await getPostDataById(id)
                let followers = await getFollower(profAddress)
                let tempFollowers
                if (followers.length !== 0) {
                    tempFollowers = followers.map(i => i - 1000000)
                    for (let i = 0; i < tempFollowers.length; i++) {
                        tempFollowers[i] = await getProfileDataById(tempFollowers[i])
                    }
                }
                setFollowers(tempFollowers)
                setContribuitionData(contriTemp.response)
                setData(temp)
                setPostData(postTemp)
                if (postTemp.response === "data not found") setShowPost(false)
                if (contriTemp.response === "data not found") setShowContri(false)
                if (showContri) {
                    const res = await getContributionCardData(contriTemp.response)
                    setContributionCardData(res)
                }
            }
            getData().then()
        }
    }, [router.query])
    const handleContributionChange = (event) => {
        const { name, value } = event.target
        setContributionForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const submitContributionForm = async () => {
        if (contributionForm.title.length === 0 || contributionForm.description.length === 0) {
            toast.error("Contribution request form can't be empty!")
            return
        }
        const obj = {
            description: contributionForm.description,
            github: contributionForm.github
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
            const contributionCid = apiRes.response
            const updatedPostObj = {
                title: contributionForm.title,
                projectId: data.id,
                contributionUri: contributionCid
            }
            await createContribution(updatedPostObj)
            toast.success("Contribution added successfully!")
        } catch (e) {
            toast.error("Error uploading post\nTry again")
            console.error(e)
        }
    }
    const handleLike = async () => {
        try {
            await likeProject(projectCreator)
        } catch (e) {
            toast.error("Couldn't like\nTry again")
            console.error(e)
        }
    }
    const handleContributionLike = async (id) => {
        try {
            await likeContribution(id)
        } catch (e) {
            toast.error("Couldn't like\nTry again")
            console.error(e)
        }
    }
    const handleMaticChange = (event) => {
        const {name,value} = event.target
        setMaticDonation(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    let postCards, contributionCard
    if (showContri) {
        contributionCard = contributionCardData?.map(item =>
            <div className={styles.smallCard}>
                <div className={styles.contributorsImg}>
                    <a href={`/profile/${item?.authorWallet}`}>
                        <img src={item?.authorPfp} alt="contributor" className={styles.contributorsPicPic} />
                    </a>
                </div>
                <div className={styles.nameAndCont}>
                    <div className={styles.cardTitle}>{item?.author}</div>
                    <div className={styles.cardSubtitle}>
                        {item?.title}
                        <br />
                        {item?.description}
                        <br />
                        <br />
                        {item?.github}
                    </div>
                    <div className={styles.likesSection2}>
                        <div className={styles.someSpace}>
                            <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                <span >{item?.likes}</span>
                                <FcLikePlaceholder />
                            </IconContext.Provider>
                        </div>
                        <AnimatePresence>
                            <IconContext.Provider value={{ size: "30px", color: "white" }}>
                                <motion.div
                                    whileTap={{ scale: 1.3 }}
                                    id={"follow"}
                                    name={"follow-btn"}
                                    onClick={async () => await handleContributionLike(item?.contributionId)}>
                                    <BiLike />
                                </motion.div>
                            </IconContext.Provider>

                        </AnimatePresence>
                    </div>
                </div>
            </div>
        )
    }
    if (showPost) {
        postCards = postData?.response.map((post) =>
            <div className={styles.posts}>
                <Link href={{
                    pathname: "/post",
                    query: {
                        id: post.postId,
                        title: post.title,
                        author: post.author,
                        image: post.imageUri,
                        body: post.body
                    }
                }}>
                    <a>
                        <div className={styles.postsTitle}>{post.title}</div>
                        <div className={styles.postsContent}>{post.body.slice(0, 20)}...</div>
                    </a>
                </Link>
            </div>)
    }
    return (
        <div className={styles.mainContainer}>
            <Sidebar />
            <AnimatePresence exitBeforeEnter>
                {showModal && (
                    <motion.div className={modalStyles.backdrop}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                        <motion.div className={modalStyles.modal}
                            variants={modal}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <motion.div whileHover={{ scale: 0.99 }}
                                    whileTap={{ scale: 1 }}
                                    className={modalStyles.modalCloseIcon}
                                    onClick={() => setShowModal(false)}>
                                    <AiOutlineCloseCircle />
                                </motion.div>
                            </IconContext.Provider>
                            <p className={modalStyles.modalP}>These people like {data.name}!</p>
                            <ul className={modalStyles.modalContainer}>
                                {
                                    followers.map(follower =>
                                        <li className={modalStyles.someFlex}>
                                            <img className={modalStyles.picModal} src={follower.imageUri} alt="" />
                                            <a href={`/profile/${follower.wallet}`}
                                                className={modalStyles.postsContentModal}>
                                                {follower.name}
                                            </a>
                                        </li>)
                                }
                            </ul>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                {showDonate && (
                    <motion.div className={modalStyles.backdrop}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                        <motion.div className={modalStyles.modal}
                            variants={modal}>
                            <IconContext.Provider value={{ size: "25px", color: "white" }}>
                                <motion.div whileHover={{ scale: 0.99 }}
                                    whileTap={{ scale: 1 }}
                                    className={modalStyles.modalCloseIcon}
                                    onClick={() => setShowDonate(false)}>
                                    <AiOutlineCloseCircle />
                                </motion.div>
                            </IconContext.Provider>
                            <p className={modalStyles.modalP}>
                                What would you like to give today?
                            </p>
                            <button
                                className={modalStyles.modalButton}
                                onClick={async () => {
                                    handleModalNFT()
                                    const nfts = await getTokens()
                                    setUserNfts(nfts)
                                }}
                            >NFT
                            </button>
                            <button
                                className={modalStyles.modalButton}
                                onClick={handleModalDai}>
                                Matic
                            </button>
                            {showNFTDiv && (
                                <div className={modalStyles.containerPop}>
                                    <div className={modalStyles.displayNftSection}>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        {
                                            userNfts.map(item =>
                                                <div onClick={() => {
                                                    setNftToSend({
                                                        recipientAddress: projectCreator,
                                                        tokenId: item?.tokenId,
                                                        erc721TokenAddress: "0x90B08E04F319a5468E054C14CbB270DF6CD912cb"
                                                    })
                                                }}>
                                                    <div className={modalStyles.galleryFlex}>
                                                        <img className={modalStyles.nftShowed}
                                                             src={item?.img}
                                                             alt="" />
                                                        <p>{item?.title}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {/* here the address to send will be shown */}
                                        <div className={modalStyles.titlesSection}>
                                            <div className={modalStyles.titlePop}>Send to</div>
                                            <input defaultValue={projectCreator} className={modalStyles.inputPop} type="text" />
                                        </div>
                                    </div>
                                    <button onClick={async () => {
                                        try {
                                            await sendNFT(nftToSend.recipientAddress, nftToSend.tokenId, nftToSend.erc721TokenAddress)
                                            toast.success(`Successfully transfered NFT to ${projectCreator}`)
                                        } catch (e){
                                            console.error(e)
                                            toast.error("Hmm something didn't work\nTry again")
                                        }

                                    }} className={modalStyles.modalButton}>Send!</button>
                                </div>
                            )}
                            {showDaiDiv && (
                                <div className={modalStyles.containerPop}>
                                    <div className={modalStyles.displayNftSection}>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <div className={modalStyles.titlesSection}>
                                            <div className={modalStyles.titlePop}>Please, specify the amount</div>
                                            <input onChange={handleMaticChange} name={"amount"} className={modalStyles.inputPop} type="text" />

                                            <div className={modalStyles.titlePop}>Send to</div>
                                            <input defaultValue={projectCreator} className={modalStyles.inputPop} type="text" />
                                        </div>

                                    </div>
                                    <button
                                        onClick={async () => {
                                            const {amount} = maticDonation
                                            if(amount == 0) {
                                                toast.error("Don't be that cheap now!")
                                                return
                                            }
                                            console.log(amount, projectCreator)
                                            const res = await sendMatic(amount, projectCreator)
                                            res ? toast.success("Matic sent successfully!") : toast.error("Transaction failed!\nTry again")
                                        }}
                                        className={modalStyles.modalButton}
                                    >
                                        Send!
                                    </button>

                                </div>
                            )}
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <div className={styles.bigCard}>
                <div className={styles.presentation}>
                    <img src={data.bannerUri} alt="banner" className={styles.banner} />

                    <div className={styles.sides}>
                        <img src={data.imageUri} alt="pfp" className={styles.pfp} />
                        <div className={styles.name}>{data.name}</div>
                        <label className={styles.projectTags}>{data?.skills?.map(item => <span>#{item} </span>)}</label>

                        <IconContext.Provider value={{ size: "29px", color: "white" }}>
                            <div className={styles.links}>
                                <a className={styles.aDecor} href={data.github}><AiOutlineGithub /></a>
                                <a className={styles.aDecor} href={data.website}><RiPagesLine /></a>
                                <a className={styles.aDecor} href={data.discord}><TbBrandDiscord /></a>
                                <a className={styles.aDecor} href={data.twitter}><AiOutlineTwitter /></a>
                            </div>

                        </IconContext.Provider>
                        <div className={styles.description}>
                            {data.about}
                        </div>


                        <div className={styles.littleContainer}>
                            <div className={styles.likesSection}>
                                <AnimatePresence>
                                    <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                        <motion.div
                                            onClick={() => setShowModal(showModal => !showModal)}
                                            whileTap={{ rotate: 360, scale: 1.3 }}
                                        >
                                            <FcLikePlaceholder />
                                        </motion.div>
                                    </IconContext.Provider>
                                </AnimatePresence>
                                {/* <motion.div className={styles.likesCounter}>Like</motion.div> */}
                            </div>


                            <div className={styles.likesSection}>
                                <AnimatePresence>
                                    <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                        <motion.div
                                            onClick={() => setShowDonate(showDonate => !showDonate)}
                                            whileTap={{ scale: 1.3 }}
                                        >
                                            <FaHands />
                                        </motion.div>
                                    </IconContext.Provider>
                                </AnimatePresence>
                            </div>


                            <div className={styles.likesSection}>
                                <AnimatePresence>
                                    <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                        <motion.div
                                            whileTap={{ scale: 1.3 }}
                                            id={"follow"}
                                            name={"follow-btn"}
                                            onClick={async () => await handleLike()}>
                                            <BiLike />
                                        </motion.div>
                                    </IconContext.Provider>

                                </AnimatePresence>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>We are looking for...</div>

                <div className={styles.lookingForSectionFirst}>
                    {

                        data.requirements?.map((item, i) =>
                            <div className={styles.lookingForOptions}>
                                <div className={styles.lookingForSubSection}>
                                    <div className={styles.pLookingForName}>{item.title}</div>
                                    <br />
                                    <p className={styles.pLookingForTime}>{item.time}</p>
                                    <br />
                                    <p className={styles.pLookingForMoney}>We offer: {item.amount}</p>
                                    <br />
                                    <p className={styles.pLookingForTitle}>{item.interests.map(int => <span>{int}</span>)}</p>
                                    {/* </a> */}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles.lookingForTitle}>Apply form</div>
                <div className={styles.lookingForSection}>

                    {!owner && <div>
                        <form className={styles.contrForm}>
                            <input className={styles.formInputNoMargin} name={"title"}
                                onChange={handleContributionChange} placeholder={"Title"}
                                type={"text"} required />
                            <textarea className={styles.formTextArea} name={"description"}
                                onChange={handleContributionChange}
                                placeholder={"Why I am the best for the job..."} required />
                            <input className={styles.formInput} name={"github"} onChange={handleContributionChange}
                                placeholder={"github pull request url"} />
                            <AnimatePresence>
                                <motion.div className={styles.iconSpace} onClick={() => {
                                    submitContributionForm().then()
                                    setConnect(connect => !connect)
                                }}
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1 }}>
                                    <div>Contribute</div>
                                    <IconContext.Provider
                                        value={{
                                            size: "29px",
                                            color: "white",
                                            className: styles.checkedIcon2
                                        }}>
                                        <TbHammer />
                                    </IconContext.Provider>
                                </motion.div>
                            </AnimatePresence>
                        </form>
                    </div>}
                    {owner &&
                        <AnimatePresence>
                            <div className={styles.projSection}>

                                <IconContext.Provider value={{ size: "50px", color: "white" }}>
                                    <div className={styles.projTitle}></div>
                                    <Link href={{
                                        pathname: "/create-contribution",
                                        query: { projectId: id }
                                    }}>
                                        <a className={styles.moreIcon}><AiOutlinePlusCircle /></a>
                                    </Link>
                                </IconContext.Provider>
                            </div>
                        </AnimatePresence>
                    }
                </div>

            </div>

            <div className={styles.bigCard}>

                <div className={styles.lookingForPost}>Posts</div>
                {owner &&
                    <div className={styles.container}>

                        <div className={styles.postsBox}>
                            <input name={"title"} value={post.title} onChange={handleChange}
                                className={styles.inputText} placeholder="An attractive title" type="text" />

                            <AnimatePresence>
                                <div className={styles.iconSpaceWrite}>
                                    <textarea onChange={handleChange} name={"body"} value={post.body}
                                        className={styles.textArea} placeholder="Any updates?" />
                                    <div className={styles.iconSpace}> Picture preview</div>

                                    {loading ? <TailSpin
                                        height="15"
                                        width="15"
                                        color="#4e4646"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    /> :
                                        <motion.div onClick={() => {
                                            setConnect(connect => !connect)
                                            uploadPost().then()
                                        }}
                                            whileHover={{ scale: 0.9 }}
                                            whileTap={{ scale: 1 }}>
                                            <IconContext.Provider
                                                value={{
                                                    size: "33px",
                                                    color: "white",
                                                    className: styles.checkedIcon2
                                                }}>
                                                <RiSendPlaneLine />
                                            </IconContext.Provider>
                                        </motion.div>}
                                    {loading ? <TailSpin
                                        height="15"
                                        width="15"
                                        color="#4e4646"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    /> :
                                        <motion.div onClick={() => setConnect(connect => !connect)}
                                            whileHover={{ scale: 0.9 }}
                                            whileTap={{ scale: 1 }}>
                                            <IconContext.Provider
                                                value={{
                                                    size: "33px",
                                                    color: "white",
                                                    className: styles.checkedIcon2
                                                }}>
                                                <label>
                                                    <AiOutlinePicture />
                                                    <input className={formStyles.uploadFiles}
                                                        style={{ display: "none" }}
                                                        name="image" type={"file"}
                                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                                        onChange={handleImageChange} />
                                                </label>
                                            </IconContext.Provider>
                                        </motion.div>
                                    }

                                </div>

                            </AnimatePresence>
                        </div>

                    </div>
                }
                {showPost &&
                    <div className={styles.printPosts}>
                        {postCards}
                    </div>
                }

            </div>

            {showContri &&
                <>
                    <div className={styles.lookingForTitle}>Contributors</div>
                    <div className={styles.thisFlex}>
                        {contributionCard}
                    </div>
                </>
            }
            <div>
            </div>

        </div>

    )
}
export default Profile
