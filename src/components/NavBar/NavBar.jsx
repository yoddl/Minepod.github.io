import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBar.css'
import { useRef } from 'react'
import { links } from '../../data'


const NavBar = () => {
  const navRef = useRef();
  const showNavBar = ()=>{
    navRef.current.classList.toggle('responsive-nav')
  }
  return (
    <>
        <header>
          <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="" />
          <nav ref={navRef} onClick={showNavBar}>
            <Link to='/'>Home</Link>
            <Link to='/commands'>Commands</Link>
            <Link to='/policy'>Policy</Link>
            <Link to='/support'>Support</Link>
            <Link to='/vote'>Vote</Link>
            <button className="btn" onClick={()=>{window.location.href = links.invite}}>Invite me</button>
            <button className='nav-btn nav-close-btn' >
              <FaTimes></FaTimes>
            </button>
          </nav>
          <button className='nav-btn' onClick={showNavBar} >
            <FaBars></FaBars>
          </button>
        </header>
    </>
  )
}

export default NavBar