import React from 'react'
import HomeHero from '../homeHero/HomeHero'
import ItemCategories from '../itemCategories/ItemCategories'
import Products from '../Products/Products'

const HomeMain = () => {
  return (
    <main>
      <ItemCategories/>
      <HomeHero/>
      <Products/>
    </main>
  )
}

export default HomeMain