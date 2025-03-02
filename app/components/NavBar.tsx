import { Link } from 'react-router-dom';
import { ThemeToggle } from './ui/theme-toggle';

export function NavBar() {
  return (
    <nav className="py-4 px-6 bg-base border-b border-base">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-base">
          React Router
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-base transition-colors hover-text-primary">
            Home
          </Link>
          <Link to="/profile" className="text-base transition-colors hover-text-primary">
            Profile
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
