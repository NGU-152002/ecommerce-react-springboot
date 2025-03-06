import React from 'react'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Foooter from '../components/Foooter'
import ProductList from '../components/ProductList'

function Home() {
  return (
   <>
   <Banner />
   <NavBar />
   <ProductList mainPage={true} />
   <Foooter />
   </>
  )
}

export default Home