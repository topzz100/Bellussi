import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import Product from '../Product/Product'
import styles from './Trending.module.css'

const Trending = () => {
  return (
    <div className={styles.wrapper}>
       <div className={styles.title}>
        <h4>
          Trending Now
        </h4>
        <span>
          Discover the latest news feom Bellussi
        </span>
        
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

export default Trending