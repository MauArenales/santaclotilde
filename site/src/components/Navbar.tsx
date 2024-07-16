import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const styleItem = "font-montserrat  text-white hover:text-pucp hover:font-semibold";

  return (
    <nav className="bg-white p-3" id="mainNav">
      <div className="container mx-auto px-4 lg:px-5">
        <button className="text-black hover:text-pucp focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="navbarResponsive">
          <ul className="flex flex-col lg:flex-row lg:mx-auto mt-3 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-6">
            <li className="">
              <a className="font-montserrat  text-black hover:text-pucp hover:font-semibold" href="index.html">{t('nav.intro')}</a>
            </li>
            <li className="">
              <a className="font-montserrat text-black hover:text-pucp hover:font-semibold" href="justificacion.html">{t('nav.justification')}</a>
            </li>
            <li className="">
              <a className="font-montserrat text-black hover:text-pucp hover:font-semibold" href="objetivos.html">{t('nav.objectives')}</a>
            </li>
            <li className="">
              <a className="font-montserrat text-black hover:text-pucp hover:font-semibold" href="visitaAlHospital.html">{t('nav.visit')}</a>
            </li>
            <li className="">
              <a className="font-montserrat text-black hover:text-pucp hover:font-semibold" href="participantes.html">{t('nav.members')}</a>
            </li>
            <li className="">
              <a className="font-montserrat text-black hover:text-pucp hover:font-semibold" href="contacto.html">{t('nav.contact')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
