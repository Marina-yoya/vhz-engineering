import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const { user } = useAuthContext();
    console.log(user, 'here')

    let guestNav = (

        <>
            <li className="module-menu">
                <Link to="/login">LOGIN</Link>
            </li>
            <li className="module-menu">
                <Link to="/register">REGISTER</Link>
            </li>
        </>
    )

    let userNav = (
        <>

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
                <Link to="/logout">LOGOUT</Link>
            </li>
        </>
    )

    return (
        <header>
            <nav id="mainNav">
                <div className="site-container">VHZ Engineering {user.email}</div>
                <div id="top-menu">
                    <ul className="nav-pages">
                        <li className="module-menu">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="module-menu">
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li className="module-menu">
                            <Link to="/our-project">Our Project</Link>
                        </li>
                        {user.email
                            ? userNav
                            : guestNav}
                        {/* <li className="module-menu">
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
                <li className="module-menu">
                   <Link to="/logout">LOGOUT</Link>
                </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;