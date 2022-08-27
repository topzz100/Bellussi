import { ExpandLess } from '@mui/icons-material'
import styles from './PriceFilter.module.css'

const PriceFilter = () => {
  return (
    <div className={styles.priceFilter}>
      <div className={styles.header}>
        <span className={styles.title}>
          Price
        </span>
        <span>
          <ExpandLess/>
        </span>
      </div>
      <div className={styles.priceDiff}>
        <div className={styles.priceBox}>
          <h5>From</h5>
          <div className={styles.priceTag}>
            <span>$455</span>
          </div>
        </div>
        <div className={styles.priceBox}>
          <h5>To</h5>
          <div className={styles.priceTag}>
            <span>$1434</span>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default PriceFilter