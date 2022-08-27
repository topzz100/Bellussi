import { ExpandLess } from '@mui/icons-material'
import styles from './Availability.module.css'

const Availability = () => {
  return (
    <div className={styles.availability}>
      <div className={styles.header}>
        <span className={styles.title}>
          Availability
        </span>
        <span>
          <ExpandLess/>
        </span>
      </div>
      <p>In stock</p>

    </div>
  )
}

export default Availability