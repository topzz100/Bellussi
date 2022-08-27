import { ExpandLess } from '@mui/icons-material'
import styles from './SizeFilter.module.css'

const SizeFilter = () => {
  return (
    <div className={styles.sizeFilter}>
      <div className={styles.header}>
        <span className={styles.title}>
          Size
        </span>
        <span>
          <ExpandLess/>
        </span>
      </div>
      <div className= {styles.container}>
        <span>
          xSmall
        </span>
        <span>
          Small
        </span>
        <span>
          Large
        </span>
        <span>
          Medium
        </span>
        <span>
          Single Size
        </span>
      </div>
      <div className={styles.sizes}>
        <span>
          33
        </span>
        <span>
          34
        </span>
        <span>
          35
        </span>
        <span>
          36
        </span>
        <span>
          37
        </span>
        <span>
          38
        </span>
        <span>
          39
        </span>
        <span>
          40
        </span>
        <span>
          41
        </span>
        <span>
          42
        </span>
      </div>
    </div>
  )
}

export default SizeFilter