import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-soft min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Conecte-se com especialistas de todo o mundo
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Terapia online{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              acessível
            </span>
            , no seu tempo e de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              qualquer lugar
            </span>{" "}
            do mundo.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Conecte-se com psicólogos experientes e dê o primeiro passo para o seu bem-estar. 
            Sua jornada começa aqui.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button variant="hero" size="xl" className="group">
              Encontrar Meu Psicólogo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;