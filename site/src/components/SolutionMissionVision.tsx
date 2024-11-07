import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaClipboardCheck, FaNetworkWired } from 'react-icons/fa';
import { MdTimer, MdHealthAndSafety, MdPeople, MdSync } from 'react-icons/md';

const SolutionMissionVision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-16">
      {/* Solución */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-17 text-black text-center mt-14">
        <h3 className="text-xl text-yellow-500 md:text-2xl lg:text-3xl font-montserrat font-bold mb-6">
            {t('solution.header')}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat text-blue-800 font-bold mb-10">
          {t('solution.title')}
        </h2>
        <p className="text-lg md:text-xl font-sans mb-12">
          {t('solution.introduction')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-50/30 via-blue-100/20 to-blue-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <FaUser className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('solution.point1')}</h3>
            <p className="text-center">{t('solution.point1Description')}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50/30 via-green-100/20 to-green-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-green-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <FaClipboardCheck className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('solution.point2')}</h3>
            <p className="text-center">{t('solution.point2Description')}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-50/30 via-yellow-100/20 to-yellow-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-yellow-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <FaNetworkWired className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('solution.point3')}</h3>
            <p className="text-center">{t('solution.point3Description')}</p>
          </div>
        </div>
      </div>

      {/* Misión */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-17 text-black text-center mt-28">
        <h3 className="text-xl text-yellow-500 md:text-2xl lg:text-3xl font-montserrat font-bold mb-6">
            {t('mission.header')}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat text-blue-800 font-bold mb-10">
          {t('mission.title')}
        </h2>
        <p className="text-lg md:text-xl font-sans mb-12">
          {t('mission.introduction')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-50/30 via-blue-100/20 to-blue-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <MdTimer className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('mission.point1')}</h3>
            <p className="text-center">{t('mission.point1Description')}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50/30 via-green-100/20 to-green-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-green-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <MdHealthAndSafety className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('mission.point2')}</h3>
            <p className="text-center">{t('mission.point2Description')}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50/30 via-purple-100/20 to-purple-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-purple-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <MdPeople className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('mission.point3')}</h3>
            <p className="text-center">{t('mission.point3Description')}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-50/30 via-yellow-100/20 to-yellow-200/30 backdrop-filter backdrop-blur-md rounded-3xl border border-yellow-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <MdSync className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('mission.point4')}</h3>
            <p className="text-center">{t('mission.point4Description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionMissionVision;