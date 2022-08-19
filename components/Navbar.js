import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { IconContext } from "react-icons";
export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img className={styles.imgG} src="./M.png" draggable={false} />
        </a>
      </Link>
      <div className={styles.mooglesM}><label className={styles.labelL}>Moog3</label></div>
      <div className={styles.actions}>
        <IconContext.Provider value={{ size: "29px", color: "white" }}>
          <AiFillGithub />
          <FiTwitter />
          <TbBrandDiscord />
        </IconContext.Provider>

      </div>
    </div>
  );
}
export default Navbar