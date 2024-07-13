import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import logo from '../assets/images/gidis-pucp-blanco-transparente.png';

function Header() {
  return (
    <header className="bg-pucp">
      <div className="px-0 pr-4 sm:px-6 md:px-8 lg:px-10 lg:pr-20 xl:px-12 xl:pr-20">
        <div className="flex justify-between items-center py-4">
          <a href="index.html">
            <img className="logo-gidis max-h-[110px]" src={logo} alt="GIDIS PUCP Logo" />
          </a>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
