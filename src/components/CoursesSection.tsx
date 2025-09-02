import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCourses } from '@/hooks/use-courses';
import { BookOpen, ArrowRight, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const categories = [
  'Todos',
  'Desenvolvimento Frontend',
  'Desenvolvimento Backend',
  'Design UI/UX',
  'Mobile',
  'Data Science',
  'DevOps'
];

export function CoursesSection() {
  const { courses } = useCourses();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCourses = filteredCourses.slice(0, 6);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
            <BookOpen className="h-3 w-3 mr-1" />
            Catálogo completo
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha seu
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              próximo desafio
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cursos cuidadosamente criados por especialistas da indústria, 
            com projetos práticos e metodologia comprovada
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {featuredCourses.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="bg-muted/30 rounded-2xl p-12 max-w-md mx-auto border border-border/50">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Filter className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Nenhum curso encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os filtros ou termo de busca
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchTerm('');
                }}
              >
                Limpar filtros
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        )}

        {/* View All Courses Button */}
        {courses.length > 6 && (
          <div className="text-center animate-fade-in">
            <Button 
              variant="outline" 
              size="lg" 
              className="group text-lg px-8 py-4 border-primary/20 hover:border-primary/40"
            >
              Ver todos os cursos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}