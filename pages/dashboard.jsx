import NavbarSettings from "../components/NavbarSettings"
import settingStyles from "../styles/SettingStyles.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"


export function Dashboard() {
    return (
        <div className="div">
            <NavbarSettings />
            <div>
                <Link href="#">
                <button>Projects</button>
                </Link>
                <Link href="#">
                <button>Contributors</button>
                </Link>

               
                
            </div>
        </div>
    )
}
export default Dashboard