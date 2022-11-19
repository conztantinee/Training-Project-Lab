import React from 'react'
import Categories from '../components/Categories'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        
        <Nav/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home