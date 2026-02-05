import { Check, Download } from "lucide-react";
import { experience } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="mb-6 inline-flex items-center gap-3 glass-pill">
          <span>The rarest</span>
          <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.1rem', width: '1.1rem' }} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-12">
          Work <span className="text-accent">Experience</span>
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {experience.map((job, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_2fr] gap-8 items-start"
            >
              <div>
                <div className="p-6 glass-card rounded-2xl h-full">
                  <h3 className="text-xl font-bold mb-2">{job.company}</h3>
                  <p className="text-accent font-medium mb-2">{job.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.period} {job.note && <em>| {job.note}</em>}
                  </p>
                </div>
              </div>
              <div>
                <ul className="space-y-3 text-muted-foreground">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/cv.pdf"
            className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-foreground px-6 py-3 rounded-full flex items-center gap-2"
            download
          >
            <Download className="h-5 w-5" />
            Download full CV
          </a>
        </div>
      </div>
    </section>
  );
}
