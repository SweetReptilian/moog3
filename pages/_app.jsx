import { configureLogger } from "@0xsequence/utils";
import { sequence } from "0xsequence";
import { useEffect } from "react";
import "../styles/globals.css";

configureLogger({ logLevel: "DEBUG" });

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const connect = async () => {
            const network = "mumbai";
            await sequence.initWallet(network, {
                networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
            });
        }
        connect().then(() => console.log("Connected sequence wallet"))
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
