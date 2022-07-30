import { ShareOutlined } from '@mui/icons-material'
import styles from './Story.module.css'

const Story = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBox}>
        <img src="/images/profile.webp" alt="" className={styles.coverImg} />
        <span className={styles.profileBox}>
          <img src="/images/two.webp" alt="" className={styles.profileImg} />
        </span>
        <span className={styles.duration}>5 min</span>
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <h4>
            Fashion
          </h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ratione exercitationem, eaque cum
          </span>
        </div>
        <div className={styles.bottom}>
          <p>825views - <span>Posted 20min ago</span></p>
          <span><ShareOutlined style={{fontSize: '1rem', color:'black'}}/></span>
        </div>
      </div>
    </div>
  )
}

export default Story