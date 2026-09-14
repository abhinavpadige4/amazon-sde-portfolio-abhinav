export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Abhinav. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://linkedin.com/in/abhinav" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/abhinavpadige4" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}