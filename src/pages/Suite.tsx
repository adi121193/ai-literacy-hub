import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Github, ArrowRight } from "lucide-react";
const Suite = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                    Responsible AI Suite
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight">
                  Your complete Responsible AI suite.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  From agent frameworks to compliance analyzers, our offerings help you design, test, and govern AI systems with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="hero" className="bg-purple-700 hover:bg-purple-600">
                    Book a suite demo
                  </Button>
                  
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-12 aspect-square flex items-center justify-center bg-purple-200">
                  <div className="text-center space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      {["Toolkit", "Red Teaming", "Agent Framework", "Compliance Analyzer"].map(item => <div key={item} className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-sm font-medium">
                          {item}
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings at a glance */}
        <section className="py-20 md:py-32 bg-violet-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
                Offerings at a glance
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose what fits your current Responsible AI maturity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tool Kit Card */}
              <Card className="p-8 space-y-6 bg-background hover:shadow-lg transition-shadow">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 rounded-full">
                    Tooling
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  ResponsibleAI Tool Kit
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Open-source utilities for audits & checks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Plug into CI/CD and dev workflows.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for:</span> Eng & RAI teams
                </p>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="text-violet-700">
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Button>
                  <Button size="sm" className="bg-violet-600 hover:bg-violet-500">Book a demo</Button>
                </div>
              </Card>

              {/* Red Teaming Card */}
              <Card className="p-8 space-y-6 bg-background hover:shadow-lg transition-shadow">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-purple-100 text-purple-700 rounded-full">
                    Service
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  ResponsibleAI Red Teaming
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Scenario-based adversarial testing for AI systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Actionable mitigation reports.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for:</span> High-risk / regulated systems
                </p>
                <div className="pt-4">
                  <Button size="sm" className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500">Book a red teaming session</Button>
                </div>
              </Card>

              {/* Agent Framework Card */}
              <Card className="p-8 space-y-6 bg-background hover:shadow-lg transition-shadow">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-700 rounded-full">
                    Framework
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  ResponsibleAI Agent Framework
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Governed agent orchestration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Policy & guardrail aware agents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Full decision & action logging.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for:</span> Agentic workflows teams
                </p>
                <div className="pt-4">
                  <Button size="sm" className="bg-violet-700 hover:bg-violet-600">Book a demo</Button>
                </div>
              </Card>

              {/* Compliance Analyzer Card */}
              <Card className="p-8 space-y-6 bg-background hover:shadow-lg transition-shadow">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 rounded-full">
                    Platform
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Compliance Analyzer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Automated assessments vs EU AI Act, ISO 42001, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Org-wide & use-case scoring.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for:</span> Legal, DPO, Risk, Governance
                </p>
                <div className="pt-4">
                  <Button size="sm" className="bg-violet-700 hover:bg-violet-600">Explore Compliance Analyzer</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Deep Dive Sections */}
        {/* Tool Kit Deep Dive */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-12 aspect-square flex items-center justify-center bg-violet-100">
                <div className="text-sm font-mono text-muted-foreground space-y-2">
                  <div>$ rai-toolkit audit</div>
                  <div className="text-primary">✓ Checking bias metrics...</div>
                  <div className="text-primary">✓ Validating guardrails...</div>
                  <div className="text-primary">✓ Running policy checks...</div>
                </div>
              </div>
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 rounded-full">
                  ResponsibleAI Tool Kit
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Build with Responsible AI from day zero.
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Open-source foundation for RAI checks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Integrate into CI/CD for policy gates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Extend with your own policies & rules.</span>
                  </li>
                </ul>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" className="bg-purple-700 hover:bg-purple-600 text-slate-50">
                    <Github className="w-4 h-4" />
                    View GitHub
                  </Button>
                  <Button variant="link" className="gap-1 text-violet-600">
                    How to integrate
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Red Teaming Deep Dive */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-purple-100 text-purple-700 rounded-full">
                  ResponsibleAI Red Teaming
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Find failure modes before regulators do.
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Test for jailbreaks, prompt injection, bias & misuse.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Domain-specific scenarios aligned to your risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Structured findings + mitigation plan.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-purple-700 hover:bg-purple-600">Book a red teaming call</Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-destructive/10 to-orange-500/10 p-12 aspect-square flex items-center justify-center order-1 lg:order-2">
                <div className="w-full space-y-2">
                  <div className="h-8 bg-destructive/80 rounded" style={{
                  width: '90%'
                }}></div>
                  <div className="h-8 bg-destructive/60 rounded" style={{
                  width: '75%'
                }}></div>
                  <div className="h-8 bg-orange-500/60 rounded" style={{
                  width: '65%'
                }}></div>
                  <div className="h-8 bg-yellow-500/60 rounded" style={{
                  width: '45%'
                }}></div>
                  <div className="h-8 bg-green-500/60 rounded" style={{
                  width: '30%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Framework Deep Dive */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-primary/10 p-12 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute text-xs font-medium bg-background border border-border rounded-lg px-3 py-2 top-1/4 left-1/4">Agents</div>
                  <div className="absolute text-xs font-medium bg-background border border-border rounded-lg px-3 py-2 top-1/4 right-1/4">Policies</div>
                  <div className="absolute text-xs font-medium bg-background border border-border rounded-lg px-3 py-2 bottom-1/4 left-1/4">Guardrails</div>
                  <div className="absolute text-xs font-medium bg-background border border-border rounded-lg px-3 py-2 bottom-1/4 right-1/4">Logs</div>
                  <div className="text-sm font-semibold text-primary">Framework Core</div>
                </div>
              </div>
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-700 rounded-full">
                  ResponsibleAI Agent Framework
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Governed autonomy for agentic systems.
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Embed policies into agent planning & actions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Centralized observability & decision audit trail.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Works across LLM providers & tools.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-violet-600 hover:bg-violet-500">Talk about agent frameworks</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Suite;