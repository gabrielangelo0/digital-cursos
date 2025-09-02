import { BookOpen, Users, GraduationCap, Trophy, Target, Code, Zap } from 'lucide-react';
import { useCourses } from '@/hooks/use-courses';

const stats = [
  {
    icon: BookOpen,
    value: '50+',
    label: 'Cursos Disponíveis',
    color: 'text-blue-400'
  },
  {
    icon: Users,
    value: '10k+',
    label: 'Estudantes Ativos',
    color: 'text-green-400'
  },
  {
    icon: GraduationCap,
    value: '25+',
    label: 'Instrutores Expert',
    color: 'text-purple-400'
  },
  {
    icon: Trophy,
    value: '4.9',
    label: 'Avaliação Média',
    color: 'text-yellow-400'
  },
  {
    icon: Target,
    value: '95%',
    label: 'Taxa de Conclusão',
    color: 'text-red-400'
  },
  {
    icon: Code,
    value: '500+',
    label: 'Projetos Práticos',
    color: 'text-cyan-400'
  },
  {
    icon: Zap,
    value: '150h',
    label: 'Conteúdo Total',
    color: 'text-primary'
  }
];

export function StatsSection() {
  const { courses } = useCourses();

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Números que
            <span className="bg-gradient-primary bg-clip-text text-transparent"> impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma cresce cada dia mais, impactando milhares de vidas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Achievement Banner */}
        <div className="mt-16 bg-gradient-primary/10 border border-primary/20 rounded-2xl p-8 text-center backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Mais de <span className="text-primary">85%</span> dos nossos alunos
              </h3>
              <p className="text-muted-foreground">
                conseguem uma nova oportunidade de trabalho em até 6 meses
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-primary/20 rounded-full p-4">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}