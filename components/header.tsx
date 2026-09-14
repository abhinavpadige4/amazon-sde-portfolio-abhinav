import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Abhinav
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Open main menu"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}