import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import valueImg from "@/assets/value-timesave.jpg";

const comparisons = [
  { name: "PAN Card", manual: "4–6 hrs incl. form, queue, travel", withUs: "~30 mins sharing details", save: 85 },
  { name: "Ration Card", manual: "1 day incl. docs & office visits", withUs: "~2 hrs end-to-end support", save: 80 },
  { name: "Passport", manual: "1–2 days incl. slots & docs", withUs: "~2 hrs guidance & prep", save: 75 },
  { name: "Rail/Air/Bus Tickets", manual: "1–2 hrs searching & booking", withUs: "~10 mins best options", save: 85 },
  { name: "Electricity/Water/Gas", manual: "~1 day paperwork & follow-ups", withUs: "~1–2 hrs managed by us", save: 70 },
];

const ValueTime = () => {
  return (
    <section id="value" className="container py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Save Time. Skip Hassle.</h2>
          <p className="mt-3 text-muted-foreground">
            Here’s how much time you typically spend doing it yourself vs letting us handle it. Estimates vary by city and slot availability.
          </p>
          <div className="mt-8 grid gap-6">
            {comparisons.map((c) => (
              <Card key={c.name} className="hover-scale animate-enter">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>{c.name}</span>
                    <span className="text-sm font-medium text-primary">Up to {c.save}% time saved</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div>
                    <p className="font-medium">Manual</p>
                    <p className="text-muted-foreground">{c.manual}</p>
                  </div>
                  <div>
                    <p className="font-medium">With SaralESeva</p>
                    <p className="text-muted-foreground">{c.withUs}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Note: Timelines are indicative; official processing times apply.</p>
        </div>
        <div className="order-first md:order-none">
          <img src={valueImg} alt="Infographic showing manual vs SaralESeva time savings" className="w-full rounded-xl border shadow-[var(--shadow-elevated)] animate-enter" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default ValueTime;
