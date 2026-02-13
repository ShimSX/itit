import { CheckCircle, Zap, Shield, Clock, TrendingUp, Users } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fixes things fast",
      description: "Diagnose the root cause, solve it, and document the fix so it stays fixed.",
      stat: "40%"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Handles real companies",
      description: "Experience supporting 500+ users across Microsoft 365, Azure, security, and networking.",
      stat: "500+"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Keeps the network stable",
      description: "Uptime matters. I focus on monitoring, prevention, and quick recovery.",
      stat: "99.9%"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Stays current",
      description: "Always learning new tools and workflows so your stack doesn’t fall behind.",
      stat: "6+ yrs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "People-first support",
      description: "Clear communication and respectful help for technical and non-technical users.",
      stat: "95%"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Gets it done",
      description: "Hands-on work across 1000+ tickets, projects, and upgrades.",
      stat: "1000+"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="mb-6 inline-flex items-center gap-3 glass-pill">
          <span>Why Choose Me</span>
          <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.1rem', width: '1.1rem' }} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
          Why <span className="text-accent">hire me</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          Short version: I’m dependable, I communicate clearly, and I fix problems the right way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-accent/30 transition-colors">
                  <div className="text-accent">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <span className="text-accent font-bold">{benefit.stat}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Reference-style note
            </h3>
            <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wide">Replace with real contact</p>
            <p className="text-muted-foreground mb-6">
              “Steady, reliable, and easy to work with. He closed tickets fast, documented fixes, and kept
              everyone updated without drama.”
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-accent text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors shadow-[0_20px_40px_-30px_rgba(246,198,85,0.9)]"
              >
                Book a quick intro
              </a>
              <a
                href="tel:+972549107579"
                className="bg-white/5 border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
