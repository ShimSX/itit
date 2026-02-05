import { Phone, Mail, Globe } from "lucide-react";
import { Icon } from "@/lib/icon";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="mb-6 inline-flex items-center gap-3 glass-pill">
          <span>Your IT guy</span>
          <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.1rem', width: '1.1rem' }} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-12">
          Let's <span className="text-accent">talk</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-10 glass-card rounded-3xl">
            <h3 className="text-xl font-bold mb-8 text-center"></h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Phone</h4>
                  <a
                    href="tel:+972549107579"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent font-medium transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    054-910-7579
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Email</h4>
                  <a
                    href="mailto:Shimonshnd@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent font-medium transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Shimonshnd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Social</h4>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://x.com/elonmusk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="Twitter/X"
                    >
                      <Icon.Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shimon-shnaider-8537a4217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Icon.LinkedIn className="h-6 w-6" />
                    </a>
                    <a
                      href="https://github.com/ShimSX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="GitHub"
                    >
                      <Icon.GitHub className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
