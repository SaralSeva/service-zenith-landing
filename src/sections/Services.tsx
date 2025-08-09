import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IdCard, Globe2, Train, Plane, Bus, Zap, Droplets, Flame, FileCheck2 } from "lucide-react";

const services = [
  { icon: IdCard, title: "PAN Card Application", desc: "Quick and hassle-free new/duplicate PAN applications" },
  { icon: FileCheck2, title: "Ration Card Application", desc: "Fresh and update requests with full documentation support" },
  { icon: Globe2, title: "Passport Application", desc: "End-to-end support for fresh and renewal passports" },
  { icon: Train, title: "Rail Tickets", desc: "Confirmed reservations with real-time availability" },
  { icon: Plane, title: "Air Tickets", desc: "Domestic and international bookings at best fares" },
  { icon: Bus, title: "Bus Tickets", desc: "Intercity and intracity bus booking assistance" },
  { icon: Zap, title: "New Electricity Connection", desc: "Documentation and application filing" },
  { icon: Droplets, title: "New Water Connection", desc: "Municipal application and paperwork" },
  { icon: Flame, title: "New Gas Connection", desc: "New LPG/PNG connections and KYC" },
];

const Services = () => {
  return (
    <section id="services" className="container py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Our Services</h2>
        <p className="mt-3 text-muted-foreground">Fast, reliable and transparent processing</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="hover-scale animate-enter">
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
  );
};

export default Services;
