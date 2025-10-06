import { ArrowDown, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.pause();
      setIsPlaying(false);
    }
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
        <p className="text-base md:text-lg text-white max-w-2xl mb-6">
          Watch this video for some basic / boring information!
        </p>
        <div className="mb-6 max-w-2xl relative">
          <video 
            ref={videoRef}
            className="w-full aspect-video rounded-lg shadow-lg cursor-pointer"
            preload="metadata"
            poster="/tmb.png"
            onClick={togglePlayPause}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleEnded}
          >
            <source src="/videos/vsl.mp4" type="video/mp4" />
            Your browser does not support the video tag. 
          </video>
          {!isPlaying && (
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-lg group"
            >
              <div className="bg-primary-foreground/90 hover:bg-primary-foreground rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform">
                <Play className="h-5 w-5 md:h-6 md:w-6 text-black ml-1" />
              </div>
            </button>
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