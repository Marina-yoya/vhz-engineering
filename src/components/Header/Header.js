import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {


    return(
        <header>
            <nav id="mainNav">
        <div className="site-container">VHZ Engineering</div>
        <div id="top-menu">
            <ul className="nav-pages">
                <li className="module-menu">
                    <Link to="/">HOME</Link>
                </li>
                <li className="module-menu">
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className="module-menu">
                    <Link to="/service">SERVICES</Link>
                </li>
                <li className="module-menu">
                    <Link to="/team">TEAM</Link>
                </li>
                <li className="module-menu">
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li className="module-menu">
                    <Link to="/login">LOGIN</Link>
                </li>
                <li className="module-menu">
                   <Link to="/register">REGISTER</Link>
                </li>
            </ul>
        </div>
    </nav>
        </header>
    )
}

export default Header;