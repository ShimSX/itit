import { Phone, Mail, Globe } from "lucide-react";
import { Icon } from "@/lib/icon";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto max-w-5xl animate-on-scroll">
        <div className="mb-4 inline-block">
          <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
            Get in Touch
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          Let's <span className="text-accent">Connect</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-secondary rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-8 text-center">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Phone</h4>
                  <a
                    href="tel:+972549107579"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent font-medium transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    054-910-7579
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Email</h4>
                  <a
                    href="mailto:Shimonshnd@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent font-medium transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Shimonshnd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Social</h4>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://x.com/elonmusk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/30 transition-all"
                      aria-label="Twitter/X"
                    >
                      <Icon.Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shimon-shnaider-8537a4217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/30 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Icon.LinkedIn className="h-6 w-6" />
                    </a>
                    <a
                      href="https://github.com/ShimSX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/30 transition-all"
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
