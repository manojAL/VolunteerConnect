
import '../components/Navbar.css'
import logo from 'C:\\Users\\manoj\\Desktop\\Volunteerconnect\\my-app\\src\\assets\\logo.jpg'
import search from 'C:\\Users\\manoj\\Desktop\\Volunteerconnect\\my-app\\src\\assets\\searc-icon.jpg'
import clear from 'C:\\Users\\manoj\\Desktop\\Volunteerconnect\\my-app\\src\\assets\\clear.png'
export default function Navbar(){
return(
  <div>
    <nav className="navbar">
        <div className="logo-container"><img className="logo-img" src={logo}/></div>
        <div className="search-container">
            
            <div className="search-container"><input className="search-bar" type="text" placeholder="Search..."/></div>
            <div className="search-icons">
            <button className="clear-button"><img src={clear} className="clear-img"/></button>
            <button className="search-button"><img src={search} className="search-img"/></button>
            </div>
            
        </div>
        <ul className="nav-links">
           <a href="#login">Login</a>
           <a href="#volunteer">Explore</a>
           <a href="#ngo">NGO's</a>
           <a href="#profile">Profile</a>
        </ul>
    </nav>
  </div>
)
}