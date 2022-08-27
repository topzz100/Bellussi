import styles from './Featured.module.css'

const Featured = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4>
          Featured Brands
        </h4>
        <span>
          Browse from the world's best brands
        </span>
      </div>
      <div className={styles.content}>
        <div className={`${styles.item} ${styles.item1}`}>
          <img src="/images/five.jpg" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <img src="/images/five.jpg" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <img src="/images/six.webp" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item4}`}>
          <img src="/images/five.jpg" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item5}`}>
          <img src="/images/six.webp" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item6}`}>
          <img src="/images/five.jpg" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item7}`}>
          <img src="/images/five.jpg" alt="" />
          <span>Gucci</span>
        </div>
        <div className={`${styles.item} ${styles.item8}`}>
          <img src="/images/six.webp" alt="" />
          <span>Gucci</span>
        </div>
      </div>
    </div>
  )
}

export default Featured