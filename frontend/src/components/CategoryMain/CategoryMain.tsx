import Availability from '../Availability/Availability'
import Brands from '../Brands/Brands'
import ColorFilter from '../ColorFilter/ColorFilter'
import Filters from '../Filters/Filters'
import PriceFilter from '../PriceFilter/PriceFilter'
import SizeFilter from '../SizeFilter/SizeFilter'
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
          <SizeFilter/>
          <ColorFilter/> 
          <Availability/>
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