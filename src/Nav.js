import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="Nav">

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div>
            <a className="navbar-toggler fr" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </a>
          </div>
          <div id='snake'>
              <h1>JK</h1>
          </div>
          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ju">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-6" >
                <li className="nav-item">
                  <Link to='/' className='nav-link' ><i className="fa-solid fa-house-chimney"></i></Link>
                </li>
                <li className="nav-item">
                  <Link to='/App' className='nav-link'><i className="fa-solid fa-file"></i></Link>
                </li>
                <li className="nav-item">
                  <Link to='/About' className='nav-link'><i class="fa-regular fa-user"></i></Link>
                </li>
                <li className="nav-item">
                  <Link to='/Contact' className='nav-link'><i class="fa-solid fa-phone-volume"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;