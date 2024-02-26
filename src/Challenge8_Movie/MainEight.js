import React from 'react'
import HomeEight from './components/HomeEight'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import NavbarEight from './components/NavbarEight'
import Genres from './components/Genres'
import Country from './components/Country'
import Movies from './components/Movies'
import TvSerie from './components/TvSerie'
import DefaultPage from './components/DefaultPage'


function MainEight() {
  return (
   <>
   
    <Router>
    <NavbarEight />
      <Routes>
        <Route path='/' element={<DefaultPage />} />
        <Route path='/home' element={<HomeEight />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/country' element={<Country />} />
        <Route path='/tvSeries' element={<TvSerie />} />
      </Routes>
    </Router>
   </>
  )
}

export default MainEight