import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Users } from 'lucide-react';
import heroImage from '@/assets/hero-modern.jpg';
import studentsImage from '@/assets/students-group.jpg';
import companiesImage from '@/assets/companies-banner.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <Users className="h-3 w-3 mr-1" />
                Mais de 10.000 estudantes ativas
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme sua
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  carreira em tech
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                A plataforma completa para você aprender programação do zero, 
                se especializar em tecnologias modernas e conseguir as melhores vagas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 group"
              >
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 group border-primary/20 hover:border-primary/40"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver demonstração
              </Button>
            </div>

            {/* Companies Section */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground font-medium">
                Empresas que contratam nossos alunos
              </p>
              <div className="relative">
                <img 
                  src={companiesImage} 
                  alt="Logos de empresas parceiras" 
                  className="h-12 w-auto opacity-60 hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-radial opacity-50 blur-3xl" />
              
              {/* Main Image */}
              <div className="relative bg-card/10 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden">
                <img 
                  src={studentsImage} 
                  alt="Estudantes aprendendo programação" 
                  className="w-full h-auto"
                />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-xs text-muted-foreground">Taxa de conclusão</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">4.9</div>
                      <div className="text-xs text-muted-foreground">Avaliação média</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">150+</div>
                      <div className="text-xs text-muted-foreground">Horas de conteúdo</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-elegant animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-glow" />
                  <span className="text-sm font-medium">2.847 online agora</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-elegant animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-sm">
                  <div className="font-semibold text-primary">+1.250</div>
                  <div className="text-muted-foreground">novos alunos este mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}