import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    plataforma: [
      { name: "Artigos", href: "#artigos" },
      { name: "Meditações", href: "#meditacoes" },
      { name: "Terapeutas", href: "#terapeutas" },
      { name: "Comunidade", href: "#comunidade" }
    ],
    empresa: [
      { name: "Sobre nós", href: "#sobre" },
      { name: "Nossa missão", href: "#missao" },
      { name: "Equipe", href: "#equipe" },
      { name: "Carreiras", href: "#carreiras" }
    ],
    suporte: [
      { name: "Central de ajuda", href: "#ajuda" },
      { name: "Contato", href: "#contato" },
      { name: "Status do sistema", href: "#status" },
      { name: "Feedback", href: "#feedback" }
    ],
    legal: [
      { name: "Política de privacidade", href: "#privacidade" },
      { name: "Termos de uso", href: "#termos" },
      { name: "Cookies", href: "#cookies" },
      { name: "LGPD", href: "#lgpd" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-lg">M</span>
                </div>
                <h3 className="text-2xl font-bold">MindWell</h3>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Dedicados ao seu bem-estar mental e emocional. Oferecemos recursos, 
                suporte profissional e uma comunidade acolhedora para sua jornada 
                de autoconhecimento.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <Mail className="w-4 h-4" />
                  <span>contato@mindwell.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-8888</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-3">
                {footerLinks.plataforma.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.suporte.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 MindWell. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>Feito com ❤️ para o seu bem-estar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;