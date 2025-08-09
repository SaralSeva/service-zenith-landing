import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-saraleseva.jpg";
import { site } from "@/config/site";

const Hero = () => {
  return (
    <section id="home" className="bg-hero">
      <div className="container py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
        <div className="max-w-xl animate-enter">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            PAN, Passport, Tickets & Utilities — Done For You
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Skip queues and confusing paperwork. We handle end‑to‑end applications for you — fast, transparent, reliable.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href={`tel:${site.phone}`}>
              <Button variant="hero" size="lg">Call Now</Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg">Explore Services</Button>
            </a>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            <span>Contact: </span>
            <a href={`tel:${site.phone}`} className="text-primary">{site.phone}</a>
            <span className="mx-2">•</span>
            <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a>
          </div>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Citizen services assistance for PAN, Passport, Tickets and Utilities" className="w-full rounded-xl border shadow-[var(--shadow-elevated)] animate-enter" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
