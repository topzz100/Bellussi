import { ExpandLess } from '@mui/icons-material'
import styles from './ColorFilter.module.css'

const ColorFilter = () => {
  return (
    <div className={styles.colorFilter}>
      <div className={styles.header}>
        <span className={styles.title}>
          Brands
        </span>
        <span>
          <ExpandLess/>
        </span>
      </div>
      <div className={styles.colorWrapper}>
        <span>
          Multicolor
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'black'}}></span>
          <span className={styles.label}>Black</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'grey'}}></span>
          <span className={styles.label}>Grey</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'green'}}></span>
          <span className={styles.label}>Green</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'red'}}></span>
          <span className={styles.label}>Red</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'blue'}}></span>
          <span className={styles.label}>Blue</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'yellow'}}></span>
          <span className={styles.label}>Yellow</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'orange'}}></span>
          <span className={styles.label}>Orange</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'purple'}}></span>
          <span className={styles.label}>Purple</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'gold'}}></span>
          <span className={styles.label}>Gold</span>
        </div>
        <div className={styles.colorBox}>
          <span className={styles.color} style={{backgroundColor: 'silver'}}></span> 
          <span className={styles.label}>Silver</span>
        </div>
       
      </div>
    </div>
  )
}

export default ColorFilter