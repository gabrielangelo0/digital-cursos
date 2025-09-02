import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Settings } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">EduPlatform</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to="/"
            className={`text-foreground hover:text-primary transition-colors ${
              !isAdmin ? 'font-semibold' : ''
            }`}
          >
            Cursos
          </Link>
          <Link to="/admin">
            <Button
              variant={isAdmin ? 'default' : 'ghost'}
              size="sm"
              className="flex items-center space-x-2"
            >
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}