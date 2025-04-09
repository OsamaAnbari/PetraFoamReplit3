import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "@/components/ui/mobile-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-primary font-heading font-bold text-2xl md:text-3xl">PETRA FOAM</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`text-primary font-heading font-medium py-2 ${location === '/' ? 'border-b-3 border-accent' : 'hover:text-secondary'}`}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className={`text-primary font-heading font-medium py-2 ${location === '/products' ? 'border-b-3 border-accent' : 'hover:text-secondary'}`}
          >
            Products
          </Link>
          <Link 
            href="/projects" 
            className={`text-primary font-heading font-medium py-2 ${location === '/projects' ? 'border-b-3 border-accent' : 'hover:text-secondary'}`}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className={`text-primary font-heading font-medium py-2 ${location === '/about' ? 'border-b-3 border-accent' : 'hover:text-secondary'}`}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className={`text-primary font-heading font-medium py-2 ${location === '/contact' ? 'border-b-3 border-accent' : 'hover:text-secondary'}`}
          >
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
