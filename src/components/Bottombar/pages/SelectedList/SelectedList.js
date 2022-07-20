import './SelectedList.css'
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'

export default function SelectedList() {
    
    const [infoArray, setInfoArray] = useState();
    const { Moralis, account } = useMoralis();
    return (
        <>

            <main className="selectedList">
                <div className="selectedListCard">
                    <section className="selectedListOverview">
                        <div className="selectedListHeader">
                            <p className="selectedListTitle">Category Name</p>
                            <div className="selectedListActions">
                                <div className="walletButton">
                                </div>
                            </div>
                        </div>
                        <p className="selectedListSubtitle">This is a description of the category</p>
                    </section>
                    <section className="peopleList">
                        <div className="personBox">
                            <ul className="flexContainer">

                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>

                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                            </ul>
                            <ul className="flexContainer">
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pv5darhy8fp-272%3A262?alt=media&token=534d8a81-80ed-4d01-a28c-701a1d52f6bf"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>

                            </ul>
                        </div>



                    </section>
                </div>
            </main>

        </>
    )
}