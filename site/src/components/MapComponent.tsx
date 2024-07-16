import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/images/mapa/santa-clotilde-mapa-2.png';
import image2 from '../assets/images/mapa/santa-clotilde-mapa-2.png';
import image3 from '../assets/images/mapa/santa-clotilde-mapa-3.png';
import image4 from '../assets/images/mapa/santa-clotilde-mapa-4.png';
import image5 from '../assets/images/mapa/santa-clotilde-mapa-5.png';
import image6 from '../assets/images/mapa/santa-clotilde-mapa-6.png';
import image7 from '../assets/images/mapa/santa-clotilde-mapa-7.png';
import image8 from '../assets/images/mapa/santa-clotilde-mapa-8.png';
import image9 from '../assets/images/mapa/santa-clotilde-mapa-9.png';
import image10 from '../assets/images/mapa/santa-clotilde-mapa-10.png';
import image11 from '../assets/images/mapa/santa-clotilde-mapa-11.png';
import image12 from '../assets/images/mapa/santa-clotilde-mapa-12.png';
import image13 from '../assets/images/mapa/santa-clotilde-mapa-13.png';
import image14 from '../assets/images/mapa/santa-clotilde-mapa-14.png';
import image15 from '../assets/images/mapa/santa-clotilde-mapa-15.png';
import image16 from '../assets/images/mapa/santa-clotilde-mapa-16.png';
import image17 from '../assets/images/mapa/santa-clotilde-mapa-17.png';
import image18 from '../assets/images/mapa/santa-clotilde-mapa-18.png';
import image19 from '../assets/images/mapa/santa-clotilde-mapa-19.png';
import image20 from '../assets/images/mapa/santa-clotilde-mapa-20.png';
import image21 from '../assets/images/mapa/santa-clotilde-mapa-21.png';
import image22 from '../assets/images/mapa/santa-clotilde-mapa-22.png';
import image23 from '../assets/images/mapa/santa-clotilde-mapa-23.png';
import image24 from '../assets/images/mapa/santa-clotilde-mapa-24.png';
import image25 from '../assets/images/mapa/santa-clotilde-mapa-25.png';
import image26 from '../assets/images/mapa/santa-clotilde-mapa-26.png';
import image27 from '../assets/images/mapa/santa-clotilde-mapa-27.png';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17, image18,
  image19, image20, image21, image22, image23, image24, image25, image26, image27
];

function MapComponent(){
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const standardScrollAmount = 100; // Define el desplazamiento estándar en píxeles
  const distance = 798; // Distancia fija del inicio de la página al mapa

  function updateImageIndexScroll(prevIndex: number, down: boolean, totalImages: number): number {
    let newIndex;
    const desplazamiento = (window.scrollY - distance) / standardScrollAmount;
    if (down) {  // Si el desplazamiento es hacia abajo
      newIndex = Math.floor(desplazamiento);
    } else {  // Si el desplazamiento es hacia arriba
      newIndex = Math.ceil(desplazamiento);
    }
    if (newIndex < 0) {
      return 0;  // Mantén el índice en 0 si ya es el primero
    }
    if (newIndex >= totalImages) {
      return totalImages-1;  // Mantén el índice si ya estás en la última imagen
    }
    const textIndex = Math.floor(newIndex / 9);
    setCurrentTextIndex(textIndex);
    return newIndex;
  }

  const handleScroll = () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta = currentScrollTop - lastScrollTop;
    const down = scrollDelta > 0;
    setCurrentImageIndex(prevIndex => {
      const newIndex = updateImageIndexScroll(prevIndex, down, images.length);
      if (prevIndex !== newIndex) {
        // Actualiza lastScrollTop solo si el índice de imagen ha cambiado.
        setLastScrollTop(currentScrollTop);
      }
      return newIndex;
    });
  };

  // Consideración de cuándo hacer el mapa "sticky"
  useEffect(() => {
    // window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  const title = t(`map-component.texts.${currentTextIndex}.title`);
  const paragraphs = t(`map-component.texts.${currentTextIndex}.paragraphs`, { returnObjects: true });

  return (
    <section className="min-h-screen">
      <div className="w-full h-screen sticky top-0 left-0">
        <div className="absolute w-full h-screen">
          <div className="w-full h-screen grid grid-flow-col grid-cols-2 sm:px-sm md:px-md lg:px-lg xl:px-xl">
            <div className="flex flex-col items-center justify-center">
              <div className=" p-6 text-white 
              bg-radial-gradient from-white from-0% to-green-600 to-70%
              rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
                <h2 className="text-3xl xl:text-4xl font-montserrat font-bold mb-4 xl:mb-6">{title}</h2>
                {Array.isArray(paragraphs) ? (
                  paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg xl:text-xl font-sans mt-4">
                      {paragraph}
                    </p>
                  ))
                ) : ''}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <img src={images[currentImageIndex]} alt={`Mapa Santa Clotilde ${currentImageIndex + 1}`} className="w-full h-full object-cover" />
      </div>
      <section className="h-[2700px]">
      </section>
    </section>
  );
};

export default MapComponent;