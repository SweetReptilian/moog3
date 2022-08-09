import React from "react";
import styles from "../App.module.css";
import "./styles/global.css";
import Bottombar from "./components/Bottombar/Bottombar";
import { Route, Routes } from "react-router-dom";
import FindYN from "./components/pages/FindYourNetwork/FindYN";
import Profile from "./components/pages/Profile/Profile";
import Settings from "./components/pages/Settings/Settings";
import Messages from "./components/pages/Messages/Messages";
import SelectedList from "./components/pages/SelectedList/SelectedList";
import { sequence } from "0xsequence";
import { ETHAuth, Proof } from "@0xsequence/ethauth";
import { configureLogger } from "@0xsequence/utils";
import { log, warn } from "console-browserify";
import { useCookies } from "react-cookie";

configureLogger({ logLevel: "DEBUG" });

const network = "mumbai";
sequence.initWallet(network, {
    networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
});

function App() {
    const [cookies, setCookie, removeCookie] = useCookies([
        "wallet",
        "loggedIn",
    ]);
    const [isLoggedIn, setIsLoggedIn] = React.useState(
        cookies.loggedIn || false
    );
    const connect = async () => {
        const wallet = sequence.getWallet();

        const connectDetails = await wallet.connect({
            app: "Moog3",
            authorize: true,
            // keepWalletOpened: true,
            ...{
                settings: {
                    theme: "indigoDark",
                    includedPaymentProviders: ["moonpay"],
                    defaultFundingCurrency: "matic",
                    defaultPurchaseAmount: 111,
                },
            },
        });
        warn("connectDetails", { connectDetails });

        const ethAuth = new ETHAuth();
        if (connectDetails.proof) {
            const decodedProof = await ethAuth.decodeProof(
                connectDetails.proof.proofString,
                true
            );
            const isValid = await wallet.utils.isValidTypedDataSignature(
                await wallet.getAddress(),
                connectDetails.proof.typedData,
                decodedProof.signature,
                await wallet.getAuthChainId()
            );
            log("isValid?", isValid);
            setIsLoggedIn(isValid);
            setCookie("wallet", await wallet.getAddress(), { path: "/" });
            setCookie("loggedIn", isValid, { path: "/" });
            if (!isValid) throw new Error("sig invalid");
        }
    };

    return (
        <>
            {isLoggedIn ? (
                <div className="page">
                    <div className="bottomBar">
                        <Bottombar />
                        <div
                            className="logout"
                            onClick={() => {
                                const wallet = sequence.getWallet();
                                wallet.disconnect();
                                removeCookie("wallet", { path: "/" });
                                removeCookie("loggedIn", { path: "/" });
                                setIsLoggedIn(false);
                            }}
                        >
                            Logout
                        </div>
                    </div>
                    <div className="mainWindow">
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route
                                path="/SelectedList"
                                element={<SelectedList />}
                            />
                            <Route path="/team" element={<FindYN />} />
                            <Route path="/messages" element={<Messages />} />
                        </Routes>
                    </div>
                </div>
            ) : (
                <div>
                    <button className={styles.buttonStyle} onClick={() => connect()}>
                        Login via Sequence Wallet
                    </button>
                </div>
            )}
        </>
    );
}

export default App;
