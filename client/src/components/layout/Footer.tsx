import { Link } from "wouter";
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  MapPin, 
  Phone, 
  Printer, 
  Mail 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Petra Foam</h3>
            <p className="mb-6 text-gray-400">Leading provider of high-quality thermal insulation solutions in the Middle East.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-400 hover:text-white transition duration-300">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-gray-400 hover:text-white transition duration-300">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products#xps">
                  <a className="text-gray-400 hover:text-white transition duration-300">XPS Insulation</a>
                </Link>
              </li>
              <li>
                <Link href="/products#eps">
                  <a className="text-gray-400 hover:text-white transition duration-300">EPS Insulation</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-400 hover:text-white transition duration-300">Facade Systems</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-400 hover:text-white transition duration-300">Roof Insulation</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-400 hover:text-white transition duration-300">Floor Insulation</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1"><MapPin size={18} /></span>
                <span className="text-gray-400">Amman, Jordan</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1"><Phone size={18} /></span>
                <span className="text-gray-400">+962 (6) 471 1780</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1"><Printer size={18} /></span>
                <span className="text-gray-400">+962 (6) 471 1708</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1"><Mail size={18} /></span>
                <a href="mailto:info@petra-foam.com" className="text-gray-400 hover:text-white transition duration-300">
                  info@petra-foam.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Petra Foam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
