import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Club from "./components/Body/Club.jsx"
import Events from './components/Body/Events.jsx';
import Offers from "./components/Body/Offers.jsx"
import Producers from "./components/Body/Producers.jsx"
import Store from "./components/Body/Store.jsx"
import Home from './components/Home.jsx';
import FooterSix from './components/Footer/FooterSix.jsx';


function MainSix() {
  return (
    <>
    
        <Router>
        <NavBar />
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route path='/club' element={<Club />} />    
            <Route path='/events' element={<Events />} />   
            <Route path='/offers' element={<Offers />} />   
            <Route path='/producers' element={<Producers />} />   
            <Route path='/store' element={<Store />} />   
            
        </Routes>  
        <FooterSix />  
        </Router>    
    
    </>
  )
}

export default MainSix