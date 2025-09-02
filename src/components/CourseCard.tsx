import { Course } from '@/types/course';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock, Edit, Trash2 } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  isAdmin?: boolean;
  onEdit?: (course: Course) => void;
  onDelete?: (courseId: string) => void;
}

export function CourseCard({ course, isAdmin = false, onEdit, onDelete }: CourseCardProps) {
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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card border-border">
      <CardHeader className="p-0">
        <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getLevelColor(course.level)}>
              {course.level}
            </Badge>
          </div>
          {isAdmin && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onEdit?.(course)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="destructive"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onDelete?.(course.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">por {course.instructor}</p>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {course.description}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.studentsCount}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>

          <Badge variant="secondary" className="w-fit">
            {course.category}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-primary">
            R$ {course.price.toFixed(2)}
          </div>
          {!isAdmin && (
            <Button variant="hero" className="px-6">
              Inscrever-se
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}