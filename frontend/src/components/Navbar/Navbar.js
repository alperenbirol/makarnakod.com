import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            makarnakod
            <i class='fab fa-accessible-icon'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                anasayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sorular'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                sorular
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/diller'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                diller
              </Link>
            </li>

            <li>
              <Link
                to='/uye-ol'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                üye ol
              </Link>
            </li>

            <li>
              <Link
                to='/giris-yap'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                giriş yap
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>üye ol</Button>}
          {button && <Button buttonStyle='btn--primary'>giriş yap</Button>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;