import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/logo-saraleseva.png";
import { site } from "@/config/site";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold" aria-label={site.name}>
          <img src={logoUrl} alt={`${site.name} logo`} className="h-6 w-6 rounded-md shadow-sm" loading="eager" />
          <span>{site.name}</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors">Time Savings</a>
          <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone}`} aria-label="Call now" className="hidden sm:inline">
            <Button variant="outline" size="sm">Call {site.phone}</Button>
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email us">
            <Button variant="hero" size="sm">Email</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
