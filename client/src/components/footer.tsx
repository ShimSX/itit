export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-semibold">
              <span className="text-accent">Shimon</span> <span className="text-foreground">Shnaider</span>
            </a>
            <p className="text-muted-foreground mt-2">Dedicated IT Professional</p>
          </div>

          <div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors text-sm uppercase tracking-wide">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-accent transition-colors text-sm uppercase tracking-wide">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-accent transition-colors text-sm uppercase tracking-wide">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors text-sm uppercase tracking-wide">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shimon Shnaider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
