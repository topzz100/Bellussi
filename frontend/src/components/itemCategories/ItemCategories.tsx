import styles from './ItemCategories.module.css'
const ItemCategories = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.sale}>
        SALE
      </span>
      <span>
        New Items
      </span>
      <span>
        Brands
      </span>
      <span>
        Clothing
      </span>
      <span>
        Shoes
      </span>
      <span>
        Bags
      </span>
      <span>
        Accessories
      </span>
      <span>
        Jewelery
      </span>
    </div>
  )
}

export default ItemCategories