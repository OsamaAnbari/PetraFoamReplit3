import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[500px] flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.7)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {t('home.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products">
            <a className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              {t('nav.products')}
            </a>
          </Link>
          <Link href="/contact">
            <a className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              {t('nav.contact')}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
