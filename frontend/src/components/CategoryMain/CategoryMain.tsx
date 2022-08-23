import Availability from '../Availability/Availability'
import Brands from '../Brands/Brands'
import ColorFilter from '../ColorFilter/ColorFilter'
import Filters from '../Filters/Filters'
import PriceFilter from '../PriceFilter/PriceFilter'
import Product from '../Product/Product'
import SizeFilter from '../SizeFilter/SizeFilter'
import styles from './CategoryMain.module.css'

const CategoryMain = () => {

  const showProducts = () => {
    let element = []
    for (let index = 0; index < 20; index++) {
      element.push(index)
        
     }
     return element
    }
  return (
    <div className={styles.categoryMain}>
      <h4 className={styles.filterTitle}>
        Filters
      </h4>
      <div className={styles.wrapper}>

        {/* left */}
        <div className={styles.left}>
          <div className={styles.leftCon}>
            <Filters/>
            <Brands/>
            <PriceFilter/>
            <SizeFilter/>
            <ColorFilter/> 
            <Availability/>
          </div>
          
        </div>
        {/* right */}
        <div className={styles.right}>
          {showProducts().map((e, i) => (
            <Product key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryMain