import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
const Profile = dynamic(
    () => import("../../components/Profile"),
    {ssr: false}
)

export function UserProfile() {
    const router = useRouter()
    const [profAddress, setProfAddress] = useState("")
    useEffect(() => {
        if (typeof window !== "undefined" && Object.keys(router.query).length > 0) {
            const profAddress = router.query.profAddress
            setProfAddress(profAddress)
        }
    }, [router.query])
    return <Profile profAddress={profAddress} />
}

export default UserProfile