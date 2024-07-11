
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeOrder/Placeorder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  
  const [showLogin , setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
