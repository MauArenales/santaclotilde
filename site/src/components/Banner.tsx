import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import hospitalImage from '../assets/images/hospital-santa-clotilde.jpg';
import documentsImage from '../assets/images/documents.png';
import backgroundImage from '../assets/backgrounds/banner-geometric-background-square.png';

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
        <h2 className="font-montserrat text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold lg:mb-6 xl:mb-8">
          {t('banner.title')}
        </h2>
      </div>

      <BannerSection
        info={info.slice(0, 3)}
        image={hospitalImage}
        imageVariants={imageVariants}
        reverseOrder={false}
      />
      <BannerSection
        info={info.slice(3)}
        image={documentsImage}
        imageVariants={documentVariants}
        reverseOrder={true}
      />
    </section>
  );
};

const BannerSection: React.FC<{ info: any[], image: string, imageVariants: any, reverseOrder: boolean }> = ({ info, image, imageVariants, reverseOrder }) => (
  <div className={`relative flex flex-col lg:flex-row items-center ${reverseOrder ? 'lg:pt-12 lg:py-20' : 'pt-12 py-10 lg:py-20'} rounded-lg overflow-hidden space-y-8 lg:space-y-0`}>
    {reverseOrder && (
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className="lg:w-1/2 mt-6 lg:mt-0 lg:rounded-r-full flex justify-center overflow-hidden"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt="Imagen"
              className="w-full h-auto lg:rounded-r-full lg:shadow-lg"
            />
          </motion.div>
        )}
      </InView>
    )}
    <div className={`lg:w-1/2 px-4 md:px-10 text-center ${reverseOrder ? 'lg:text-right' : 'lg:text-left'} overflow-hidden max-w-md mx-auto`}>
      {info.map((item, index) => (
        <div key={item.key} className={`mb-8 flex justify-center ${reverseOrder ? 'lg:justify-end' : ''}`}>
          <div className={`flex items-center justify-center mx-4 ${reverseOrder ? 'lg:order-2' : ''}`}>
            <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-green-500">{index + (reverseOrder ? 4 : 1)}</span>
          </div>
          <div className={`w-full ${reverseOrder ? 'lg:order-1' : ''}`}>
            <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              {item.subtitle}
            </h3>
            <p className="text-gray-700 mt-2 lg:mt-4 mb-6">
              <span className="text-lg md:text-xl lg:text-xl font-sans">
                {item.paragraph}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
    {!reverseOrder && (
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
              src={image}
              alt="Imagen"
              className="w-full h-auto lg:rounded-l-full lg:shadow-lg"
            />
          </motion.div>
        )}
      </InView>
    )}
  </div>
);

export default Banner;
