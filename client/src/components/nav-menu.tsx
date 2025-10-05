import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href") || "";
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-6 md:px-8 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <a href="#" className="text-xl font-bold font-poppins">
        <span className="text-accent">Shimon</span> <span className="text-foreground">Shnaider</span>
      </a>
      <nav className="flex items-center">
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#about"
              onClick={handleNavClick}
              className="hover:text-accent transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={handleNavClick}
              className="hover:text-accent transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={handleNavClick}
              className="hover:text-accent transition-colors"
            >
              "Skills"
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="hover:text-accent transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        
        <a 
          href="tel:+972549107579" 
          className="hidden md:flex ml-6 bg-accent text-primary-foreground p-2 rounded-full hover:bg-accent/80 transition-colors"
          aria-label="Call Shimon"
        >
          <Phone className="h-5 w-5" />
        </a>
        
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-secondary p-4 shadow-lg animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#about"
                onClick={handleNavClick}
                className="block px-4 py-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={handleNavClick}
                className="block px-4 py-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleNavClick}
                className="block px-4 py-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block px-4 py-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="mt-2">
              <a
                href="tel:+972549107579"
                className="flex items-center gap-2 px-4 py-3 bg-accent text-primary-foreground rounded-lg font-medium"
              >
                <Phone className="h-4 w-4" />
                Call Me (054-910-7579)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
