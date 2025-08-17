import styles from "./header.module.css"
// import Button from "../../atoms/button/button";
import { SiApplemusic } from "react-icons/si";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.iconHolder}>
        <SiApplemusic className={styles.icon}/>
        <span>sabkit</span>
      </div>
      {/* <Button 
        btnText="Upgrade to Premium" 
        style={styles.upgradeBtn}
      /> */}
    </header>
  )
}

