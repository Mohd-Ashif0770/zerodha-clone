import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import SignupPage from './landing_page/signup/SignupPage'
import SupportPage from './landing_page/support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import PageNotFound from './landing_page/PageNotFound'
import Login from './landing_page/login'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
