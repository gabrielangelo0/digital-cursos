import { useState, useEffect } from 'react';
import { Course, CourseFormData } from '@/types/course';

const STORAGE_KEY = 'platform-courses';

// Mock data inicial
const initialCourses: Course[] = [
  {
    id: '1',
    title: 'React Avançado com TypeScript',
    description: 'Domine React com TypeScript, hooks avançados, context API e performance optimization.',
    instructor: 'Ana Silva',
    duration: '40 horas',
    price: 299.90,
    image: '/placeholder.svg',
    category: 'Desenvolvimento Frontend',
    level: 'Avançado',
    rating: 4.8,
    studentsCount: 1247,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Node.js e Express Completo',
    description: 'Aprenda a criar APIs REST robustas com Node.js, Express e MongoDB.',
    instructor: 'Carlos Santos',
    duration: '35 horas',
    price: 249.90,
    image: '/placeholder.svg',
    category: 'Desenvolvimento Backend',
    level: 'Intermediário',
    rating: 4.6,
    studentsCount: 892,
    createdAt: new Date('2024-02-01')
  },
  {
    id: '3',
    title: 'Design System com Figma',
    description: 'Crie design systems consistentes e escaláveis usando Figma e componentes reutilizáveis.',
    instructor: 'Maria Costa',
    duration: '25 horas',
    price: 199.90,
    image: '/placeholder.svg',
    category: 'Design UI/UX',
    level: 'Iniciante',
    rating: 4.9,
    studentsCount: 567,
    createdAt: new Date('2024-01-30')
  }
];

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedCourses = localStorage.getItem(STORAGE_KEY);
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses(initialCourses);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCourses));
    }
  }, []);

  const saveCourses = (newCourses: Course[]) => {
    setCourses(newCourses);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCourses));
  };

  const addCourse = (courseData: CourseFormData) => {
    const newCourse: Course = {
      ...courseData,
      id: Date.now().toString(),
      rating: 0,
      studentsCount: 0,
      createdAt: new Date()
    };
    const updatedCourses = [...courses, newCourse];
    saveCourses(updatedCourses);
  };

  const updateCourse = (id: string, courseData: CourseFormData) => {
    const updatedCourses = courses.map(course =>
      course.id === id ? { ...course, ...courseData } : course
    );
    saveCourses(updatedCourses);
  };

  const deleteCourse = (id: string) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    saveCourses(updatedCourses);
  };

  const getCourseById = (id: string) => {
    return courses.find(course => course.id === id);
  };

  return {
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourseById
  };
}