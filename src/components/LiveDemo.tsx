import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const LiveDemo = () => {
  return (
    <section id="assist" className="py-20 md:py-32 bg-soft-gray">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Chat Mockup with Tabs */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="bg-soft-gray px-6 py-4 border-b border-border">
                <h4 className="font-semibold text-foreground">
                  Compliance Officer
                </h4>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="iso" className="w-full">
                <div className="border-b border-border px-6 pt-4">
                  <TabsList className="w-full justify-start bg-transparent h-auto p-0">
                    <TabsTrigger value="iso" className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      ISO 42001
                    </TabsTrigger>
                    <TabsTrigger value="euai" className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      EU AI Act
                    </TabsTrigger>
                    <TabsTrigger value="risk" className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                      Risk Classification
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* ISO 42001 Tab */}
                <TabsContent value="iso" className="p-6 space-y-4 mt-0">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-accent-light rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        What are the requirements for AI system documentation?
                      </p>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] space-y-3">
                      <p className="text-sm text-foreground leading-relaxed">
                        According to ISO 42001 requirements:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Document AI system architecture and design decisions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Maintain records of training data and model versions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Keep audit trails of system changes and updates</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <a
                          href="#"
                          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                        >
                          View ISO 42001 Section 7.2 →
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* EU AI Act Tab */}
                <TabsContent value="euai" className="p-6 space-y-4 mt-0">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-accent-light rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        Is our facial recognition system compliant?
                      </p>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] space-y-3">
                      <p className="text-sm text-foreground leading-relaxed">
                        Under the EU AI Act, facial recognition is high-risk:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-0.5">•</span>
                          <span>Requires conformity assessment before deployment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive mt-0.5">•</span>
                          <span>Must implement human oversight mechanisms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Complete risk management documentation needed</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <a
                          href="#"
                          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                        >
                          View EU AI Act Article 6 →
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Risk Classification Tab */}
                <TabsContent value="risk" className="p-6 space-y-4 mt-0">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-accent-light rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        How do we classify our customer support chatbot?
                      </p>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] space-y-3">
                      <p className="text-sm text-foreground leading-relaxed">
                        Based on your risk classification framework:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Limited risk - transparency obligations apply</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Users must be informed they're interacting with AI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Basic documentation and monitoring required</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <a
                          href="#"
                          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                        >
                          View Risk Assessment Matrix →
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
                "Everyday 'Can I use this?' questions",
                "Deeper policy and compliance explanations",
                "Powered by your standards and Laws, tools, and frameworks",
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
