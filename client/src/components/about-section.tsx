import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <img
              src="/images/desk-workspace.jpeg"
              alt="Shimon's workspace"
              className="rounded-3xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] w-full h-auto object-cover border border-white/10"
            />
          </div>
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="mb-6">
              <span className="glass-pill">1 of 1</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
              That is <span className="text-accent">great?</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm Shimon, 6+ years in the IT game with a solid networking backround that was inhanced with system & pc skills along the way,
            </p>
            <p className="text-muted-foreground mb-6">
              Being real, my abillity might be quick adaptability to new tech & enviorments which is important in growing teams & companies.
              AI AI AI AI AI
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="text-accent hover:text-foreground flex items-center gap-2 font-medium"
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
