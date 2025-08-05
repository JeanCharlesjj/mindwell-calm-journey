import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Artigos Informativos",
      description: "Conteúdo especializado sobre saúde mental, bem-estar e autoconhecimento, escrito por profissionais qualificados.",
      features: ["Baseados em evidências científicas", "Temas variados e atuais", "Linguagem acessível"],
      buttonText: "Explorar artigos"
    },
    {
      icon: Headphones,
      title: "Meditações Guiadas",
      description: "Práticas de mindfulness e meditação para todos os níveis, desde iniciantes até praticantes avançados.",
      features: ["Sessões de 5 a 30 minutos", "Diferentes técnicas", "Narração profissional"],
      buttonText: "Começar a meditar"
    },
    {
      icon: Users,
      title: "Terapeutas Qualificados",
      description: "Conecte-se com psicólogos e terapeutas licenciados para sessões personalizadas e acompanhamento profissional.",
      features: ["Profissionais verificados", "Agendamento flexível", "Sessões online e presenciais"],
      buttonText: "Encontrar terapeuta"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Como podemos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ajudar você
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de recursos e suporte profissional 
            para sua jornada de bem-estar mental e emocional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button variant="ghost" className="group/btn w-full justify-between p-0 h-auto">
                  <span className="font-medium">{service.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Pronto para dar o primeiro passo em direção ao seu bem-estar?
          </p>
          <Button variant="hero" size="lg">
            Começar agora gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;