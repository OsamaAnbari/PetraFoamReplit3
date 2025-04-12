import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import logoImage from "@/assets/logo.jpg";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo and Title - Left Side */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src={logoImage}
                alt="Petra Foam Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-primary font-bold text-2xl lg:text-3xl font-sans">
                Petra Foam
              </span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <div className="flex items-center">
              <Link 
                href="/"
                onClick={closeMenu}
                className={`font-medium px-4 ${isActive('/') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/products"
                onClick={closeMenu}
                className={`font-medium px-4 ${isActive('/products') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.products')}
              </Link>
              <Link 
                href="/projects"
                onClick={closeMenu}
                className={`font-medium px-4 ${isActive('/projects') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.projects')}
              </Link>
              <Link 
                href="/about"
                onClick={closeMenu}
                className={`font-medium px-4 ${isActive('/about') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/contact"
                onClick={closeMenu}
                className={`font-medium px-4 ${isActive('/contact') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Language Switcher and Mobile Menu - Right Side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={toggleMenu}
              className="block lg:hidden px-3 py-2 border rounded text-primary border-primary hover:text-blue-700 hover:border-blue-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                onClick={closeMenu}
                className={`block font-medium ${isActive('/') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/products"
                onClick={closeMenu}
                className={`block font-medium ${isActive('/products') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.products')}
              </Link>
              <Link 
                href="/projects"
                onClick={closeMenu}
                className={`block font-medium ${isActive('/projects') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.projects')}
              </Link>
              <Link 
                href="/about"
                onClick={closeMenu}
                className={`block font-medium ${isActive('/about') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/contact"
                onClick={closeMenu}
                className={`block font-medium ${isActive('/contact') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
