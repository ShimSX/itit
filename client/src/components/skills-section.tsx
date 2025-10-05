import { Check } from "lucide-react";
import { coreSkills, techBadges, softSkills } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="container mx-auto max-w-5xl animate-on-scroll">
        <div className="mb-4 inline-block">
          <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full inline-flex items-center">
            Unique
            <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.25rem', width: '1.25rem', marginLeft: '0.5rem' }} />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          Technical <span className="text-accent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Skills Bars */}
          <div>
            <h3 className="text-xl font-bold mb-6">Core Competencies</h3>

            {coreSkills.map((skill, index) => (
              <div className="mb-6" key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-accent">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-background/60 rounded-full overflow-hidden">
                  <div
                    className="bg-accent h-full rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Technology Badges */}
          <div>
            <h3 className="text-xl font-bold mb-6">Technologies & Tools</h3>

            <div className="flex flex-wrap gap-3">
              {techBadges.map((badge, index) => (
                <span
                  key={index}
                  className="skill-badge px-4 py-2 bg-background rounded-full text-sm font-medium transition-all duration-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-6 mt-10">Soft Skills</h3>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <Check className="h-5 w-5 text-accent" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
