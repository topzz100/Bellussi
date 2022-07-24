import { ArrowDropUp, ExpandMore, FavoriteBorder, Search, ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar }>
      <div className={styles.wrapper}>
        {/* left navbar */}
        <div className={styles.left}>
          <div className={styles.country}>
            <div>
              <img src="/images/flag.png" alt="" />
            </div>
            <ExpandMore style={{fontSize: '1.2rem'}}/>
          </div>
          
          <span className={styles.vertical}>|</span>
          <div className={styles.category}>
            <span className={styles.select}>
              Women
              <ArrowDropUp className={styles.drop}/>
            </span>
            <span>
              Men
            </span>
            <span>
              Kids
            </span>
          </div>
        </div>
        {/* end left navbar */}

        {/* center navbar */}
        <div className={styles.center}>
          <span>
            BELLUSSI
          </span>
        </div>
        {/* end center navbar */}

        {/* right navbar */}
        <div className={styles.right}>
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon}/>
            <input type="text" placeholder='Search...' />
          </div>
          <span className={styles.vertical}>|</span>
          <div className={styles.icons}>
            <Badge badgeContent={4} className={styles.badge }>
              <FavoriteBorder className={styles.rightIcon } />
            </Badge>
            <Badge badgeContent={4} className={styles.badge }>
              <ShoppingCart className={styles.rightIcon } />
            </Badge>
            <span className={styles.price}>
              ($9,455.00)
            </span>
          </div>
          <div className={styles.profile}>
            <div>
              <img src="/images/profile.webp" alt="" />
            </div>
            <ExpandMore style={{fontSize: '1.2rem'}}/>
          </div>
        </div>
        {/* end right navbar */}
      </div>
    </div>
  )
}

export default Navbar