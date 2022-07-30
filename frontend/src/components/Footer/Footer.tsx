import { FacebookRounded, Instagram, Twitter, YouTube } from '@mui/icons-material' 
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={`${styles.col} ${styles.col1}`}>
          <span className={styles.logo}>
            BELLUSSI
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis neque hic ea dicta quaerat corporis autem.
          </p>
          <div className={styles.socials}>
            <span>
              <FacebookRounded className={styles.icon}/>
            </span>
            <span>
              <Twitter className={styles.icon}/>
            </span>
            <span>
              <Instagram className={styles.icon}/>
            </span>
            <span>
              <YouTube className={styles.icon}/>
            </span>
          </div>
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <span className={styles.title}>
            Help & Support
          </span>
          <div className={styles.list}>
            <span>
              FAQ
            </span>
            <span>
              Shipping Service
            </span>
            <span>
              Payment Options
            </span>
            <span>
              Returns and Exchange
            </span>
            <span>
              Product care
            </span>
          </div>
        </div>
        <div className={`${styles.col} ${styles.col3}`}>
          <span className={styles.title}>
            Company
          </span>
          <div className={styles.list}>
            <span>
              About Belluaai
            </span>
            <span>
              Careers
            </span>
            <span>
              Corporate Information
            </span>
            <span>
              Boutique Partners
            </span>
            <span>
              Afifliate Programme
            </span>
          </div>
        </div>
        <div className={`${styles.col} ${styles.col4}`}>
          <span className={styles.title}>
            About
          </span>
          <div className={styles.list}>
            <span>
              Contact Us
            </span>
            <span>
              Private Policy
            </span>
            <span>
              Terms of Use
            </span>
            <span>
              Sitemap
            </span>
          </div>

        </div>
        <div className={`${styles.col} ${styles.col5}`}>
          <span className={styles.title}>
            Download Apps
          </span>
          <div className={styles.apps}>
            <div className={styles.box}>
              <img src="/images/appstore.png" alt="" />
            </div>
            <div className={styles.box}>
              <img src="/images/gplay.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          Bellussi Copyright 2022. All rights reserved
        </span>
      </div>
    </div>
  )
}

export default Footer