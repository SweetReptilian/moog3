import styles from "../styles/SettingsStyles.module.css";
import { defaultImgs } from "../constants/defaultImgs";
import { useEffect, useRef, useState } from "react";

const Settings = () => {
    const [pfps, setPfps] = useState([]);
    const [selectedPFP, setSelectedPFP] = useState();
    const inputFile = useRef(null);
    const inputGallery = useRef(null);
    const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
    const [selectedGallery, setSelectedGallery] = useState(defaultImgs[1]);
    const [theFile, setTheFile] = useState();
    const [theGallery, setTheGallery] = useState();
    const [username, setUsername] = useState();
    const [bio, setBio] = useState();
    const [about, setAbout] = useState();
    const { Moralis, isAuthenticated, account } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    const resolveLink = (url) => {
        if (!url || !url.includes("ipfs://")) return url;
        return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
    };

    useEffect(() => {
        const fetchNFTs = async () => {
            const options = {
                chain: "rinkeby",
                address: account,
            };

            const mumbaiNFTs = await Web3Api.account.getNFTs(options);
            const images = mumbaiNFTs.result.map((e) =>
                resolveLink(JSON.parse(e.metadata)?.image)
            );
            setPfps(images);
        };

        fetchNFTs();
    }, [isAuthenticated, account]);

    const onBannerClick = () => {
        inputFile.current.click();
    };

    const onGalleryClick = () => {
        inputGallery.current.click();
    };

    const changeHandler = (event) => {
        const img = event.target.files[0];
        setTheFile(img);
        setSelectedFile(URL.createObjectURL(img));
    };

    const changeHandlerGallery = (event) => {
        const imgs = event.target.files[0];
        setTheGallery(imgs);
        setSelectedGallery(URL.createObjectURL(imgs));
    };

    const saveEdits = async () => {
        const User = Moralis.Object.extend("_User");
        const query = new Moralis.Query(User);
        const myDetails = await query.first();

        if (bio) {
            myDetails.set("bio", bio);
        }

        if (about) {
            myDetails.set("about", about);
        }

        if (selectedPFP) {
            myDetails.set("pfp", selectedPFP);
        }

        if (username) {
            myDetails.set("username", username);
        }

        if (theFile) {
            const data = theFile;
            const file = new Moralis.File(data.name, data);
            await file.saveIPFS();
            myDetails.set("banner", file.ipfs());
        }
        if (theGallery) {
            const data = theGallery;
            const files = new Moralis.File(data.name, data);
            await files.saveIPFS();
            myDetails.set("gallery", files.ipfs());
        }

        await myDetails.save();
        window.location.reload();
    };

    return (
        <>
            <main className={styles.settingsBackground}>
                <div className={styles.settingsCard}>
                    <section className={styles.inputsImgSection}>
                        <div className={styles.settingsTitle}> Settings </div>
                        <ul className={styles.inputUl}>
                            <li>
                                <div className={styles.detailsDiv}>Name</div>

                                <input
                                    className={styles.settingsInput}
                                    name="NameChange"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <div className={styles.detailsDiv}>
                                    Short Description
                                </div>
                                <input
                                    className={styles.settingsInput}
                                    type="text"
                                    name="bioChange"
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </li>
                            <li>
                                <div className={styles.detailsDiv}>About</div>
                                <input
                                    className={styles.settingsInput}
                                    type="text"
                                    name="aboutChange"
                                    onChange={(e) => setAbout(e.target.value)}
                                />
                            </li>
                        </ul>
                        <ul className={styles.inputUl}>
                            <li>
                                <div className={styles.detailsDiv}>Banner</div>
                                <img
                                    className={styles.profileBanner}
                                    src={selectedFile}
                                    onClick={onBannerClick}
                                    alt=""
                                />
                                <input
                                    type="file"
                                    name="file"
                                    ref={inputFile}
                                    onChange={changeHandler}
                                    style={{ display: "none" }}
                                />
                            </li>
                            <li>
                                <div className="pfp">
                                    Profile Image (Your NFTs)
                                    <div className="pfpOptions">
                                        {pfps.map((e, i) => {
                                            return (
                                                <>
                                                    <img
                                                        src={e}
                                                        className={
                                                            selectedPFP === e
                                                                ? "pfpOptionSelected"
                                                                : "pfpOption"
                                                        }
                                                        onClick={() => {
                                                            setSelectedPFP(
                                                                pfps[i]
                                                            );
                                                        }}
                                                    ></img>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.detailsDiv}>Gallery</div>

                                <img
                                    className={styles.imgsPic}
                                    src={selectedGallery}
                                    onClick={onGalleryClick}
                                    alt=""
                                />
                                <input
                                    type="file"
                                    name="file"
                                    ref={inputGallery}
                                    onChange={changeHandlerGallery}
                                    style={{ display: "none" }}
                                    multiple
                                />
                            </li>
                        </ul>
                    </section>
                    <section className={styles.buttonSection}>
                        <button
                            className={styles.buttonStyle}
                            onClick={() => saveEdits()}
                        >
                            Save Changes
                        </button>
                    </section>
                </div>
            </main>
        </>
    );
};
export default Settings;
