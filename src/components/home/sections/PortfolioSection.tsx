import React from 'react';

    const PortfolioSection = () => {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Présentation du projet
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contexte et objectifs du carrousel</h3>
              <p className="text-gray-300">
                Ce carrousel a pour objectif de présenter de manière dynamique et attrayante les différentes configurations de PC que nous proposons. Il permet aux utilisateurs de visualiser rapidement nos réalisations et de découvrir la diversité de nos offres.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Public cible et utilisation prévue</h3>
              <p className="text-gray-300">
                Le carrousel est destiné à tous les visiteurs de notre site, qu'ils soient des gamers, des professionnels ou des particuliers. Il est conçu pour être facilement navigable et informatif, permettant à chacun de trouver rapidement les configurations qui correspondent à leurs besoins.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Spécifications techniques</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <span className="font-medium">Type de carrousel:</span> Horizontal
                </li>
                <li>
                  <span className="font-medium">Nombre d'éléments à afficher simultanément:</span> 2
                </li>
                 <li>
                  <span className="font-medium">Formats d'images acceptés:</span> .jpg, .jpeg, .png
                </li>
                <li>
                  <span className="font-medium">Résolutions d'images requises:</span> 1200x628px, 640x640px, 720x1080px
                </li>
                <li>
                  <span className="font-medium">Taille maximale des fichiers:</span> Jusqu'à 100 Mo par image
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Fonctionnalités</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Navigation automatique et manuelle</li>
                <li>Options de défilement (nombre d'éléments à faire défiler)</li>
                <li>Fonction de boucle (retour au début après le dernier élément)</li>
                <li>Responsive design (adaptation aux différentes tailles d'écran)</li>
                <li>Accessibilité (navigation au clavier)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contraintes et exigences</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Compatibilité avec les navigateurs cibles</li>
                <li>Performance et temps de chargement optimisés</li>
                <li>Sécurité des données (si applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      );
    };

    export default PortfolioSection;
