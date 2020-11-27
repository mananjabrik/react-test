import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Manan <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className='nav-link' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className='nav-link' onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className='nav-link' onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className='nav-link' onClick={closeMobileMenu}>
                                SignUp
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
