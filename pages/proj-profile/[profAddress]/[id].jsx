import styles from "../../../styles/Profile.module.scss"
import modalStyles from "../../../styles/Modal.module.scss"
import Sidebar from "../../../components/Sidebar"
import { TbHammer, TbHammerOff } from "react-icons/tb"
import { IconContext } from "react-icons"
import { AiOutlineGithub, AiOutlinePicture, AiOutlinePlusCircle, AiOutlineTwitter } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { FcLikePlaceholder } from "react-icons/fc"
import { TbBrandDiscord } from "react-icons/tb"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { RiSendPlaneLine } from "react-icons/ri"
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

const Profile = () => {
    const [connect, setConnect] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})
    const [contributionData, setContribuitionData] = useState()
    const [postData, setPostData] = useState()
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [owner, setOwner] = useState(false)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState()
    const [showPost, setShowPost] = useState(true)
    const [showContri, setShowContri] = useState(true)
    const { uploadFile } = useUploadToStorage()
    const { addPost } = useContract()
    const [post, setPost] = useState({
        title: "",
        body: "",
        imageUri: ""
    })
    const handleImageChange = async (event) => {
        setLoading(true)
        const file = event.target.files[0]
        const cid = await uploadFile(file)
        const imageURI = "https://" + cid + ".ipfs.w3s.link/image.png"
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
                getWalletAddress().then(res => {
                    setOwner(res === profAddress)
                })
                const temp = await getProjectDataById(profAddress, id)
                const contriTemp = await getContributionDataByProjectId(id)
                const postTemp = await getPostDataById(id)
                setContribuitionData(contriTemp)
                setData(temp)
                setPostData(postTemp)
                if (postTemp.response === "data not found") setShowPost(false)
                if (contriTemp.response === "data not found") setShowContri(false)
            }
            getData().then()
        }
    }, [router.query])
    let postCards
    if(showPost) {
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
                }}  >
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
                                        <p className={modalStyles.modalP}>These people like you!</p>
                                        <ul className={modalStyles.modalContainer}>
                                            <li className={modalStyles.someFlex}>
                                                <img className={modalStyles.picModal} src="/M.png" alt="" />
                                                <a className={modalStyles.postsContentModal}>
                                                    Person Number One
                                                </a>
                                            </li>
                                            <li className={modalStyles.someFlex}>
                                                <img className={modalStyles.picModal} src="/M.png" alt="" />
                                                <a className={modalStyles.postsContentModal}>
                                                    Person Number Two
                                                </a>
                                            </li>
                                            <li className={modalStyles.someFlex}>
                                                <img className={modalStyles.picModal} src="/M.png" alt="" />
                                                <a className={modalStyles.postsContentModal}>
                                                    Person Number Three
                                                </a>
                                            </li>
                                            <li className={modalStyles.someFlex}>
                                                <img className={modalStyles.picModal} src="/M.png" alt="" />
                                                <a className={modalStyles.postsContentModal}>
                                                    Person Number Three
                                                </a>
                                            </li>
                                            <li className={modalStyles.someFlex}>
                                                <img className={modalStyles.picModal} src="/M.png" alt="" />
                                                <a className={modalStyles.postsContentModal}>
                                                    Person Number Three
                                                </a>
                                            </li>
                                            <li className={modalStyles.someFlex}>
                                                <img className={modalStyles.picModal} src="/M.png" alt="" />
                                                <a className={modalStyles.postsContentModal}>
                                                    Person Number Three
                                                </a>
                                            </li>
                                        </ul>
                                    </motion.div>

                                </motion.div>
                            )}
                        </AnimatePresence>
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
                    </div>

                </div>
            </div>
            <div className={styles.bigCard}>

                <div className={styles.lookingForTitle}>We are looking for...</div>

                <div className={styles.lookingForSection}>
                    {
                        data.interests?.map((item, i) => <motion.button className={styles.lookingForOptions}>
                            {/* <a className={styles.aDecor} href="/apply-form"> */}
                            <IconContext.Provider value={{ size: "29px", color: "white" }}>
                                <div className={styles.checkedIcon}></div>
                            </IconContext.Provider>
                            <div className={styles.lookingForName}>{item}</div>
                            {/* </a> */}
                        </motion.button>)
                    }


                    {!owner && <AnimatePresence>
                        <motion.div className={styles.iconSpace} onClick={() => setConnect(connect => !connect)}
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 1 }}>
                            <div>Contribute</div>
                            <IconContext.Provider
                                value={{ size: "29px", color: "white", className: styles.checkedIcon2 }}>

                                {connect ? <TbHammerOff /> : <TbHammer />}
                            </IconContext.Provider>
                        </motion.div>
                    </AnimatePresence>}
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

                <div className={styles.lookingForTitle}>Posts</div>
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


            {/* <div className={styles.bigCard}>
                <div className={styles.lookingForTitle}>Gallery</div>


            </div> */}


            {showContri &&
                <>
                    <div className={styles.lookingForTitle}>Contributors</div>
                    <div className={styles.contributorsSection}>
                        <img src="mooglesnft.png" alt="contributor" className={styles.contributorsPic} />
                        <img src="mooglesnft3.png" alt="contributor" className={styles.contributorsPic} />
                        <img src="mooglesnft4.png" alt="contributor" className={styles.contributorsPic} />
                        <img src="mooglesnft2.png" alt="contributor" className={styles.contributorsPic} />
                    </div>
                </>
            }
            <div>
            </div>


        </div>

    )
}
export default Profile
