import styles from './HashTag.module.css'

const HashTag = () => {
  return (
    <div className={styles.wrapper}>
       <div className={styles.title}>
        <h4>
          #BellussiLookOfTheDay
        </h4>
        <span>
          Share your look with us on social media
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.gridBox}>

          {/* left column */}
          <div className={styles.left}>
            <div className={styles.leftRow1}>
              <div className={`${styles.col} ${styles.lcol1}`}>
                <img src="/images/one.jpg" alt="" />
              </div>
              <div className={`${styles.col} ${styles.lcol2}`}>
                <img src="/images/three.webp" alt="" />
              </div>
            </div>

            <div className={styles.leftRow2}>
              <div className={`${styles.col} ${styles.lcol1}`}>
                <img src="/images/six.webp" alt="" />
              </div>
              <div className={`${styles.col} ${styles.lcol2}`}>
                <img src="/images/two.webp" alt="" />
              </div>
            </div>
          </div>
          {/* end left column */}
          {/* center column */}
          <div className={styles.center}>
            <img src="/images/five.jpg" alt="" />
          </div>
          {/* end center column */}
          {/* right column */}
          <div className={styles.right}>
            <div className={styles.rightRow1}>
              <div className={`${styles.col} ${styles.lcol1}`}>
                <img src="/images/six.webp" alt="" />
              </div>
              <div className={`${styles.col} ${styles.lcol2}`}>
                <img src="/images/seven.webp" alt="" />
              </div>
            </div>

            <div className={styles.rightRow2}>
              <div className={`${styles.col} ${styles.lcol1}`}>
                <img src="/images/one.jpg" alt="" />
              </div>
              <div className={`${styles.col} ${styles.lcol2}`}>
                <img src="/images/two.webp" alt="" />
              </div>
            </div>
          </div>
          {/* end right column */}
        </div>
      </div>

    </div>
  )
}

export default HashTag