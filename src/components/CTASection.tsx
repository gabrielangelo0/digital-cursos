import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-gradient-secondary/50" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary-glow/30 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Star className="h-3 w-3 mr-1 fill-current" />
                4.9/5 de avaliação
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Users className="h-3 w-3 mr-1" />
                +10k estudantes
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="h-3 w-3 mr-1" />
                Certificado reconhecido
              </Badge>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Pronto para
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  transformar sua vida?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Junte-se a milhares de profissionais que já mudaram de carreira 
                com nossos cursos práticos e orientação especializada
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-10 py-4 group transform hover:scale-105 transition-all"
              >
                Começar minha jornada
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-4 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
              >
                Falar com consultor
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">7 dias</div>
                <div className="text-sm text-muted-foreground">Garantia de reembolso</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte disponível</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Vitalício</div>
                <div className="text-sm text-muted-foreground">Acesso aos cursos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}