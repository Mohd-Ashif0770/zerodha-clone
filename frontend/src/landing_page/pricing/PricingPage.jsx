import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
import Maintanence from './Maintanence'
import ChargesForOptional from './ChargesForOptional'

const PricingPage = () => {
  return (
    <>
        
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        <Maintanence/>
        <ChargesForOptional/>
        
    </>
  )
}

export default PricingPage