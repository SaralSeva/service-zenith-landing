import { useEffect } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import ValueTime from "@/sections/ValueTime";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import ContactCTA from "@/sections/ContactCTA";
import Footer from "@/sections/Footer";
import { site } from "@/config/site";

const Index = () => {
  useEffect(() => {
    document.title = `${site.name} — PAN, Passport, Tickets, Utilities`;
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <ValueTime />
        <HowItWorks />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.name,
            url: site.domain,
            telephone: site.phone,
            email: site.email,
            description: "PAN, Passport, Tickets, Utilities & Ration Card Services",
            sameAs: []
          }),
        }}
      />
    </div>
  );
};

export default Index;
