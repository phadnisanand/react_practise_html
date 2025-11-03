import React from 'react'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className=" fixed-top">
          <div className="container-fluid  header">
            <div className="container">
              <nav className="navbar navbar-expand-lg justify-content-center" id="sticky-nav">
                  <Link className="navbar-brand white" to="/">
                    <img src={logo} alt="" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/about">About</Link>
                        </li>              
                        <li className="nav-item">
                          <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/contact-us">Contact</Link>
                        </li>
                      </ul>
                  </div>
              </nav>
            </div>
          </div>
      </header>
  )
}

export default Header
