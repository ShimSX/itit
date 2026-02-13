import { MessageCircle, Heart, Repeat2 } from "lucide-react";

export default function LinkedInSection() {
  // TODO: Update these with Shimon's actual LinkedIn posts
  // Each post should have: content, date, likes, comments, shares (optional)
  const linkedinPosts = [
    {
      id: 1,
      content: "Just wrapped up another network upgrade. 500+ users, zero downtime during business hours. The satisfaction when everything works exactly as planned... chef's kiss. 🔥",
      date: "2024-01-15",
      likes: 45,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      content: "Someone asked me yesterday 'how do you stay calm when everything's breaking?' My answer: if you panic, nothing gets fixed. Breathe, diagnose, solve. Repeat. Simple as that.",
      date: "2024-01-10",
      likes: 67,
      comments: 12,
      shares: 5
    },
    {
      id: 3,
      content: "Pro tip: Instead of just fixing a computer, figure out WHY it broke. Fix that first. Suddenly you're not fixing the same thing 20 times. Wild concept, I know.",
      date: "2024-01-05",
      likes: 89,
      comments: 15,
      shares: 7
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="linkedin" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="mb-6 inline-flex items-center gap-3 glass-pill">
          <span>Recent Posts</span>
          <img src="/favicon-32x32.png" alt="favicon" style={{ height: '1.1rem', width: '1.1rem' }} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-12">
          What I <span className="text-accent">share</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {linkedinPosts.map((post) => (
              <div
                key={post.id}
                className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <p className="text-foreground mb-3 leading-relaxed">
                        {post.content}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(post.date)}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                        <Repeat2 className="h-5 w-5" />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.linkedin.com/in/shimon-shnaider-8537a4217/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-full hover:bg-[#0066A0] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}