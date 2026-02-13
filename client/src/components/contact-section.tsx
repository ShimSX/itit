import { Phone, Mail, Globe } from "lucide-react";
import { Icon } from "@/lib/icon";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-3 glass-pill">
            <span>Ready to Start?</span>
            <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.1rem', width: '1.1rem' }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">Let’s talk</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you’re hiring or need dependable IT support, I’m happy to talk. We’ll figure out fit fast
            and keep it simple.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Open to full-time roles and contract work. Flexible on arrangements and happy to discuss your needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href="tel:+972549107579"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-accent/10 rounded-2xl transition-all group border border-white/10 hover:border-accent/30"
                  >
                    <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Phone className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Call Me</h4>
                      <p className="text-accent font-semibold">054-910-7579</p>
                    </div>
                  </a>

                  <a
                    href="mailto:Shimonshnd@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-accent/10 rounded-2xl transition-all group border border-white/10 hover:border-accent/30"
                  >
                    <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Mail className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Email Me</h4>
                      <p className="text-accent font-semibold">Shimonshnd@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Connect Online</h4>
                      <div className="flex gap-3">
                        <a
                          href="https://www.linkedin.com/in/shimon-shnaider-8537a4217/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="LinkedIn"
                        >
                          <Icon.LinkedIn className="h-5 w-5" />
                        </a>
                        <a
                          href="https://github.com/ShimSX"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="GitHub"
                        >
                          <Icon.GitHub className="h-5 w-5" />
                        </a>
                        <a
                          href="https://wa.me/+972549107579"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="WhatsApp"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl border border-accent/20">
                  <h4 className="text-2xl font-display font-semibold mb-4">
                    Need to <span className="text-accent">talk first?</span>
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Cool. Call me or WhatsApp. We can chat about what's going on and see if it makes sense to work together.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+972549107579"
                      className="block w-full bg-accent text-primary-foreground font-semibold px-6 py-4 rounded-full hover:bg-accent/90 transition-colors shadow-[0_20px_40px_-30px_rgba(246,198,85,0.9)]"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/+972549107579"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full hover:bg-white/10 transition-colors font-medium"
                    >
                      WhatsApp
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
