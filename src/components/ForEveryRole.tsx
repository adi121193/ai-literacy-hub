import { Target, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
const roles = [{
  icon: Target,
  label: "Leaders",
  title: "Leaders",
  description: "Strategic AI decisions, risk visibility, and governance models.",
  bundles: [{
    type: "Chatbot",
    name: "Strategy Q&A"
  }, {
    type: "Course",
    name: "AI for Leaders"
  }, {
    type: "Workshop",
    name: "Leadership Lab"
  }],
  link: "#leaders"
}, {
  icon: Users,
  label: "Managers",
  title: "Managers",
  description: "Guardrails, RAI frameworks, and compliance guidance.",
  bundles: [{
    type: "Chatbot",
    name: "Policy Assistant"
  }, {
    type: "Course",
    name: "Managing AI Teams"
  }, {
    type: "Workshop",
    name: "Manager Bootcamp"
  }],
  link: "#managers"
}, {
  icon: Code,
  label: "Technical",
  title: "Technical",
  description: "Hands-on AI literacy, implementation, and best practices.",
  bundles: [{
    type: "Chatbot",
    name: "Tech Support"
  }, {
    type: "Course",
    name: "AI Engineering"
  }, {
    type: "Workshop",
    name: "Technical Deep Dive"
  }],
  link: "#technical"
}];
const ForEveryRole = () => {
  return <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Educate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Designed for every role
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored journeys for leaders, managers, and technical teams.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map(role => {
          const Icon = role.icon;
          return <div key={role.title} className="group bg-card rounded-2xl p-8 border border-border hover:border-primary transition-smooth hover:shadow-lg">
                {/* Label Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-primary text-xs font-medium mb-6">
                  <Icon className="w-3.5 h-3.5" />
                  {role.label}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>

                  {/* Bundles */}
                  <div className="space-y-2 pt-2">
                    {role.bundles.map((bundle, index) => <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">→</span>
                        <span className="text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {bundle.type}:
                          </span>{" "}
                          {bundle.name}
                        </span>
                      </div>)}
                  </div>

                  <div className="pt-4">
                    <Button variant="hero" size="default" className="w-full bg-purple-700 hover:bg-purple-600">
                      Book a workshop
                    </Button>
                  </div>

                  <a href={role.link} className="inline-flex items-center text-sm font-medium text-primary hover:underline pt-2">
                    View {role.title.toLowerCase()} journey →
                  </a>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ForEveryRole;