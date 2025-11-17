const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Trust Text */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by teams at
          </p>
          {/* Logo placeholders */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="text-2xl font-bold text-muted-foreground"
              >
                LOGO
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <blockquote className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                "This platform has become our internal AI helpdesk and training academy in one place."
              </p>
              <footer className="text-sm text-muted-foreground">
                — Head of Digital, Fortune 500 Client
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
