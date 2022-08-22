import styles from './Filters.module.css'

const Filters = () => {
  return (
     <div className={styles.filters}>
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

export default Filters