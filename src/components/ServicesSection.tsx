import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, VideoIcon } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Explore",
      description: "Navegue pelos perfis de psicólogos de diversas especialidades."
    },
    {
      number: "2", 
      icon: Calendar,
      title: "Agende",
      description: "Escolha o horário que melhor se adapta à sua rotina."
    },
    {
      number: "3",
      icon: VideoIcon,
      title: "Conecte-se",
      description: "Realize sua sessão por vídeo de forma segura e confidencial."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sua terapia em{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              3 passos simples
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Começar sua jornada de bem-estar nunca foi tão fácil. 
            Veja como funciona nosso processo simplificado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm text-center"
              >
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;