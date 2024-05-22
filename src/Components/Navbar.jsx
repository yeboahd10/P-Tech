import React,{useState} from 'react'
import Styles from '../Components/Navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Courses from '../Components/Courses'



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={Styles.Nav}>
      <a className={Styles.title} href=''>P-DAN TECHNOLOGIES</a>
      
      <div className={Styles.menu} onClick={()=> setMenuOpen(!menuOpen)}>
        <div className={Styles.Hum}>
        {menuOpen ? <CloseIcon sx={{color: 'red'}}/> : <MenuIcon   />}
        </div>
      
    
      
        <ul className={`${Styles.menuItems} ${menuOpen &&Styles.menuOpen}`}>
          <li><a href="">HOME</a></li>
          <li><a href=''>SERVICES</a></li>
          <li><a href={<Courses/>}>COURSES</a></li>
          <li><a href=''>ABOUT</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar