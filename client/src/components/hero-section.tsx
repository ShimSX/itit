import { ArrowDown, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

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
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-0"
    >
      <div className="container mx-auto max-w-5xl animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins leading-tight">
          Need a good <span className="text-accent">IT guy?</span>
        </h2>
        <p className="text-base md:text-lg text-white max-w-2xl mb-6">
          Watch this video for some basic / boring information!
        </p>
        <div className="mb-6 max-w-full md:max-w-2xl relative">
          {!playing ? (
            <>
              <img 
                src="/tmb.png"
                alt="Video thumbnail"
                className="w-full aspect-video rounded-lg shadow-lg object-cover cursor-pointer"
                onClick={handlePlay}
              />
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-lg group"
              >
                <div className="bg-primary-foreground/90 hover:bg-primary-foreground rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 md:h-6 md:w-6 text-black ml-1" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube-nocookie.com/embed/lbbJQcPY1ZM?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&playsinline=1&cc_load_policy=3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
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