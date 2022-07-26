import HeaderSlider from '../heroSlider/HeroSlider'
import Service from '../Service/Service'
import ShopCategory from '../ShopCategory/ShopCategory'
import styles from './HomeHero.module.css'

const HomeHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroMain}>
        <img src="/images/three.webp" alt="" className={styles.headerImage} />
        <div className={styles.slider}>
          <HeaderSlider/>
        </div>
        <div className={styles.info}>
          <h3>La Medusa Collection</h3>
          <p>
            Discover versace's accesory line La Medusa for women, inspired by the historic unique icon of beauty        
          </p>
          <span>Shop Now</span>      
        </div>
      </div>
      <div className={styles.categories}>
        <ShopCategory/>
        <ShopCategory/>
        <ShopCategory/>
      </div>
      <div className={styles.services}>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
      </div>
    </div>
  )
}

export default HomeHeader