import styles from './ShopCategory.module.css'

const ShopCategory = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/images/two.webp" alt="" />
      <div className={styles.content}>
        <p>Newest item</p>
        <h4>New Arrivals</h4>
        <span>Shop Now</span>
      </div>
    </div>
  )
}

export default ShopCategory