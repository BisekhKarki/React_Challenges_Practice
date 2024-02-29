import React from 'react'
import HomeEight from './components/HomeEight'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import NavbarEight from './components/NavbarEight'
import TvSerie from './components/TvSerie'
import DefaultPage from './components/DefaultPage'
import Footer from './components/Footer'


function MainEight() {
  return (
   <>
   
    <Router>
    <NavbarEight />
      <Routes>
        <Route path='/' element={<DefaultPage />} />
        <Route path='/home' element={<HomeEight />} />
        <Route path='/tvSeries' element={<TvSerie />} />
      </Routes>
      <Footer />
    </Router>
   </>
  )
}

export default MainEight