import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    const Logo = '../src/assets/logo.png'
  return (
    <nav className="nav navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a href="./index.html" className="navbar-brand"><img className="logo" src={Logo} alt="logo gamer"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbar-start" aria-controls="navbar-start"
                    aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon p-4"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-start">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav_links">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav_links">celulares</a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav_links">juegos</a>                        
                    </li>
                    <li className="nav-item">
                        <a className="nav_links">consolas</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav_links">Contacto</a>

                  </li>
                </ul>   
                <CartWidget/> 
                </div>
            </div>
     </nav>
  );
}

export default NavBar;