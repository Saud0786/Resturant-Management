import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [Showlogin,setShowLogin]=useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
    {Showlogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
         <Navbar setShowLogin={setShowLogin} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
         <Routes>
          <Route path='/' element={<Home setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOder/>} />
         </Routes>
    </div>
  
    <Footer/>

    </>
  )
}

export default App
