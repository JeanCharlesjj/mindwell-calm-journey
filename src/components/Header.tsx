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

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="hero" size="default">
              Agendar Sessão
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile CTA */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card">
            <Button variant="hero" size="default" className="w-full mx-6">
              Agendar Sessão
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;