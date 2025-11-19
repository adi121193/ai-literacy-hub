import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, ExternalLink, Podcast, BookOpen } from "lucide-react";
const recentIssues = [{
  title: "EU AI Act enforcement timeline – what changes in 2026",
  date: "Nov 10, 2025",
  tags: ["Regulation", "EU AI Act"]
}, {
  title: "ISO 42001 certification: A step-by-step guide",
  date: "Nov 3, 2025",
  tags: ["Compliance", "ISO 42001"]
}, {
  title: "Building responsible AI: Lessons from industry leaders",
  date: "Oct 27, 2025",
  tags: ["RAI", "Best Practices"]
}];
const researchPapers = [{
  title: "The Executive's Guide to AI Governance",
  abstract: "Comprehensive framework for building AI governance structures that balance innovation with risk management."
}, {
  title: "Implementing ISO 42001: A Practical Playbook",
  abstract: "Step-by-step guide to implementing AI management systems aligned with ISO 42001 standards."
}];
const Insights = () => {
  return <section id="insights" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-20">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Newsletter Pitch */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Stay Ahead</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">AI Governance Research & 
Market Scan</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay ahead of regulatory changes, emerging risks, and industry best practices. One thoughtful issue per week.
            </p>

            {/* Format Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-violet-700">
                <div className="p-2 rounded-lg bg-background">
                  <BookOpen className="w-5 h-5 text-primary -violet-700" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-slate-50">Newsletter</h4>
                  <p className="text-sm text-slate-50">Weekly digest in your inbox</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-violet-700">
                <div className="p-2 rounded-lg bg-background">
                  <Podcast className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-slate-50">Podcast</h4>
                  <p className="text-sm text-slate-50">Listen on-the-go</p>
                </div>
              </div>
            </div>

            {/* Email Subscribe */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="you@company.com" className="flex-1" />
              <Button variant="hero" size="lg" className="text-purple-700 bg-slate-50">
                Subscribe Free
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>

            <div className="pt-4 border-t border-border">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <FileText className="w-4 h-4 mr-2" />
                Explore Research Papers & Reports
              </Button>
            </div>
          </div>

          {/* Right - Recent Issues */}
          <div className="space-y-4">
            {recentIssues.map((issue, index) => <a key={index} href="#" className="block p-4 rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-sm">
                <h4 className="font-medium text-foreground mb-2 hover:text-primary">
                  {issue.title}
                </h4>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{issue.date}</span>
                  <span>·</span>
                  <div className="flex gap-2">
                    {issue.tags.map((tag, i) => <span key={i} className="px-2 py-0.5 rounded-full bg-accent-light text-primary text-xs">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </a>)}
          </div>
        </div>

        {/* Research Papers Section */}
        <div className="space-y-8 pt-12 border-t border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Research for deeper understanding
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use our papers to build internal AI literacy and governance frameworks.
            </p>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPapers.map((paper, index) => <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-smooth hover:shadow-lg">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-accent-light">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>

                  <h4 className="text-xl font-semibold text-foreground">
                    {paper.title}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read online
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Insights;