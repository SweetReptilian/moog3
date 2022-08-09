import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

//const{disconnectWallet}=require('./Login')


export function NavbarSettings() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img className={styles.imgG} src="./M.png" draggable={false} />
        </a>
      </Link>
      <div className={styles.mooglesM}><label className={styles.labelL}>Moog3</label></div>
      <div className={styles.actions}>
        <button className={styles.styleButtonConn} >0x87423...959</button>

      </div>
    </div>

  );
}
export default NavbarSettings