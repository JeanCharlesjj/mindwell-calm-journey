import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Estudante de Psicologia",
      content: "O MindWell transformou minha rotina diária. As meditações guiadas me ajudam a começar o dia com mais clareza e os artigos são incrivelmente informativos.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Carlos Mendes",
      role: "Profissional de TI",
      content: "Encontrei o terapeuta perfeito através da plataforma. O processo foi simples e o suporte é excepcional. Recomendo para todos que buscam cuidar da saúde mental.",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Maria Santos",
      role: "Professora",
      content: "Como educadora, valorizo conteúdo de qualidade. O MindWell oferece artigos baseados em evidências que me ajudam tanto pessoalmente quanto profissionalmente.",
      rating: 5,
      avatar: "MS"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              usuários dizem
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Histórias reais de pessoas que encontraram equilíbrio e bem-estar 
            através do MindWell.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent opacity-60" />
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 text-accent fill-current" 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground text-sm">Avaliação média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground text-sm">Usuários ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground text-sm">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;