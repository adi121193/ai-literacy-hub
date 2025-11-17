import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";
const HeroSection = () => {
  return <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                AI Literacy & Governance Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight">
              Raise your organization's AI IQ
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Chatbots, courses, and insights that make AI safe, compliant, and usable for everyone — from leaders to engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero">
                Book a demo
              </Button>
              <Button variant="hero" size="hero" className="bg-purple-700 hover:bg-purple-600">
                Book a workshop
              </Button>
              <Button variant="outline" size="hero">
                RAI Offerings
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Built for enterprises navigating EU AI Act, ISO 42001, and beyond.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-smooth hover:scale-[1.02]">
              <img src={heroDashboard} alt="AI Literacy Hub Dashboard" className="w-full h-auto" />
            </div>
            {/* Decorative gradient background */}
            <div className="absolute -z-10 top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;