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
              Sua jornada de bem-estar começa aqui
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Encontre o seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              equilíbrio
            </span>
            .
            <br />
            Cuide da sua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              mente
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma completa dedicada ao seu bem-estar mental, com artigos especializados, 
            meditações guiadas e acesso a terapeutas qualificados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Comece sua jornada
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explorar conteúdo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Artigos especializados</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Meditações guiadas</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Terapeutas qualificados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;