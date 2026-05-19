import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-dark mb-6">À Propos de Chez Deutch</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Votre destination gastronomique d'exception au cœur de Douala, alliant saveurs authentiques, 
            ambiance lounge raffinée et une terrasse parisienne unique pour des moments inoubliables.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Notre Mission</h2>
            <p className="text-secondary leading-relaxed">
              Chez Deutch s'est donné pour mission de redéfinir l'expérience culinaire à Douala. 
              Nous proposons une cuisine fusion qui célèbre les produits du terroir camerounais tout en explorant des saveurs internationales. 
              Que ce soit pour un déjeuner d'affaires, un dîner en amoureux ou une soirée entre amis, nous garantissons un service premium et une ambiance "Good Vibes Only".
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Target className="text-primary h-8 w-8" />
                <h4 className="font-bold">Excellence</h4>
                <p className="text-xs text-secondary">Offrir une qualité constante dans l'assiette et dans le service.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <h4 className="font-bold">Hospitalité</h4>
                <p className="text-xs text-secondary">Garantir un accueil chaleureux et une expérience mémorable.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 border-dashed">
            <h3 className="text-xl font-bold mb-6 text-secondary-dark">Nos Services</h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                "Spécialités Braisées (Poulet, Poisson, Porc)",
                "Cuisine Internationale (Pizzas, Riz sauté, Burgers)",
                "Service Traiteur pour vos événements",
                "Terrasse Parisienne à Bonamoussadi",
                "Espace Lounge & VIP",
                "Soirées Karaoké & Musique Live",
                "Organisation d'anniversaires et fêtes privées",
                "Cocktails & Boissons Premium"
              ].map(item => (
                <li key={item} className="flex items-center text-sm text-secondary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-10 text-center bg-primary p-16 rounded-[2rem] text-white">
        <h2 className="text-3xl font-bold mb-6">Envie de vivre l'expérience Chez Deutch ?</h2>
        <p className="text-primary-light mb-8 max-w-2xl mx-auto">
          Réservez votre table ou commandez vos plats préférés dès maintenant. 
          Notre équipe est à votre disposition pour faire de votre visite un moment exceptionnel.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Réserver une table
        </button>
      </section>
    </div>
  );
};

export default About;
