import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16 md:pt-20"
    >
      <div className="container mx-auto max-w-5xl animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full inline-flex items-center">
            Limited edition
            <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.25rem', width: '1.25rem', marginLeft: '0.5rem' }} />
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-poppins leading-tight">
          Need a good <span className="text-accent">IT guy?</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          Good is a big word, but I will try to make your ( IT ) life better. 
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          VSL
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-accent text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Ok, let's talk
          </a>
          <a
            href="#experience"
            className="bg-secondary px-6 py-3 rounded-lg hover:bg-secondary/70 transition-colors"
          >
            Show me more
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" onClick={handleScrollDown} className="text-accent">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
}
