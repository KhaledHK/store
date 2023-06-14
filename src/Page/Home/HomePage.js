import React from 'react'
import NavBarLogin from '../../Components/Utility/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import Footer from '../../Components/Utility/Footer'

const HomePage = () => {
  return (
    <div className='font' style={{minHeight:'670px'}}>
        
        <Slider/>
        <HomeCategory/>
        <CardProductsContainer title=" best seller" btntitle="more" pathText="/products"/>

        <DiscountSection/>
        <CardProductsContainer title=" best rated" btntitle="more" pathText="/products"/>
        <BrandFeatured title=" best mark" btntitle="more"/>
      
        
 
    
    </div>
  )
}

export default HomePage
