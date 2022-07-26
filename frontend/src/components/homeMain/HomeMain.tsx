import React from 'react'
import HomeHero from '../homeHero/HomeHero'
import ItemCategories from '../itemCategories/ItemCategories'

const HomeMain = () => {
  return (
    <main>
      <ItemCategories/>
      <HomeHero/>
    </main>
  )
}

export default HomeMain