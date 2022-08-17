import { ArrowDropUp, ArrowUpward, Search } from '@mui/icons-material'
import styles from './Brands.module.css'

const Brands = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.header}>
        <span>
          Brands
        </span>
        <span>
          <ArrowDropUp/>
        </span>
      </div>
      <div className="searchBox">
        <Search/>
        <input type="text" name="" id="" />
      </div>
      

    </div>
  )
}

export default Brands