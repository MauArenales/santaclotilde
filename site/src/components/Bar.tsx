import './Bar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const styleItem = "font-montserrat text-white font-semibold";

  return (
    <nav className="bg-purple-800 p-3 overflow-hidden" id="mainNav">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="flex items-center w-full" id="navbarResponsive">
          <ul className="flex flex-row lg:mx-auto mt-3 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-6">
            <li className="whitespace-nowrap">
              <div className="marquee">
                <span className={styleItem}>{t('barra.texto')}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
