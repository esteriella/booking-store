import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../Assets/logo.png';

function Header() {
  return (
    <header  className="header">
        <div className="logo-container">
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            <h5 className="site-title">Estie Hub</h5>
        </div>
        <nav className="navbar">
            <ul className="nav-links">
            <li>
                <Link to="/"  className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/add-service"  className="nav-link">Add Service</Link>
            </li>
            <li>
                <Link to="/showcase"  className="nav-link">Showcase</Link>
            </li>
            <li>
                <Link to="/about"  className="nav-link">About</Link>
            </li>
            <li>
                <Link to="/contact"  className="nav-link">Contact</Link>
            </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
