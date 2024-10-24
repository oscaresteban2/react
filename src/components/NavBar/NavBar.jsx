import './NavBar.css'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imgLogo = "../src/assets/logo.png"
    return (
        <header className="navbar navbar-expand-lg bg-NavBar">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="nav navbar navbar-expand-lg fixed-top" id="navbarNavDropdown">
                <Link to={"/"}>
                    <img className="logo" src={imgLogo} alt="gamer zone" />
                </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/categoria/3`}>Consolas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/categoria/2`}>Juegos xbox</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={`/categoria/4`}>Juegos ps5</NavLink>
                        </li> 
                        <li className='nav-item'>
                            <NavLink to={`/categoria/5`}>Juegos nintendo</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={`/categoria/1`}>Auriculares</NavLink>
                        </li>
                       
                    </ul>
                    <CartWidget />
                </nav>
            </div>
        </header>        
    )
}

export default NavBar