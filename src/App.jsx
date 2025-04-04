import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Company from './pages/company/about/AboutCompany'
import WhyChooseUs from './pages/company/why-choose-us/WhyChooseUs'
import ContactUs from './pages/company/contact/ContactUs'
import FAQ from './pages/company/Faq/FAQ'
import StaffAugmentation from './pages/services/starff/StaffAuggmentation.'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'element={    <Home/>}></Route>
      <Route path='/company/about' element={<Company/>}></Route>
      <Route path='/company/why-choose-us' element={<WhyChooseUs/>}></Route>
      <Route path='/company/contact-us' element={<ContactUs/>}></Route>
      <Route path='/company/FAQ' element={<FAQ/>}></Route>
      <Route path='/services/staff' element={<StaffAugmentation/>}></Route>



    </Routes>
    </>
  )
}

export default App
