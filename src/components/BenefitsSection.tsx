import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Shield, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Acesso Global",
      description: "Conecte-se com especialistas de todo o mundo, ampliando suas opções de tratamento."
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Sessões que se encaixam na sua agenda, disponíveis 24/7 para sua conveniência."
    },
    {
      icon: Shield,
      title: "Confidencialidade Garantida",
      description: "Uma plataforma segura e criptografada para suas conversas mais importantes."
    },
    {
      icon: Users,
      title: "Diversas Especialidades",
      description: "Encontre o profissional ideal para sua necessidade específica em nossa rede."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              MindWell
            </span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra os diferenciais que tornam nossa plataforma a escolha ideal 
            para sua jornada de bem-estar mental.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm text-center"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default BenefitsSection;