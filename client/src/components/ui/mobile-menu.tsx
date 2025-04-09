import { Link } from "wouter";
import { Transition } from "@/components/ui/transition";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="md:hidden bg-white py-4 px-4 shadow-inner">
        <div className="flex flex-col space-y-3">
          <Link 
            href="/" 
            className="text-primary font-heading font-medium py-2 px-4 rounded hover:bg-gray-100" 
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="text-primary font-heading font-medium py-2 px-4 rounded hover:bg-gray-100" 
            onClick={onClose}
          >
            Products
          </Link>
          <Link 
            href="/projects" 
            className="text-primary font-heading font-medium py-2 px-4 rounded hover:bg-gray-100" 
            onClick={onClose}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className="text-primary font-heading font-medium py-2 px-4 rounded hover:bg-gray-100" 
            onClick={onClose}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="text-primary font-heading font-medium py-2 px-4 rounded hover:bg-gray-100" 
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Transition>
  );
}

// Add a simple Transition component for animations
export const Transition = ({
  children,
  show = true,
  enter = "",
  enterFrom = "",
  enterTo = "",
  leave = "",
  leaveFrom = "",
  leaveTo = "",
}: {
  children: React.ReactNode;
  show?: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
}) => {
  if (!show) return null;

  return <div className={`${enter} ${enterFrom} ${enterTo} ${leave} ${leaveFrom} ${leaveTo}`}>{children}</div>;
};
