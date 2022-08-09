import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <img className={styles.svgColor} src="/discord.svg" alt="discord" />
      <img className={styles.svgColor} src="/twitter.svg" alt="twitter" />
      <img className={styles.svgColor} src="/github.svg" alt="github" />
      
      </div>
    </div>
  );
}
export default Navbar