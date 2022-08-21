import {useRouter} from "next/router"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
const Post = dynamic(
    () => import("../components/Post"),
    {ssr: false}
)

export function ViewPost(){
    const router = useRouter()
    const [query, setQuery] = useState()
    useEffect(() => {
        setQuery(router.query)
    }, [router.query])
    return <Post content={query} />
}

export default ViewPost