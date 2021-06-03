import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa";
import {MdCode} from "react-icons/md";
import {Button} from './Button.js'
import './Navbar.css'
import {IconContext} from "react-icons/lib";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button , setButton] = useState(true)

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    };

useEffect(() => {
    showButton();
    },[]

);

window.addEventListener('resize', showButton)
    return(
      <>
        <IconContext.Provider value={{color:'#fff'}} onClick={closeMobileMenu}>
         <div className='navbar'>
             <div className='navbar-container'>
                 <Link to='/' className='navbar-logo'>
                     <MdCode className='navbar-icon' />
                     ADI
                 </Link>
                 <div className='menu-icon' onClick={handleClick} >
                 {click ? <FaTimes/>:<FaBars/>}
                 </div>
                 <ul className={click ? 'nav-menu active': 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                             Home
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/about'  className='nav-links' onClick={closeMobileMenu}>
                             About Us
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                             Service
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                             Products
                         </Link>
                     </li>

                     <li className='nav-btn'>
                         {button ? (
                             <Link to='/signup' className='btn-link' >
                                 <Button buttonStyle='btn--outline' buttonSize='btn--wide' > SIGN UP </Button>
                             </Link>
                         ) : (
                             <Link to='signup' className='btn-link' onClick={closeMobileMenu}>
                                 <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                     SIGN UP</Button>
                             </Link>
                         )}
                     </li>

                 </ul>
             </div>
         </div>
        </IconContext.Provider>
        </>
    )
}
export default Navbar