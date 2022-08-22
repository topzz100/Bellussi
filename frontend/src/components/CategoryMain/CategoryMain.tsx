import Brands from '../Brands/Brands'
import Filters from '../Filters/Filters'
import PriceFilter from '../PriceFilter/PriceFilter'
import styles from './CategoryMain.module.css'

const CategoryMain = () => {
  return (
    <div className={styles.categoryMain}>
      <h4>
        Filters
      </h4>
      <div className={styles.wrapper}>

        {/* left */}
        <div className={styles.left}>
          <Filters/>
          <Brands/>
          <PriceFilter/>
        </div>
        {/* right */}
        <div className={styles.right}>
          right
        </div>
      </div>
    </div>
  )
}

export default CategoryMain