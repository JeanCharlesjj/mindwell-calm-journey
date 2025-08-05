import { Shield, CheckCircle, Lock, Globe } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="py-12 bg-card/50 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Sessões Criptografadas
              </span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Psicólogos Verificados
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Confidencialidade Total
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Acesso Global
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;