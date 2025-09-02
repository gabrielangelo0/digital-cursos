import { useParams, useNavigate } from 'react-router-dom';
import { useCourses } from '@/hooks/use-courses';
import { useEnrollments } from '@/hooks/use-enrollments';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Clock, ArrowLeft, CheckCircle, PlayCircle, Award, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCourseById } = useCourses();
  const { enrollments, enrollInCourse, isEnrolled } = useEnrollments();
  const { toast } = useToast();
  
  const course = id ? getCourseById(id) : null;
  const isUserEnrolled = course ? isEnrolled(course.id) : false;

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Curso não encontrado</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    enrollInCourse(course.id);
    toast({
      title: "Inscrição realizada!",
      description: `Você foi inscrito no curso "${course.title}".`,
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediário':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Avançado':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Button 
                onClick={() => navigate('/')} 
                variant="ghost" 
                className="text-foreground/70 hover:text-foreground mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos cursos
              </Button>
              
              <div className="space-y-4">
                <Badge className={`${getLevelColor(course.level)} backdrop-blur-sm`}>
                  {course.level}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {course.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>por {course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating.toFixed(1)} ({course.studentsCount} alunos)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Info */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Sobre o curso</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Este curso foi cuidadosamente desenvolvido para oferecer uma experiência completa de aprendizado. 
                    Através de projetos práticos e metodologia comprovada, você desenvolverá todas as habilidades 
                    necessárias para se destacar na área.
                  </p>
                  
                  <p>
                    Com {course.duration} de conteúdo premium, você terá acesso a:
                  </p>
                  
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Aulas teóricas e práticas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Projetos reais do mercado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Certificado de conclusão</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Suporte direto com o instrutor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Acesso vitalício ao conteúdo</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Instrutor</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {course.instructor.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{course.instructor}</h4>
                    <p className="text-sm text-muted-foreground">
                      Especialista em {course.category} com mais de 10 anos de experiência
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 sticky top-6">
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      R$ {course.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ou 12x de R$ {(course.price / 12).toFixed(2)}
                    </div>
                  </div>

                  {isUserEnrolled ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-2 text-primary">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Você já está inscrito</span>
                      </div>
                      <Button variant="hero" className="w-full" size="lg">
                        <PlayCircle className="h-5 w-5 mr-2" />
                        Continuar curso
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="hero" 
                      className="w-full" 
                      size="lg"
                      onClick={handleEnroll}
                    >
                      Inscrever-se agora
                    </Button>
                  )}

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duração</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Nível</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Categoria</span>
                      <span className="font-medium">{course.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Alunos</span>
                      <span className="font-medium">{course.studentsCount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Estatísticas do curso</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">Avaliação</span>
                    </div>
                    <span className="font-medium">{course.rating}/5.0</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Inscritos</span>
                    </div>
                    <span className="font-medium">{course.studentsCount + (isUserEnrolled ? 1 : 0)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Criado em</span>
                    </div>
                    <span className="font-medium">
                      {new Date(course.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}