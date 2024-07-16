import React from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/backgrounds/footer-gradient.png';

function Footer(){
  const { t } = useTranslation();

  return (
    <footer
      className="bg-opacity-75 pt-12 pb-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-17 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-14 pb-4 md:pb-8 lg:pb-12 xl:pb-20">
          <div className='md:col-span-7'>
            <h2 className="text-3xl sm:mb-3 md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-black">{t('footer.title')}</h2>
          </div>
          <div className="md:col-span-5 flex flex-col justify-between">
            <h3 className="text-2xl xl:text-3xl font-montserrat font-semibold mb-4">{t('footer.subtitle')}</h3>
            <div className="mb-4 xl:text-lg" dangerouslySetInnerHTML={{ __html: t('footer.description') }}></div>
            <div className='flex flex-col items-center justify-center'>
              <a href="mailto:gidis@pucp.edu.pe" className="block px-10 py-3 rounded-full font-semibold border-2 border-primary hover:bg-primary transition">
                {t('footer.button')}
              </a>
            </div>
            
          </div>
        </div>
        <div className='border border-primary border-opacity-50 mx-1 my-8'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
          <div className="mb-8">
            <h4 className="font-semibold">{t('footer.contact.title')}</h4>
            <p className='font-sans'>{t('footer.contact.group')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('footer.contact.email') }}></p>
            <p className='font-sans'>{t('footer.contact.head')}</p>
            <p className='font-sans'>{t('footer.contact.telephone')}</p>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.hospital.name')}</h4>
            <p className='font-sans'>{t('footer.hospital.city')}</p>
            <p className='font-sans'>{t('footer.hospital.region')}</p>
            <p className='font-sans'>{t('footer.hospital.country')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('footer.hospital.website') }}></p>
          </div>
        </div>
        <div className='border border-primary border-opacity-50 mx-1 my-8'></div>
        <div className="mt-10 font-sans text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: t('footer.pledge') }}></div>
      </div>
    </footer>
  );
};

export default Footer;
