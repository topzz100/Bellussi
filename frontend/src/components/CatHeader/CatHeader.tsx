import { FilterAltOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material'
import styles from './Category.module.css'

const CatHeader = () => {
  return (
    <div className={styles.catHeader}>
      {/* left */}
      <div className={styles.left}>
        <h3 >
          <span>
            New Items
          </span>
          <span className={styles.total}>
            (51)
          </span>
        </h3>
      </div>
      {/* right */}
      <div className={styles.right}>
        <div className={styles.filterCon}>
          <FilterAltOutlined style={{fontSize: '1.1rem'}}/>
          <KeyboardArrowDownOutlined style={{fontSize: '1rem'}}/>
          <span className={styles.filterCat}>
            13
          </span>
        </div>
        <span className={styles.vertical}>|</span>
        <div className={styles.sort}>
          <span>
            Sort by Popular
          </span>
          <KeyboardArrowDownOutlined style={{fontSize: '1rem'}}/>
        </div>
      </div>
    </div>
  )
}

export default CatHeader