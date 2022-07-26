import styles from'./HeroSlider.module.css'

const HeaderSlider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slides }>
        <div className={styles.imgBox}>
          <img src="/images/one.jpg" alt="" />
        </div>
        <div className={`${styles.imgBox} ${styles.select}`}>
          <img src="/images/one.jpg" alt="" />
        </div>
        <div className={styles.imgBox}>
          <img src="/images/one.jpg" alt="" />
        </div>
        <div className={styles.imgBox}>
          <img src="/images/one.jpg" alt="" />
        </div>
        <div className={styles.imgBox}>
          <img src="/images/one.jpg" alt="" />
        </div>
      </div>
      <div className={styles.dots}>
        <span></span>
        <span className={styles.dotSelect}></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
    </div>
  )
}

export default HeaderSlider