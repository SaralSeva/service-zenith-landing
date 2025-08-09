import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, Clock3, Headphones, FileCheck2, Train, Plane, Bus, Zap, Droplets, Flame, Globe2, IdCard } from "lucide-react";
import { useEffect } from "react";

const phone = "+91-9999999991";
const email = "abc@gmail.com";

const services = [
  { icon: IdCard, title: "PAN Card Application", desc: "Quick and hassle-free new/duplicate PAN applications" },
  { icon: Globe2, title: "Passport Application", desc: "End-to-end support for fresh and renewal passports" },
  { icon: Train, title: "Rail Tickets", desc: "Confirmed reservations with real-time availability" },
  { icon: Plane, title: "Air Tickets", desc: "Domestic and international bookings at best fares" },
  { icon: Bus, title: "Bus Tickets", desc: "Intercity and intracity bus booking assistance" },
  { icon: Zap, title: "New Electricity Connection", desc: "Documentation and application filing" },
  { icon: Droplets, title: "New Water Connection", desc: "Municipal application and paperwork" },
  { icon: Flame, title: "New Gas Connection", desc: "New LPG/PNG connections and KYC" },
];

const testimonials = [
  {
    name: "Rohit Kumar",
    text: "Got my passport application done in one visit. Extremely professional and fast!",
  },
  {
    name: "Neha Sharma",
    text: "They booked my train and bus tickets at great prices. Smooth experience.",
  },
  {
    name: "Aman Verma",
    text: "New electricity and gas connections handled end-to-end. Highly recommend.",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Citizen Services: PAN, Passport, Tickets, Utilities";
  }, []);

  return (
    <div>
      <header className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40 border-b">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            Service Center
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${phone}`} aria-label="Call now" className="hidden sm:inline">
              <Button variant="outline" size="sm">Call {phone}</Button>
            </a>
            <a href={`mailto:${email}`} aria-label="Email us">
              <Button variant="hero" size="sm">Email</Button>
            </a>
          </div>
        </nav>
      </header>

      <main id="home" className="bg-hero">
        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center animate-enter">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              PAN, Passport, Tickets & Utility Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              One-stop assistance for PAN/Passport applications, Rail/Air/Bus tickets,
              and new connections for Electricity, Water, and Gas.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href={`tel:${phone}`}>
                <Button variant="hero" size="lg">Call Now</Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg">Explore Services</Button>
              </a>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <span>Contact: </span>
              <a href={`tel:${phone}`} className="text-primary">{phone}</a>
              <span className="mx-2">•</span>
              <a href={`mailto:${email}`} className="text-primary">{email}</a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Our Services</h2>
            <p className="mt-3 text-muted-foreground">Fast, reliable and transparent processing</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon className="text-primary" aria-hidden />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="container py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Why Choose Us</h2>
              <p className="mt-3 text-muted-foreground">
                We combine modern tech with hands-on support to deliver a smooth experience.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Trusted & Transparent</p>
                    <p className="text-muted-foreground">Clear pricing and real-time updates for every request.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock3 className="mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Fast Turnaround</p>
                    <p className="text-muted-foreground">Optimized workflows to save you time and effort.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Headphones className="mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Dedicated Support</p>
                    <p className="text-muted-foreground">Friendly help over phone and email for every step.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck2 className="mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Documentation Assistance</p>
                    <p className="text-muted-foreground">We prepare and verify all necessary paperwork.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="hover-scale">
                <CardHeader className="pb-2"><CardTitle className="text-xl">End-to-End Handling</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">From forms to submissions, we handle it all for you.</CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader className="pb-2"><CardTitle className="text-xl">Competitive Pricing</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">Great value with zero hidden charges.</CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader className="pb-2"><CardTitle className="text-xl">Secure Processing</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">Your data is protected with best practices.</CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader className="pb-2"><CardTitle className="text-xl">Multi-channel Support</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">Phone and email support for quick help.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="container py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">What Customers Say</h2>
            <p className="mt-3 text-muted-foreground">Real feedback from our clients</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2"><CheckCircle2 className="text-primary" />{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{t.text}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="container py-16">
          <div className="max-w-3xl mx-auto text-center rounded-xl border bg-card p-8 md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to get started?</h2>
            <p className="mt-3 text-muted-foreground">Call or email us and we'll take care of the rest.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={`tel:${phone}`} className="w-full sm:w-auto"><Button variant="hero" size="lg">Call {phone}</Button></a>
              <a href={`mailto:${email}`} className="w-full sm:w-auto"><Button variant="outline" size="lg">Email {email}</Button></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Service Center. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${phone}`} className="hover:text-foreground">{phone}</a>
            <a href={`mailto:${email}`} className="hover:text-foreground">{email}</a>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Service Center",
        url: "/",
        telephone: phone,
        email: email,
        description: "PAN, Passport, Tickets & Utility Services",
        sameAs: []
      }) }} />
    </div>
  );
};

export default Index;
