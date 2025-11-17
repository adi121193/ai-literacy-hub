import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveDemo = () => {
  return (
    <section id="assist" className="py-20 md:py-32 bg-soft-gray">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Chat Mockup */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="bg-soft-gray px-6 py-4 border-b border-border">
                <h4 className="font-semibold text-foreground">
                  AI Management System Query Chatbot
                </h4>
              </div>

              {/* Chat Content */}
              <div className="p-6 space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-accent-light rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Can I use public LLMs for customer data?
                    </p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] space-y-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      Based on your organization's AI policy:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">•</span>
                        <span>Only anonymized or aggregated data is allowed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">•</span>
                        <span>Customer PII must not be shared with external LLMs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Use approved internal models for sensitive data</span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <a
                        href="#"
                        className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                      >
                        View Policy 3.2 – Customer Data →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Value Bullets */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Assist
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
              Instant AI helpdesk for your teams
            </h3>

            <ul className="space-y-4">
              {[
                "L1: Everyday 'Can I use this?' questions",
                "L2: Deeper policy and compliance explanations",
                "Powered by your internal policies, tools, and frameworks",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button variant="outline" size="lg">
                See how it works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
