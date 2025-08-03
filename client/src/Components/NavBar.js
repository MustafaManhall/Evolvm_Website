import { Link,useLocation } from "react-router-dom";
import '../Css/navbar.css';

const NavBar = () => {
    const location = useLocation();

    return ( 
        <div className="nav-container">
           <nav className="navbar">
            {/* Logo and Navigation Links */}
            <div className="logo">
                <Link to="/">
                    <img src="images/Evolvm_Logo.png" alt="logo"/>
                </Link>
            </div>

            <div className="nav-links">
                <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
                <Link className={location.pathname === "/our-projects" ? "active" : ""} to="/our-projects">Our Projects</Link>
                <Link className={location.pathname === "/contact-us" ? "active" : ""} to="/contact-us">Contact Us</Link>
            </div>

            {/* WhatsApp Button */}
            <div className="whatsapp-btn-container nav-links">
                <a href="https://wa.link/8vyvav" target="_blank" rel="noopener noreferrer">
                    <button className="whatsapp-btn">WhatsApp</button>
                </a>
            </div>
        </nav> 
        </div>
        
    );
}

export default NavBar;
