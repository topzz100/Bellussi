import { FavoriteBorderOutlined } from '@mui/icons-material'
import styles from './Product.module.css'

const Product = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBox}>
        <img src="/images/eight.jpg" alt="" />
        <span >
          <FavoriteBorderOutlined className={styles.icon}/>
        </span>
      </div>
      <div className={styles.info}>
        <h4>
          Louis Vuitton
        </h4>
        <p>
          Louis Vuitton shoes
        </p>
        <h4>
          $1,350
        </h4>
      </div>
    </div>
  )
}

export default Product