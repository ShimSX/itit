import { projects } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto max-w-5xl animate-on-scroll">
        <div className="mb-4 inline-block">
          <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full inline-flex items-center">
            Highlights
            <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.25rem', width: '1.25rem', marginLeft: '0.5rem' }} />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-background/50 rounded-full"
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
