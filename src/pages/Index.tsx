import { Header } from '@/components/Header';
import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { useCourses } from '@/hooks/use-courses';
import { GraduationCap, BookOpen, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const { courses } = useCourses();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-80"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-background/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Aprenda com os
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Melhores</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforme sua carreira com cursos online de alta qualidade, 
              criados por especialistas da indústria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Explorar Cursos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{courses.length}+</div>
              <div className="text-muted-foreground">Cursos Disponíveis</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {courses.reduce((acc, course) => acc + course.studentsCount, 0).toLocaleString()}+
              </div>
              <div className="text-muted-foreground">Estudantes Ativos</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Instrutores Especialistas</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {(courses.reduce((acc, course) => acc + course.rating, 0) / courses.length).toFixed(1)}
              </div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cursos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa seleção cuidadosamente curada de cursos para acelerar sua carreira
            </p>
          </div>

          {courses.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-muted/30 rounded-lg p-12 max-w-md mx-auto">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum curso disponível
                </h3>
                <p className="text-muted-foreground">
                  Os cursos aparecerão aqui quando forem adicionados.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já transformaram suas carreiras
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Começar Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;