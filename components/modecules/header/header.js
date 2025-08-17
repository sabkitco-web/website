import styles from "./header.module.css"
import Button from "../../atoms/button/button";
import { SiApplemusic } from "react-icons/si";
import { useRouter } from "next/router";


export default function Header() {
  const router = useRouter()

  function submitFeedback () {
    router.push('/feedback')
  }
  function getHomePage () {
    router.push('/')
  }
  return (
    <header className={styles.header}>
      <div className={styles.iconHolder} onClick={getHomePage}>
        <SiApplemusic className={styles.icon}/>
        <span>sabkit</span>
      </div>
      <Button 
        btnText="Feedback" 
        style={styles.feedback}
        onClick={submitFeedback}
      />
    </header>
  )
}

