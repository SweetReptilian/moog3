import { configureLogger } from "@0xsequence/utils";
import { sequence } from "0xsequence";
import { useEffect } from "react";
import "../styles/globals.css";

configureLogger({ logLevel: "DEBUG" });

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const network = "mumbai";
        sequence.initWallet(network, {
            networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
        });
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
