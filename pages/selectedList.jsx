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
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>

                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
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
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
                                        alt="Not Found"
                                        className="personpicture"
                                    />
                                    <p className="personName"> Jos</p>
                                    <p className="personDescn">This is a description about this person,
                                        hope you like what she does</p>
                                </li>
                                <li className="flexItem">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/g4fz9keldva-107%3A110?alt=media&token=c03f289b-8a31-47ef-bb3d-64ddde87f9b0"
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