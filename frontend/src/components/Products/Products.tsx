import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import Product from '../Product/Product'
import styles from './Products.module.css'

const Products = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3>
          Our Products
        </h3>
        <div className={styles.options}>
            <h4 className={styles.selected}>
              Featured
            </h4>
            <h4>
              Editor's Pick
            </h4>
            <div className={styles.see}>
              <span className={styles.all}>See All</span>
              <span className={styles.vertical}>|</span>
              <span className={styles.arrows}>
                <span className={styles.left}>
                  <ArrowLeftOutlined/>
                </span>
                <span className={styles.right}>
                  <ArrowRightOutlined/>
                </span>
              </span>
            </div>
        </div>
      </div>
      <div className={styles.products}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      <div className={styles.dots}>
        <span></span>
        <span className={styles.selected}></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Products