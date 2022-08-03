import Head from "next/head"
import dynamic from "next/dynamic"

const Login = dynamic(() => import("../components/Login"), { ssr: false })

function App() {
    return (
        <>
            <Head>
                <title>Moog3</title>
                <meta name="description" content="Moog3 - web3 social network" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    )
}

export default App
