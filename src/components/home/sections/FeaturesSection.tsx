import React from 'react';
    import { Cpu, Award, Wrench, Clock, CheckCircle, Rocket, Shield } from 'lucide-react';
    import FeatureCard from '../ui/FeatureCard';

    const features = [
      {
        icon: <Cpu className="w-8 h-8" />,
        title: "Configuration Sur Mesure",
        description: "Créez votre PC idéal avec notre outil de configuration intelligent"
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Composants Premium",
        description: "Une sélection des meilleures marques et composants du marché"
      },
      {
        icon: <Wrench className="w-8 h-8" />,
        title: "Compatibilité Garantie",
        description: "Vérification automatique de la compatibilité des composants"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Support Expert",
        description: "Une équipe d'experts à votre service pour vous conseiller"
      }
    ];

    const FeaturesSection = () => {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-800 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir PC Builder Pro ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      );
    };

    export default FeaturesSection;
