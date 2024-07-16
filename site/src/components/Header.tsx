import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import logo from '../assets/logos/GIDIS-PUCP.png';

function Header() {
  return (
    <header className="bg-pucp">
      <div className="py-[25px] pr-4 px-sm md:px-md lg:px-lg xl:px-xl">
        <div className="flex justify-between items-center">
          <a href="index.html">
            <img className="logo-gidis max-h-[60px]" src={logo} alt="GIDIS PUCP Logo" />
          </a>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
