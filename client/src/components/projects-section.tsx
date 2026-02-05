import { projects } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="mb-6 inline-flex items-center gap-3 glass-pill">
          <span>The best?</span>
          <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.1rem', width: '1.1rem' }} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-12">
          Made up <span className="text-accent"> AI articles to make this seem legit</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden group hover:transform hover:translate-y-[-6px] transition-all duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
