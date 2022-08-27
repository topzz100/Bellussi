import { LocalShippingOutlined } from '@mui/icons-material'
import styles from './Service.module.css'

const Service = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span>
          <LocalShippingOutlined/>
        </span>
        <h4>
          Free Shipping Worldwide
        </h4>
        <p>
          Apply to all orders over $800
        </p>
      </div>
    </div>
  )
}

export default Service