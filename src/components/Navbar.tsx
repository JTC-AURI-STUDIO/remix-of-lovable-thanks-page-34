import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center ml-4 md:ml-0">
              <span className="text-2xl font-bold tracking-tighter text-secondary">
                LOVABLE JTC
              </span>
            </div>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <a href="#" className="text-gray-600 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">New Arrivals</a>
              <a href="#" className="text-gray-600 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Shop All</a>
              <a href="#" className="text-gray-600 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Collections</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-secondary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-secondary transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-secondary transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-secondary hover:bg-gray-50">New Arrivals</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-secondary hover:bg-gray-50">Shop All</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-secondary hover:bg-gray-50">Collections</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;