import React from "react";
import {sequence} from "0xsequence";
import {configureLogger} from "@0xsequence/utils";
import Sidebar from "../components/Sidebar.js"
import Home from "../pages/home";

configureLogger({logLevel: "DEBUG"});

function App() {
    React.useEffect(() => {
        const network = "mumbai";
        sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        }).then(() => console.log("Wallet initialized"));
    }, [])

    return (
        <>
            <div className="page">
                <div className="bottomBar">
                    <Sidebar/>
                    <Home/>
                </div>

            </div>
        </>
    );
}

export default App;
