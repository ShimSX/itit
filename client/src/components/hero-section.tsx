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
      className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 h-64 w-64 bg-accent/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -left-24 h-64 w-64 bg-primary/20 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-6xl animate-fade-in">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight mb-5">
              Need a good{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-sky-300">
                IT guy?
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
              This one might be him
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="bg-accent text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors shadow-[0_20px_40px_-30px_rgba(246,198,85,0.9)]"
              >
                Ok, let's talk
              </a>
              <a
                href="#experience"
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Show me more
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-foreground font-semibold">6+ years</p>
                <p>Hands-on IT support</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-foreground font-semibold">Zero fluff</p>
                <p>Clear communication</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-foreground font-semibold">Fast response</p>
                <p>Urgent issues handled</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-4 md:p-6">
            <div className="relative overflow-hidden rounded-2xl">
              {!playing ? (
                <>
                  <img
                    src="/tmb.png"
                    alt="Video thumbnail"
                    className="w-full aspect-video object-cover cursor-pointer"
                    onClick={handlePlay}
                  />
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  >
                    <div className="bg-primary-foreground/90 hover:bg-primary-foreground rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 md:h-6 md:w-6 text-black ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube-nocookie.com/embed/4ZnP0bsVbMI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&playsinline=1&cc_load_policy=3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="flex items-center justify-between mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Intro video</span>
              <span>01:30</span>
            </div>
          </div>
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
