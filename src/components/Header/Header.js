import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const { user } = useAuthContext();


    let guestNav = (

        <>
            <li className="module-menu">
                <Link to="/login" className="nav-menu">LOGIN</Link>
            </li>
            <li className="module-menu">
                <Link to="/register" className="nav-menu">REGISTER</Link>
            </li>
        </>
    )

    let userNav = (
        <>

            <li className="module-menu">
                <Link to="/service" className="nav-menu">SERVICES</Link>
            </li>

            <li className="module-menu">
                <Link to="/create-team" className="nav-menu">CREATE TEAM</Link>
            </li>
            <li className="module-menu">
                <Link to="/my-team" className="nav-menu">MY TEAM</Link>
            </li>

            <li className="module-menu">
                <Link to="/logout" className="nav-menu">LOGOUT</Link>
            </li>
        </>
    )

    return (
        <header>
            <nav id="mainNav">
                <div className="site-container">VHZ Engineering 
                <span className='userName'>Welcome {user.email}</span>
                </div>
                <div id="top-menu">
                    <ul className="nav-pages">
                        <li className="module-menu">
                            <Link to="/" className="nav-menu" >HOME</Link>
                        </li>
                        <li className="module-menu ">
                            <Link to="/about" className="nav-menu">ABOUT</Link>
                        </li>
                        <li className="module-menu">
                            <Link to="/our-project" className="nav-menu">OUR PROJECT</Link>
                        </li>
                        <li className="module-menu">
                            <Link to="/team" className="nav-menu">TEAM</Link>
                        </li>
                        {user.email
                            ? userNav
                            : guestNav}

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;