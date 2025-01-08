import React, { useState, useEffect, useRef } from 'react';
    import { useParams } from 'react-router-dom';
    import { ComponentCategory, Component } from '../../types';
    import { mockComponents } from '../../data/mockComponents';
    import { Star } from 'lucide-react';

    const ComponentCategoryPage = () => {
      const { category } = useParams();
      const [components, setComponents] = useState<Component[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
      const [selectedProcessorModels, setSelectedProcessorModels] = useState<string[]>([]);
      const [selectedProcessorSockets, setSelectedProcessorSockets] = useState<string[]>([]);
      const [selectedProcessorPlatforms, setSelectedProcessorPlatforms] = useState<string[]>([]);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [isSocketDropdownOpen, setIsSocketDropdownOpen] = useState(false);
      const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
      const [frequencyRange, setFrequencyRange] = useState([2, 5]);
      const [priceRange, setPriceRange] = useState([55, 13000]);
      const [selectedChipsets, setSelectedChipsets] = useState<string[]>([]);
      const [selectedBusFrequencies, setSelectedBusFrequencies] = useState<string[]>([]);
      const [selectedUsageTypes, setSelectedUsageTypes] = useState<string[]>([]);
      const [coreCountRange, setCoreCountRange] = useState([2, 64]);
      const [tdpRange, setTdpRange] = useState([46, 350]);
      const [selectedCaseVersions, setSelectedCaseVersions] = useState<string[]>([]);
      const [selectedCoreNames, setSelectedCoreNames] = useState<string[]>([]);
      const [finenessRange, setFinenessRange] = useState([3, 120000]);
      const dropdownRef = useRef<HTMLDivElement>(null);
      const socketDropdownRef = useRef<HTMLDivElement>(null);
      const moreFiltersRef = useRef<HTMLDivElement>(null);
      const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
      const [isChipsetDropdownOpen, setIsChipsetDropdownOpen] = useState(false);
      const [isBusFrequencyDropdownOpen, setIsBusFrequencyDropdownOpen] = useState(false);

      // Convert the category parameter to the enum
      const categoryEnum = Object.values(ComponentCategory).find(
        (cat) => cat.toLowerCase().replace(/ /g, '-') === category
      ) as ComponentCategory;

      useEffect(() => {
        const fetchComponents = async () => {
          setLoading(true);
          setError(null);
          try {
            // Simulate a fetch with a delay
            await new Promise(resolve => setTimeout(resolve, 500));
            const filteredComponents = mockComponents.filter(c => c.category === categoryEnum);
            setComponents(filteredComponents);
          } catch (err) {
            setError('Failed to load components.');
          } finally {
            setLoading(false);
          }
        };

        if (categoryEnum) {
          fetchComponents();
        } else {
          setComponents([]);
          setLoading(false);
        }
      }, [categoryEnum]);

      const brands = [...new Set(mockComponents.filter(c => c.category === categoryEnum).map(c => c.brand))];

      const processorModels = [
        'AMD Ryzen 3',
        'AMD Ryzen 5',
        'AMD Ryzen 7',
        'AMD Ryzen 9',
        'AMD Ryzen Threadripper',
        'AMD Ryzen Threadripper PRO',
        'Intel Celeron',
        'Intel Core i3',
        'Intel Core i5',
        'Intel Core i7',
        'Intel Core i9',
        'Intel Core Ultra 5',
        'Intel Core Ultra 7',
        'Intel Core Ultra 9',
        'Intel Pentium',
        'Intel Processor',
      ];

      const processorSockets = [
        'AMD AM4',
        'AMD AM5',
        'AMD sTR5',
        'AMD sWRX8',
        'Intel 1200',
        'Intel 1700',
        'Intel 1851',
      ];

      const processorPlatforms = [
        'AMD Zen 2',
        'AMD Zen 3',
        'AMD Zen 4',
        'AMD Zen 5',
        'AMD Zen+',
        'Intel Alder Lake-S',
        'Intel Arrow-Lake-S',
        'Intel Comet Lake-S',
        'Intel Raptor Lake R',
        'Intel Raptor Lake-S',
        'Intel Raptor Lake-S R',
        'Intel Rocket Lake',
      ];

      const graphicChipsets = [
        'AMD Radeon 740M',
				'AMD Radeon 760M',
				'AMD Radeon 780M',
				'AMD Radeon Graphics',
				'AMD Radeon Vega 11 Graphics',
				'AMD Radeon Vega 6 Graphics',
				'AMD Radeon Vega 7 Graphics',
				'AMD Radeon Vega 8 Graphics',
				'Aucun',
				'Intel Graphics',
				'Intel UHD Graphics 610',
				'Intel UHD Graphics 630',
				'Intel UHD Graphics 710',
				'Intel UHD Graphics 730',
				'Intel UHD Graphics 750',
				'Intel UHD Graphics 770',
      ];

      const busFrequencies = [
        'DMI 8.0 GT/s',
      ];

      const usageTypes = [
        'Ordinateur de bureau',
        'Serveur',
      ];

      const caseVersions = [
        'Oui',
        'Non',
      ];

      const coreNames = [
        'Alder Lake',
				'Arrow-Lake',
				'Chagall',
				'Comet Lake',
				'Cézanne',
				'Granite Ridge AM5',
				'Matisse',
				'Phoenix',
				'Picasso',
				'Raphael AM5',
				'Raptor Lake',
				'Raptor Lake Refresh',
				'Raptor Lake-S Refresh',
				'Renoir',
				'Rocket Lake-S',
				'Storm Peak',
				'Vermeer',
      ];

      const handleProcessorModelClick = (model: string) => {
        if (selectedProcessorModels.includes(model)) {
          setSelectedProcessorModels(prev => prev.filter(m => m !== model));
        } else {
          setSelectedProcessorModels(prev => [...prev, model]);
        }
      };

      const handleProcessorSocketClick = (socket: string) => {
        if (selectedProcessorSockets.includes(socket)) {
          setSelectedProcessorSockets(prev => prev.filter(s => s !== socket));
        } else {
          setSelectedProcessorSockets(prev => [...prev, socket]);
        }
      };

      const handleProcessorPlatformClick = (platform: string) => {
        if (selectedProcessorPlatforms.includes(platform)) {
          setSelectedProcessorPlatforms(prev => prev.filter(p => p !== platform));
        } else {
          setSelectedProcessorPlatforms(prev => [...prev, platform]);
        }
      };

      const handleChipsetClick = (chipset: string) => {
        if (selectedChipsets.includes(chipset)) {
          setSelectedChipsets(prev => prev.filter(c => c !== chipset));
        } else {
          setSelectedChipsets(prev => [...prev, chipset]);
        }
      };

      const handleBusFrequencyClick = (frequency: string) => {
        if (selectedBusFrequencies.includes(frequency)) {
          setSelectedBusFrequencies(prev => prev.filter(f => f !== frequency));
        } else {
          setSelectedBusFrequencies(prev => [...prev, frequency]);
        }
      };

      const handleUsageTypeClick = (usage: string) => {
        if (selectedUsageTypes.includes(usage)) {
          setSelectedUsageTypes(prev => prev.filter(u => u !== usage));
        } else {
          setSelectedUsageTypes(prev => [...prev, usage]);
        }
      };

      const handleCaseVersionClick = (version: string) => {
        if (selectedCaseVersions.includes(version)) {
          setSelectedCaseVersions(prev => prev.filter(v => v !== version));
        } else {
          setSelectedCaseVersions(prev => [...prev, version]);
        }
      };

      const handleCoreNameClick = (coreName: string) => {
        if (selectedCoreNames.includes(coreName)) {
          setSelectedCoreNames(prev => prev.filter(c => c !== coreName));
        } else {
          setSelectedCoreNames(prev => [...prev, coreName]);
        }
      };

      const handleClearAllModels = () => {
        setSelectedProcessorModels([]);
      };

      const handleClearAllSockets = () => {
        setSelectedProcessorSockets([]);
      };

      const handleClearAllPlatforms = () => {
        setSelectedProcessorPlatforms([]);
      };

      const handleClearAllChipsets = () => {
        setSelectedChipsets([]);
      };

      const handleClearAllBusFrequencies = () => {
        setSelectedBusFrequencies([]);
      };

      const handleClearAllUsageTypes = () => {
        setSelectedUsageTypes([]);
      };

      const handleClearAllCaseVersions = () => {
        setSelectedCaseVersions([]);
      };

      const handleClearAllCoreNames = () => {
        setSelectedCoreNames([]);
      };

      const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      const handleSocketDropdownToggle = () => {
        setIsSocketDropdownOpen(!isSocketDropdownOpen);
      };

      const handlePlatformDropdownToggle = () => {
        setIsPlatformDropdownOpen(!isPlatformDropdownOpen);
      };

      const handleChipsetDropdownToggle = () => {
        setIsChipsetDropdownOpen(!isChipsetDropdownOpen);
      };

      const handleBusFrequencyDropdownToggle = () => {
        setIsBusFrequencyDropdownOpen(!isBusFrequencyDropdownOpen);
      };

      const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setFrequencyRange(prev => {
          const newRange = [...prev];
          newRange[1] = value;
          return newRange;
        });
      };

      const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setPriceRange(prev => {
          const newRange = [...prev];
          newRange[1] = value;
          return newRange;
        });
      };

      const handleCoreCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setCoreCountRange(prev => {
          const newRange = [...prev];
          newRange[1] = value;
          return newRange;
        });
      };

      const handleTdpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setTdpRange(prev => {
          const newRange = [...prev];
          newRange[1] = value;
          return newRange;
        });
      };

      const handleFinenessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setFinenessRange(prev => {
          const newRange = [...prev];
          newRange[1] = value;
          return newRange;
        });
      };

      const handleCloseDropdown = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setIsDropdownOpen(false);
        }
      };

      const handleCloseSocketDropdown = (e: MouseEvent) => {
        if (socketDropdownRef.current && !socketDropdownRef.current.contains(e.target as Node)) {
          setIsSocketDropdownOpen(false);
        }
      };

      const handleClosePlatformDropdown = (e: MouseEvent) => {
        if (moreFiltersRef.current && !moreFiltersRef.current.contains(e.target as Node)) {
          setIsPlatformDropdownOpen(false);
        }
      };

      const handleCloseChipsetDropdown = (e: MouseEvent) => {
        if (moreFiltersRef.current && !moreFiltersRef.current.contains(e.target as Node)) {
          setIsChipsetDropdownOpen(false);
        }
      };

      const handleCloseBusFrequencyDropdown = (e: MouseEvent) => {
        if (moreFiltersRef.current && !moreFiltersRef.current.contains(e.target as Node)) {
          setIsBusFrequencyDropdownOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleCloseDropdown);
        document.addEventListener('mousedown', handleClosePlatformDropdown);
        document.addEventListener('mousedown', handleCloseSocketDropdown);
        document.addEventListener('mousedown', handleCloseChipsetDropdown);
        document.addEventListener('mousedown', handleCloseBusFrequencyDropdown);
        return () => {
          document.removeEventListener('mousedown', handleCloseDropdown);
          document.removeEventListener('mousedown', handleClosePlatformDropdown);
          document.removeEventListener('mousedown', handleCloseSocketDropdown);
          document.removeEventListener('mousedown', handleCloseChipsetDropdown);
          document.removeEventListener('mousedown', handleCloseBusFrequencyDropdown);
        };
      }, []);

      return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex">
          <aside className="w-64 bg-gray-100 p-4 rounded-md mr-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">FILTRER LES PRODUITS :</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">CHERCHER UNE RÉFÉRENCE</label>
                <div className="relative">
                  <input type="text" placeholder="Désignation, modèle ..." className="w-full p-2 border rounded-md text-sm" />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">MARQUE</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">PRIX</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="55"
                    max="13000"
                    step="100"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>55 €</span>
                  <span>{priceRange[1]} €</span>
                </div>
              </div>
              <div className="relative" ref={dropdownRef}>
                <label className="block text-gray-700 mb-2 text-sm">MODÈLE DE PROCESSEUR</label>
                <div
                  onClick={handleDropdownToggle}
                  className="w-full p-2 border rounded-md text-sm flex justify-between items-center cursor-pointer"
                >
                  {selectedProcessorModels.length > 0 ? (
                    <div className="flex items-center gap-1 overflow-x-auto max-w-[200px]">
                      {selectedProcessorModels.map(model => (
                        <span key={model} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs whitespace-nowrap">
                          {model}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>Sélectionner</span>
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10">
                    <div className="p-2 space-y-1">
                      {processorModels.map(model => (
                        <div
                          key={model}
                          onClick={() => handleProcessorModelClick(model)}
                          className={`px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ${selectedProcessorModels.includes(model) ? 'bg-gray-100' : ''}`}
                        >
                          {model}
                        </div>
                      ))}
                    </div>
                    {selectedProcessorModels.length > 0 && (
                      <div className="p-2 border-t border-gray-200">
                        <button onClick={handleClearAllModels} className="text-red-500 hover:text-red-700 text-sm">
                          Clear All
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-2 text-sm">SUPPORT DU PROCESSEUR</label>
                <div
                  onClick={handleSocketDropdownToggle}
                  className="w-full p-2 border rounded-md text-sm flex justify-between items-center cursor-pointer"
                >
                  {selectedProcessorSockets.length > 0 ? (
                    <div className="flex items-center gap-1 overflow-x-auto max-w-[200px]">
                      {selectedProcessorSockets.map(socket => (
                        <span key={socket} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs whitespace-nowrap">
                          {socket}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>Sélectionner</span>
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {isSocketDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10">
                    <div className="p-2 space-y-1">
                      {processorSockets.map(socket => (
                        <div
                          key={socket}
                          onClick={() => handleProcessorSocketClick(socket)}
                          className={`px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ${selectedProcessorSockets.includes(socket) ? 'bg-gray-100' : ''}`}
                        >
                          {socket}
                        </div>
                      ))}
                    </div>
                    {selectedProcessorSockets.length > 0 && (
                      <div className="p-2 border-t border-gray-200">
                        <button onClick={handleClearAllSockets} className="text-red-500 hover:text-red-700 text-sm">
                          Clear All
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-2 text-sm">PLATEFORME (PROC.)</label>
                <div
                  onClick={() => setIsPlatformDropdownOpen(!isPlatformDropdownOpen)}
                  className="w-full p-2 border rounded-md text-sm flex justify-between items-center cursor-pointer"
                >
                  {selectedProcessorPlatforms.length > 0 ? (
                    <div className="flex items-center gap-1 overflow-x-auto max-w-[200px]">
                      {selectedProcessorPlatforms.map(platform => (
                        <span key={platform} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs whitespace-nowrap">
                          {platform}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>Sélectionner</span>
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {isPlatformDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10">
                    <div className="p-2 space-y-1">
                      {processorPlatforms.map(platform => (
                        <div
                          key={platform}
                          onClick={() => handleProcessorPlatformClick(platform)}
                          className={`px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ${selectedProcessorPlatforms.includes(platform) ? 'bg-gray-100' : ''}`}
                        >
                          {platform}
                        </div>
                      ))}
                    </div>
                    {selectedProcessorPlatforms.length > 0 && (
                      <div className="p-2 border-t border-gray-200">
                        <button onClick={handleClearAllPlatforms} className="text-red-500 hover:text-red-700 text-sm">
                          Clear All
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">FRÉQUENCE CPU (GHz)</label>
                <input
                  type="range"
                  min="2"
                  max="5"
                  step="1"
                  value={frequencyRange[1]}
                  onChange={handleFrequencyChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2 GHz</span>
                  <span>{frequencyRange[1]} GHz</span>
                </div>
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-2 text-sm">CHIPSET GRAPHIQUE</label>
                <div
                  onClick={handleChipsetDropdownToggle}
                  className="w-full p-2 border rounded-md text-sm flex justify-between items-center cursor-pointer"
                >
                  {selectedChipsets.length > 0 ? (
                    <div className="flex items-center gap-1 overflow-x-auto max-w-[200px]">
                      {selectedChipsets.map(chipset => (
                        <span key={chipset} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs whitespace-nowrap">
                          {chipset}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>Sélectionner</span>
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {isChipsetDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10">
                    <div className="p-2 space-y-1">
                      {graphicChipsets.map(chipset => (
                        <div
                          key={chipset}
                          onClick={() => handleChipsetClick(chipset)}
                          className={`px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ${selectedChipsets.includes(chipset) ? 'bg-gray-100' : ''}`}
                        >
                          {chipset}
                        </div>
                      ))}
                    </div>
                    {selectedChipsets.length > 0 && (
                      <div className="p-2 border-t border-gray-200">
                        <button onClick={handleClearAllChipsets} className="text-red-500 hover:text-red-700 text-sm">
                          Clear All
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-2 text-sm">FRÉQUENCE DU BUS</label>
                <div
                  onClick={handleBusFrequencyDropdownToggle}
                  className="w-full p-2 border rounded-md text-sm flex justify-between items-center cursor-pointer"
                >
                  {selectedBusFrequencies.length > 0 ? (
                    <div className="flex items-center gap-1 overflow-x-auto max-w-[200px]">
                      {selectedBusFrequencies.map(frequency => (
                        <span key={frequency} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs whitespace-nowrap">
                          {frequency}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>Sélectionner</span>
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {isBusFrequencyDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10">
                    <div className="p-2 space-y-1">
                      {busFrequencies.map(frequency => (
                        <div
                          key={frequency}
                          onClick={() => handleBusFrequencyClick(frequency)}
                          className={`px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ${selectedBusFrequencies.includes(frequency) ? 'bg-gray-100' : ''}`}
                        >
                          {frequency}
                        </div>
                      ))}
                    </div>
                    {selectedBusFrequencies.length > 0 && (
                      <div className="p-2 border-t border-gray-200">
                        <button onClick={handleClearAllBusFrequencies} className="text-red-500 hover:text-red-700 text-sm">
                          Clear All
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">NOMBRE DE CORE</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="2"
                    max="64"
                    step="1"
                    value={coreCountRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setCoreCountRange(prev => {
                        const newRange = [...prev];
                        newRange[1] = value;
                        return newRange;
                      });
                    }}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2</span>
                  <span>{coreCountRange[1]}</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">TDP (W)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="46"
                    max="350"
                    step="1"
                    value={tdpRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setTdpRange(prev => {
                        const newRange = [...prev];
                        newRange[1] = value;
                        return newRange;
                      });
                    }}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>46</span>
                  <span>{tdpRange[1]}</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">VERSION BOÎTE</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                  {caseVersions.map(version => (
                    <option key={version} value={version}>{version}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">NOM DU CORE</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                  {coreNames.map(coreName => (
                    <option key={coreName} value={coreName}>{coreName}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">FINESSE DE GRAVURE (nm)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="3"
                    max="120000"
                    step="100"
                    value={finenessRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setFinenessRange(prev => {
                        const newRange = [...prev];
                        newRange[1] = value;
                        return newRange;
                      });
                    }}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>3</span>
                  <span>{finenessRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                {components.length} PRODUITS CORRESPONDENT
              </h2>
              <select className="border border-gray-300 rounded-md p-2 text-sm">
                <option>Trier par</option>
              </select>
            </div>
            <div className="space-y-4">
              {components.map(component => (
                <div key={component.id} className="bg-white rounded-xl shadow-md p-4 flex gap-4">
                  <img src={component.imageUrl} alt={component.name} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{component.name}</h3>
                    <p className="text-gray-600 text-sm">{Object.entries(component.specs).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-gray-500 text-sm ml-1">10 avis</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-green-600 text-sm font-medium">EN STOCK</p>
                      </div>
                      <span className="text-xl font-bold text-cyan-600">${component.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default ComponentCategoryPage;
