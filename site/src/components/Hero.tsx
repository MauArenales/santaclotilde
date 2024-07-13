import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-transparent mb-0">
      <div className="relative flex items-center justify-center min-h-[40rem] bg-cover bg-center">
        <video
          id="-z-10"
          muted
          autoPlay
          loop
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ height: '100%', objectPosition: 'center' }}
          disablePictureInPicture
        >
          <source
            src="https://player.vimeo.com/external/375266918.hd.mp4?s=5f73d3e75aace116e984f273303b917ed50c2527&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 flex items-center justify-center w-full h-full px-6 md:px-10 lg:px-20">
          <div className="text-center bg-black bg-opacity-60 rounded-2xl text-white p-6 md:p-10 lg:p-20 w-full">
            <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 text-shadow">
              {t('hero.title')}
            </h1>
            <p className="font-sans md:text-lg lg:text-xl xl:text-2xl">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
