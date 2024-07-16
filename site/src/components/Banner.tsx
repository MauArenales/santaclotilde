import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import hospitalImage from '../assets/images/hospital-santa-clotilde.jpg';
import documentsImage from '../assets/images/documents.png';
import backgroundImage from '../assets/backgrounds/banner-geometric-background-square.png';
import octagonIcon from '../assets/icons/octagon.svg'; // Asegúrate de tener este archivo

const Banner: React.FC = () => {
  const { t } = useTranslation();

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const documentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const info = [
    { key: '0', subtitle: t('banner.texts.0.subtitle'), paragraph: t('banner.texts.0.paragraph') },
    { key: '1', subtitle: t('banner.texts.1.subtitle'), paragraph: t('banner.texts.1.paragraph') },
    { key: '2', subtitle: t('banner.texts.2.subtitle'), paragraph: t('banner.texts.2.paragraph') },
    { key: '3', subtitle: t('banner.texts.3.subtitle'), paragraph: t('banner.texts.3.paragraph') },
    { key: '4', subtitle: t('banner.texts.4.subtitle'), paragraph: t('banner.texts.4.paragraph') },
    { key: '5', subtitle: t('banner.texts.5.subtitle'), paragraph: t('banner.texts.5.paragraph') },
    { key: '6', subtitle: t('banner.texts.6.subtitle'), paragraph: t('banner.texts.6.paragraph') },
  ];

  return (
    <section className="relative bg-opacity-100 pt-12 lg:pb-10 bg-radial-blue-gradient overflow-hidden">
      <div
        className="hidden lg:block absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative flex items-center justify-center overflow-hidden">
        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 lg:mb-6 xl:mb-8">
          {t('banner.title')}
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center pt-12 py-10 lg:py-20 rounded-lg overflow-hidden">
        <div className="lg:w-1/2 px-10 md:pl-md lg:pr-md xl:pl-lg xl:pr-lg text-center lg:text-left overflow-hidden">
          {info.slice(0, 3).map((item, index) => (
            <div key={item.key} className="mb-8">
              <div className="flex items-center">
                <img src={octagonIcon} className="w-8 h-8 text-green-500 mr-2" alt="octagon" />
                <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                  <span className="text-white bg-green-500 px-2 rounded-full">{index + 1}</span>
                  {item.subtitle}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                <span className="text-lg md:text-xl lg:text-xl xl:text-2xl font-sans mt-4">
                  {item.paragraph}
                </span>
              </p>
            </div>
          ))}
        </div>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="lg:w-1/2 mt-6 lg:mt-0 lg:rounded-l-full flex justify-center overflow-hidden"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={imageVariants}
              transition={{ duration: 1 }}
            >
              <img
                src={hospitalImage}
                alt={t('banner.texts.0.bannerAlt')}
                className="lg:rounded-l-full lg:shadow-lg"
              />
            </motion.div>
          )}
        </InView>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center lg:pt-12 lg:py-20 rounded-lg overflow-hidden">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="hidden lg:w-1/2 mt-6 md:mt-0 md:rounded-r-full lg:flex justify-center overflow-hidden"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={documentVariants}
              transition={{ duration: 1 }}
            >
              <img
                src={documentsImage}
                alt={t('banner.texts.0.bannerAlt')}
                className="md:rounded-r-full md:shadow-lg"
              />
            </motion.div>
          )}
        </InView>
        <div className="lg:w-1/2 px-10 md:pr-md md:pl-16 lg:pl-md xl:pr-lg xl:pl-lg text-center lg:text-right overflow-hidden">
          {info.slice(3).map((item, index) => (
            <div key={item.key} className="mb-8">
              <div className="flex items-center justify-end">
                <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                  <span className="text-white bg-green-500 px-2 rounded-full">{index + 4}</span>
                  {item.subtitle}
                </h3>
                <img src={octagonIcon} className="w-8 h-8 text-green-500 ml-2" alt="octagon" />
              </div>
              <p className="text-gray-700 mb-6">
                <span className="text-lg md:text-xl lg:text-xl xl:text-2xl font-sans mt-4">
                  {item.paragraph}
                </span>
              </p>
            </div>
          ))}
        </div>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="flex lg:w-1/2 mt-6 lg:mt-0 lg:rounded-r-full lg:hidden justify-center overflow-hidden"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={documentVariants}
              transition={{ duration: 1 }}
            >
              <img
                src={documentsImage}
                alt={t('banner.texts.1.bannerAlt')}
                className="lg:rounded-r-full lg:shadow-lg"
              />
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default Banner;
