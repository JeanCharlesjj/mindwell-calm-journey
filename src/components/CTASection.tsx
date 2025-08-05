import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background decoration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl opacity-10 blur-3xl"></div>
            
            <div className="relative bg-gradient-soft rounded-3xl p-12 md:p-16 border border-border/50">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">
                  Milhares já encontraram seu bem-estar
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Pronto para cuidar da sua{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  saúde mental
                </span>?
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Dê o primeiro passo para uma vida mais equilibrada. 
                Conecte-se com profissionais qualificados hoje mesmo.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center mb-8">
                <Button variant="hero" size="xl" className="group">
                  Encontrar Meu Psicólogo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust elements */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Cancele a qualquer momento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;