import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

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
        <nav className="flex flex-wrap items-center justify-between py-3">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link href="/">
              <a className="text-primary font-bold text-2xl lg:text-3xl font-sans">
                <span className="text-amber-500">Petra</span> Foam
              </a>
            </Link>
          </div>
          
          <div className="block lg:hidden">
            <button 
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-blue-700 hover:border-blue-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden lg:block'} mt-2 lg:mt-0`}>
            <div className="lg:flex-grow text-center lg:text-left">
              <Link href="/">
                <a 
                  onClick={closeMenu}
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-8 font-medium ${isActive('/') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
                >
                  Home
                </a>
              </Link>
              <Link href="/products">
                <a 
                  onClick={closeMenu}
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-8 font-medium ${isActive('/products') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
                >
                  Products
                </a>
              </Link>
              <Link href="/projects">
                <a 
                  onClick={closeMenu}
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-8 font-medium ${isActive('/projects') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
                >
                  Projects
                </a>
              </Link>
              <Link href="/about">
                <a 
                  onClick={closeMenu}
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-8 font-medium ${isActive('/about') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
                >
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  onClick={closeMenu}
                  className={`block mt-4 lg:inline-block lg:mt-0 font-medium ${isActive('/contact') ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
                >
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/contact">
                <Button className="mt-4 lg:mt-0 bg-amber-500 hover:bg-amber-600 text-white" onClick={closeMenu}>
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
