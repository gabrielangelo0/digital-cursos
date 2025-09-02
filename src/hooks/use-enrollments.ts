import { useState, useEffect } from 'react';

const ENROLLMENT_STORAGE_KEY = 'platform-enrollments';

interface Enrollment {
  courseId: string;
  enrolledAt: Date;
  progress: number;
}

export function useEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);

  useEffect(() => {
    const storedEnrollments = localStorage.getItem(ENROLLMENT_STORAGE_KEY);
    if (storedEnrollments) {
      const parsed = JSON.parse(storedEnrollments);
      // Convert date strings back to Date objects
      const enrollmentsWithDates = parsed.map((enrollment: any) => ({
        ...enrollment,
        enrolledAt: new Date(enrollment.enrolledAt)
      }));
      setEnrollments(enrollmentsWithDates);
    }
  }, []);

  const saveEnrollments = (newEnrollments: Enrollment[]) => {
    setEnrollments(newEnrollments);
    localStorage.setItem(ENROLLMENT_STORAGE_KEY, JSON.stringify(newEnrollments));
  };

  const enrollInCourse = (courseId: string) => {
    const existingEnrollment = enrollments.find(e => e.courseId === courseId);
    if (existingEnrollment) return; // Already enrolled

    const newEnrollment: Enrollment = {
      courseId,
      enrolledAt: new Date(),
      progress: 0
    };

    const updatedEnrollments = [...enrollments, newEnrollment];
    saveEnrollments(updatedEnrollments);
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(enrollment => enrollment.courseId === courseId);
  };

  const getEnrollment = (courseId: string) => {
    return enrollments.find(enrollment => enrollment.courseId === courseId);
  };

  const updateProgress = (courseId: string, progress: number) => {
    const updatedEnrollments = enrollments.map(enrollment =>
      enrollment.courseId === courseId
        ? { ...enrollment, progress }
        : enrollment
    );
    saveEnrollments(updatedEnrollments);
  };

  return {
    enrollments,
    enrollInCourse,
    isEnrolled,
    getEnrollment,
    updateProgress
  };
}