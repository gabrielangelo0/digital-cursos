export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  image: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  rating: number;
  studentsCount: number;
  createdAt: Date;
}

export interface CourseFormData {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  image: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
}