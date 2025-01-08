import React, { useState, useRef, useEffect } from 'react';

    const PortfolioSection = () => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const sliderRef = useRef<HTMLDivElement>(null);

      const builds = [
        {
          id: 1,
          imageUrl: 'https://i.ibb.co/BgPGcLc/IMG-5234.jpg',
          title: 'PC Gamer Ultime',
          description: 'Un PC gaming avec un éclairage RGB personnalisable, parfait pour les jeux AAA.',
          components: ['Intel Core i9', 'NVIDIA RTX 4090', '32GB DDR5 RAM', '2TB NVMe SSD'],
          targetAudience: 'Enthusiast Gamers',
        },
        {
          id: 2,
          imageUrl: 'https://i.ibb.co/1rLrJmd/IMG-5235.jpg',
          title: 'PC Streaming Pro',
          description: 'Un PC optimisé pour le streaming et la création de contenu, avec une capture vidéo de haute qualité.',
          components: ['AMD Ryzen 9', 'NVIDIA RTX 4070', '64GB DDR5 RAM', '1TB NVMe SSD'],
          targetAudience: 'Content Creators',
        },
        {
          id: 3,
          imageUrl: 'https://i.ibb.co/Rh93QxZ/IMG-5236.jpg',
          title: 'PC Performance',
          description: 'Un PC puissant pour les jeux les plus exigeants, avec un refroidissement optimal.',
          components: ['Intel Core i7', 'AMD Radeon RX 7900 XT', '32GB DDR5 RAM', '2TB NVMe SSD'],
          targetAudience: 'Hardcore Gamers',
        },
        {
          id: 4,
          imageUrl: 'https://i.ibb.co/1Mj45gR/IMG-5237.jpg',
          title: 'PC Minimaliste',
          description: 'Un PC compact et élégant pour un bureau épuré, idéal pour le travail et le multimédia.',
          components: ['Intel Core i5', 'Integrated Graphics', '16GB DDR4 RAM', '500GB NVMe SSD'],
          targetAudience: 'Casual Users',
        },
        {
          id: 5,
          imageUrl: 'https://images.unsplash.com/photo-1603434491797-690149089661?auto=format&fit=crop&w=800&q=80',
          title: 'PC Multimédia',
          description: 'Un PC polyvalent pour le divertissement et la productivité, avec un excellent rapport qualité-prix.',
          components: ['AMD Ryzen 5', 'AMD Radeon RX 6700', '16GB DDR4 RAM', '1TB NVMe SSD'],
          targetAudience: 'Home Users',
        },
        {
          id: 6,
          imageUrl: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=800&q=80',
          title: 'PC Création',
          description: 'Un PC puissant pour la création graphique et le montage vidéo, avec une grande capacité de stockage.',
          components: ['Intel Core i7', 'NVIDIA RTX 3070', '32GB DDR4 RAM', '2TB NVMe SSD'],
          targetAudience: 'Creative Professionals',
        },
        {
          id: 7,
          imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
          title: 'PC Gaming Entrée de Gamme',
          description: 'Un PC abordable pour les jeux en 1080p, avec des performances solides.',
          components: ['AMD Ryzen 5', 'AMD Radeon RX 6600', '16GB DDR4 RAM', '500GB NVMe SSD'],
          targetAudience: 'Budget Gamers',
        },
        {
          id: 8,
          imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
          title: 'PC Bureau',
          description: 'Un PC fiable et performant pour le travail de bureau, avec une grande capacité de stockage.',
          components: ['Intel Core i5', 'Integrated Graphics', '16GB DDR4 RAM', '1TB SSD'],
          targetAudience: 'Office Workers',
        },
      ];

      const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? builds.length - 1 : prev - 1));
      };

      const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === builds.length - 1 ? 0 : prev + 1));
      };

      useEffect(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
      }, [currentSlide]);

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nos Réalisations
          </h2>
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${builds.length * 100}%` }}
            >
              {builds.map((build) => (
                <div key={build.id} className="w-full flex-shrink-0 px-4" style={{ width: '100%' }}>
                  <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <img
                      src={build.imageUrl}
                      alt={build.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">{build.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{build.description}</p>
                      <p className="text-gray-400 text-sm">
                        <span className="font-medium">Composants:</span> {build.components.join(', ')}
                      </p>
                      <p className="text-gray-400 text-sm">
                        <span className="font-medium">Public Cible:</span> {build.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      );
    };

    export default PortfolioSection;
