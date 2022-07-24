import Navbar from '../../components/navbar/Navbar'
import News from '../../components/news/News'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <News/>
      <Navbar/>
    </div>
  )
}

export default Home