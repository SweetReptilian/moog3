import "./Profile.css"
import defaultImgs from '../../../../assets/png/logo2.png'
import { useMoralis } from "react-moralis";

const Profile = () => {
    const { Moralis } = useMoralis();
    const user = Moralis.User.current();
    return (
        <>
            <main className="profileBackground">
                <div className="profileCard">
                    <section className="titleSection">
                        <div className="profileTitle"> Profile </div>

                    </section >
                    <section>
                        <img className="profileBanner" src={user.attributes.banner ? user.attributes.banner : defaultImgs[1]}></img>
                        <div className="pfpContainer">
                            <img className="profilePFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]} alt=""></img>

                            <div className="profileName">{user.attributes.username.slice(0, 6)}</div>

                            <div className="profileWallet">{`${user.attributes.ethAddress.slice(0, 4)}...
            ${user.attributes.ethAddress.slice(38)}`}</div>
                            <div className="profileBio">
                                {user.attributes.bio}
                            </div>
                        </div>
                    </section>
                    <section className="sectionWidth">
                        <div className="mWAndAM">My Work</div>
                        <div className="myWork">
                            <img className="workGallery" src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" alt="cat" />
                            <img className="workGallery" src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" alt="cat" />
                            <img className="workGallery" src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" alt="cat" />
                            <img className="workGallery" src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" alt="cat" />
                        </div>
                        <div className="aboutMe">
                            <div className="mWAndAM">About Me</div>
                            <div className="personDesc">
                                {user.attributes.about}
                            </div>
                        </div>
                    </section>
                    <section className="buttonSection">
                        <button className="buttonStyle" onClick={() => { alert('alert'); }}>Edit</button>
                        <button className="buttonStyle" onClick={() => { alert('alert'); }}>Contact</button>
                    </section>

                </div >
            </main >

        </>
    );
};
export default Profile;