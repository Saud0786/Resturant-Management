import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
function Navbar({setShowLogin,setSearchQuery,searchQuery}) {
  
  const [menu,setMenu]=useState("home");
  const{getTotalCartAmount}=useContext(StoreContext);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className="logo"/></Link>
       <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
       </ul>
       <div className="navbar-right">
       <div className='search-container'>
          <img src={assets.search_icon} alt='' onClick={() => setShowSearch(!showSearch)} className='search-icon'  />
          {showSearch && (
            <input type='text' className='search-input' placeholder='Search for food...'  value={searchQuery} 
             onChange={(e) => setSearchQuery(e.target.value)}  autoFocus />
          )}
        </div>
           <div className="navbar-search-icon">
              <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link> 
               <div className={getTotalCartAmount()===0?"":"dot"}></div>
           </div>
           <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar
