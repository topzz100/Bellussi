import News from '../../components/news/News'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <News/>
    </div>
  )
}

export default Home