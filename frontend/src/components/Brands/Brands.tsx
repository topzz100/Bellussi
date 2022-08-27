import { ExpandLess, Search } from '@mui/icons-material'
import styles from './Brands.module.css'

const Brands = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.header}>
        <span className={styles.title}>
          Brands
        </span>
        <span>
          <ExpandLess/>
        </span>
      </div>
      <div className={styles.searchBox}>
        <Search className={styles.searchIcon}/>
        <input type="text" name="" id="" placeholder='Search Brand' className={styles.searchInput}/>
      </div>
      <div className={styles.formContainer}>
        <form action="">
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" name="" id="Gucci" />
            <p className={styles.label}>Gucci <span>(12)</span></p>
          </div>
      
        </form>
      </div>

    </div>
  )
}

export default Brands