import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import flagPeru from '../assets/icons/flags/peru.png';
import flagUsa from '../assets/icons/flags/united-states.png';

function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); // Cierra el dropdown al cambiar de idioma
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex items-center justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-gray-200 bg-opacity-80 text-sm font-sans font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          <IoLanguage className="mr-2 h-5 w-5" />
          {t('language')}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M3.293 9.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right absolute z-50 right-0 mt-3 w-44 rounded-md shadow-lg bg-[#161616] ring-1 ring-black ring-opacity-5">
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => changeLanguage('es')} className="flex items-center px-4 py-3 text-sm rounded-md text-white hover:bg-[#222222] w-full text-left">
              <img src={flagPeru} alt="ES" className="w-5 h-5 mr-2" />
              Español
            </button>
            <button onClick={() => changeLanguage('en')} className="flex items-center px-4 py-3 text-sm rounded-md text-white hover:bg-[#222222] w-full text-left">
              <img src={flagUsa} alt="EN" className="w-5 h-5 mr-2" />
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
