import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Solutions",
    href: "#solutions"
  }, {
    label: "Learning",
    href: "#learning"
  }, {
    label: "Insights",
    href: "#insights"
  }, {
    label: "Resources",
    href: "#resources"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background transition-smooth ${isScrolled ? "h-16 shadow-sm" : "h-18"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-semibold text-foreground">
              AI Literacy Labs  
            </a>
          </div>

          {/* Desktop Navigation */}
          

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="hero" size="sm" className="bg-violet-700 hover:bg-violet-600">
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            {navItems.map(item => <a key={item.label} href={item.href} className="block text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>)}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button variant="hero" size="sm">
                Book a demo
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navigation;