import React from 'react'
import './Navbar.css'
import menu_icon from'../../assets/menu.png'
import logo from'../../assets/logo.png'
import search_icon from'../../assets/search.png'
import upload_icon from'../../assets/upload.png'
import more_icon from'../../assets/more.png'
import profile_icon from'../../assets/jack.png'
import notification_icon from'../../assets/notification.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({setSidebar}) => {
  const { loginWithRedirect,isAuthenticated,logout,user, isLoading} = useAuth0();

  return (
    <nav  className='flex-div'>
    <div className='nav-left flex-div'>
    <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=''/>
    <Link to='/' ><img className='logo' src={logo} alt=''/> </Link>

    </div>

    <div className='nav-middle flex-div'>
    <div className='search-box flex-div'>
    <input type='text' placeholder='Search'/>
    <img  className='search-icon'  src={search_icon}  alt=''/>
</div>
    </div>
    <div className='nav-right flex-div'> 
    <img src={upload_icon} alt=''/>
    <img src={more_icon} alt=''/>
    <img src={notification_icon} alt=''/>
    {isAuthenticated && <img className='user-icon' src={user.picture} alt={user.name} />}
    {isAuthenticated ? ( <button className='btn-login'   onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):( <button className='btn-login'  onClick={() => loginWithRedirect()}>Log In</button>)}
    </div>
    </nav>
  )
}

export default Navbar
