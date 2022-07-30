import Story from '../Story/Story'
import styles from './Magazine.module.css'

const Magazine = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>
          Magazine
        </h4>
        <span>
          Discover the latest news feom Bellussi
        </span>
      </div>
      <div className={styles.content}>
        <div className={`${styles.item} ${styles.item1}`}>
          <Story/>
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <Story/>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <Story/>
        </div>
        <div className={`${styles.item} ${styles.item4}`}>
          <Story/>
        </div>
        <div className={`${styles.item} ${styles.item5}`}>
          <Story/>
        </div>
        <div className={`${styles.item} ${styles.item6}`}>
          <Story/>
        </div>

      </div>
      <span className={styles.btn}>
        Load more
      </span>
    </div>
  )
}

export default Magazine