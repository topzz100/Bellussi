import { ArrowRight, Home } from '@mui/icons-material'
import styles from './Navigator.module.css'

const Navigator = () => {
  return (
    <div className={styles.navigator}>
      <span>
        <Home className={styles.icon}/>
        Home
      </span>
      <span>
        <ArrowRight className={styles.icon}/>
      </span>
      <span>
        Women
      </span>
      <span>
        <ArrowRight className={styles.icon}/>
      </span>
      <span className={styles.selected}>
        New Items
      </span>
    </div>
  )
}

export default Navigator