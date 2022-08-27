import styles from './Highlights.module.css'

const Highlights = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>
          This week's highlights
        </h4>
        <span>
          Browse most popular looks this week
        </span>
        <div className={styles.content}>
          <div className={styles.feature}>
            <div className={styles.imgBox}>
              <img src="/images/four.webp" alt="" />
            </div>
            <div className={styles.info}>
              <h4>
                Dolce & Gabanna
              </h4>
              <span>
                New-in-pieces, courtesy of Tessabit, Italy 
              </span>
            </div>
            
          </div>
          <div className={styles.feature}>
            <div className={styles.imgBox}>
              <img src="/images/one.jpg" alt="" />
            </div>
            <div className={styles.info}>
              <h4>
                Dolce & Gabanna
              </h4>
              <span>
                New-in-pieces, courtesy of Tessabit, Italy 
              </span>
            </div>
            
          </div>
          <div className={styles.feature}>
            <div className={styles.imgBox}>
              <img src="/images/seven.webp" alt="" />
            </div>
            <div className={styles.info}>
              <h4>
                Dolce & Gabanna
              </h4>
              <span>
                New-in-pieces, courtesy of Tessabit, Italy 
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights