import { Sparkles, GraduationCap, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Assist",
    subtitle: "AI Management System & Compliance Chatbots",
    description:
      "L1 and L2 support for everyday AI questions and deep policy compliance. Your teams get instant answers powered by internal policies and frameworks.",
    link: "#assist",
  },
  {
    icon: GraduationCap,
    title: "Educate",
    subtitle: "Role-based courses and workshops",
    description:
      "Tailored learning journeys for leaders, managers, and technical teams. From strategic decisions to hands-on implementation, everyone gets the training they need.",
    link: "#learning",
  },
  {
    icon: TrendingUp,
    title: "Stay Ahead",
    subtitle: "Weekly newsletter & research papers",
    description:
      "Market scans, regulatory updates, and free research papers. Keep your organization informed on AI governance, compliance, and emerging best practices.",
    link: "#insights",
  },
];

const ThreePillars = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            One platform. Three pillars.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Assist every employee, educate every role, and keep your org ahead of AI change.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary transition-smooth hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-accent-light">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {pillar.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  <a
                    href={pillar.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
