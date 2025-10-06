import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="container mx-auto max-w-5xl animate-on-scroll">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="/images/desk-workspace.jpeg"
              alt="Shimon's workspace"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 inline-block">
              <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                1 of 1
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              That gets <span className="text-accent">shit done</span> 
            </h2>
            <p className="text-white mb-4">
            I'm Shimon, 6+ years in the IT game with a solid networking backround that was inhanced with system & pc skills along the way, 
            </p>
            <p className="text-white mb-6">
              Being real, my abillity might be quick adaptability to new tech & enviorments which is important in growing teams & companies. 
              AI AI AI AI AI
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="text-accent hover:underline flex items-center gap-2 font-medium"
              >
                What have you done?
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}