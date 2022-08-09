import "../styles/Profile.module.css";
import { defaultImgs } from "../constants/defaultImgs";
import Link from "next/link";

const Profile = () => {
    return (
        <>
            <main className="profileBackground">
                <div className="profileCard">
                    <section className="titleSection">
                        <div className="profileTitle"> Profile </div>
                    </section>
                    <section>
                        <img
                            className="profileBanner"

                        ></img>
                        <div className="pfpContainer">
                            <img
                                className="profilePFP"
                                alt=""
                            ></img>

                            <div className="profileName">
                                Somebody's Name
                            </div>

                            <div className="profileWallet">0X14....349</div>
                            <div className="profileBio">
                                Something here about the person
                            </div>
                        </div>
                    </section>
                    <section className="sectionWidth">
                        <div className="mWAndAM">My Work</div>
                        <div className="myWork">
                            <img
                                className="workGallery"
                               
                                alt="cat"
                            />
                            <img
                                className="workGallery"
                               
                                alt="cat"
                            />
                            <img
                                className="workGallery"
                               
                                alt="cat"
                            />
                            <img
                                className="workGallery"
                               
                                alt="cat"
                            />
                        </div>
                        <div className="aboutMe">
                            <div className="mWAndAM">About Me</div>
                            <div className="personDesc">
                              
                            </div>
                        </div>
                    </section>
                    <section className="buttonSection">
                        <div>
                            <button className="buttonStyle">
                                <Link href="/Settings">
                                    <a>Edit</a>
                                </Link>
                            </button>
                        </div>
                        <button
                            className="buttonStyle"
                            onClick={() => {
                                alert("alert");
                            }}
                        >
                            Contact
                        </button>
                    </section>
                </div>
            </main>
        </>
    );
};
export default Profile;
