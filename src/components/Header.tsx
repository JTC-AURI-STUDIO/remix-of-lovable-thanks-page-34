import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent italic">
            LOVABLE JTC
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors italic hover:not-italic">COLEÇÕES</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors italic hover:not-italic">PROMOÇÕES</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors italic hover:not-italic">SOBRE NÓS</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
              2
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};