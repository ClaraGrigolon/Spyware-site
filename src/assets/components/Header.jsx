import React from 'react';
import './Header.css';
import Logo from '../img/spy-simbol.png';

function Header(){
    return(
        <>
          <header>
            <img src={Logo} alt="Logo" />
            <h1>Spyware</h1>
          </header>
        </>
    );
};
export default Header;