import React from 'react'
import styles from './News.module.css'
import {LocalOfferOutlined } from '@mui/icons-material'


const News = () => {
  return (
    <div className={styles.news}>
      <LocalOfferOutlined className={styles.icon}/>
      Mega sale Discount all item up to 30%
    </div>
  )
}

export default News