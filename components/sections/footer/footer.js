import styles from "./footer.module.css";
// import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footerSection">
      {/* Navigation Links */}
      {/* <ul className={styles.links}>
        <li className={styles.linkItem}><a href="/about">About</a></li>
        <li className={styles.linkItem}><a href="/privacy">Privacy Policy</a></li>
        <li className={styles.linkItem}><a href="/terms">Terms</a></li>
        <li className={styles.linkItem}><a href="/contact">Contact</a></li>
      </ul> */}

      {/* Social Icons */}
      {/* <div className={styles.socials}>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div> */}

      {/* Copyright */}
      <p className={styles.copy}>
        © {new Date().getFullYear()} sabkit. All rights reserved.
      </p>
    </footer>
  );
}
