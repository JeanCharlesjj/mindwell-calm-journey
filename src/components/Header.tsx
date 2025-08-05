import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">MindWell</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#artigos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Artigos
            </a>
            <a href="#meditacoes" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Meditações
            </a>
            <a href="#terapeutas" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Terapeutas
            </a>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#artigos" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Artigos
              </a>
              <a 
                href="#meditacoes" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Meditações
              </a>
              <a 
                href="#terapeutas" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Terapeutas
              </a>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;