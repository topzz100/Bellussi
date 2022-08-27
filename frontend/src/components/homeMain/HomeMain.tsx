import React from 'react'
import Featured from '../Featured/Featured'
import Footer from '../Footer/Footer'
import HashTag from '../HashTag/HashTag'
import Highlights from '../Highlights/Highlights'
import HomeHero from '../homeHero/HomeHero'
import ItemCategories from '../itemCategories/ItemCategories'
import Magazine from '../Magazine/Magazine'
import Products from '../Products/Products'
import Trending from '../Trending/Trending'

const HomeMain = () => {
  return (
    <main>
      <ItemCategories/>
      <HomeHero/>
      <Products/>
      <Featured/>
      <Highlights/>
      <Trending/>
      <HashTag/>
      <Magazine/>
      <Footer/>
    </main>
  )
}

export default HomeMain