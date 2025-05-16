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
                About me
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Building <span className="text-accent">robust</span> IT infrastructures
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm an IT specialist with a passion for maintaining complex networks and resolving technical challenges. With over 6 years of comprehensive experience across diverse technologies, I've developed expertise in Microsoft 365, network security, and multi-platform support.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical precision with proactive problem-solving to ensure seamless IT operations. I thrive in dynamic environments where I can leverage my skills to optimize systems and improve efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="text-accent hover:underline flex items-center gap-2 font-medium"
              >
                View my experience
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
