import "./FindYN.css";
import "./findYNStyles.css";
import Link from "next/link";

export default function FindYN() {
    return (
        <>
            <main className="findYN">
                <div className="findYNCard">
                    <section className="findYNOverview">
                        <div className="findYNHeader">
                            <p className="findYNTitle">Build your team</p>
                            <div className="findYNActions">
                                <div className="walletButton"></div>
                            </div>
                        </div>
                        <p className="findYNSubtitle">Happy dreams!!</p>
                    </section>
                    <section>
                        <div className="categoriesDiv">
                            <div className="ideas flex-col-hcenter">
                                <div className="group-258 flex-row">
                                    <div className="devs flex-col-hcenter">
                                        <button className="styledButton">
                                            <Link href={"/SelectedList"}>
                                                <a>Devs</a>
                                            </Link>
                                        </button>
                                        <Link href="/SelectedList">
                                            <a>SelectedList</a>
                                        </Link>
                                    </div>
                                    <div className="ideas flex-col-hcenter">
                                        <button className="styledButton">
                                            Ideas
                                        </button>
                                    </div>
                                </div>
                                <div className="group-546 flex-row">
                                    <div className="devs-2 flex-col-hcenter">
                                        <button className="styledButton">
                                            Designers
                                        </button>
                                    </div>
                                    <div className="ideas flex-col-hcenter">
                                        <button className="styledButton">
                                            Marketing
                                        </button>
                                    </div>
                                </div>
                                <div className="ideas flex-col-hcenter">
                                    <button className="styledButton">
                                        Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
