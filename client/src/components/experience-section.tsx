import { Check, Download } from "lucide-react";
import { experience } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto max-w-5xl animate-on-scroll">
        <div className="mb-4 inline-block">
          <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full inline-flex items-center">
            The rarest
            <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.25rem', width: '1.25rem', marginLeft: '0.5rem' }} />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          Work <span className="text-accent">Experience</span>
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="md:w-1/3">
                <div className="p-6 bg-secondary rounded-xl h-full">
                  <h3 className="text-xl font-bold mb-2">{job.company}</h3>
                  <p className="text-accent font-medium mb-2">{job.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.period} {job.note && <em>| {job.note}</em>}
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
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
            className="bg-secondary hover:bg-secondary/70 transition-all text-foreground px-6 py-3 rounded-lg flex items-center gap-2"
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
