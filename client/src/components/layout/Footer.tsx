import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Printer, 
  Mail 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Petra Foam</h3>
            <p className="opacity-80 mb-6">
              Leading provider of thermal insulation solutions in the region with a focus on quality and energy efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#xps" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  XPS Insulation
                </Link>
              </li>
              <li>
                <Link href="/products#eps" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  EPS Insulation
                </Link>
              </li>
              <li>
                <Link href="/products#specifications" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  Technical Specifications
                </Link>
              </li>
              <li>
                <Link href="/products#guides" className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  Installation Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span className="opacity-80">Jordan Mountains Intermediate Industries co. ltd.</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="opacity-80">+962 (6) 471 1780</span>
              </li>
              <li className="flex items-center">
                <Printer className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="opacity-80">+962 (6) 471 1708</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="opacity-80">info@petra-foam.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white border-opacity-20 my-6" />
        
        <div className="text-center opacity-70">
          <p>&copy; {new Date().getFullYear()} Petra Foam - Jordan Mountains Intermediate Industries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
