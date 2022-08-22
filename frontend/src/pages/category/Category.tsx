import CategoryMain from '../../components/CategoryMain/CategoryMain'
import CatHeader from '../../components/CatHeader/CatHeader'
import ItemCategories from '../../components/itemCategories/ItemCategories'
import Navbar from '../../components/navbar/Navbar'
import Navigator from '../../components/Navigator/Navigator'
import styles from './Category.module.css'

const Category = () => {
  return (
    <div className={styles.category}>
      <Navbar/>
      <ItemCategories/>
      <Navigator/>
      <CatHeader/>
      <CategoryMain/>
    </div>
  )
}

export default Category