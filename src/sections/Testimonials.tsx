import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const testimonials = [
  { name: "Rohit Kumar", text: "Got my passport application done in one visit. Extremely professional and fast!" },
  { name: "Neha Sharma", text: "They booked my train and bus tickets at great prices. Smooth experience." },
  { name: "Aman Verma", text: "New electricity and gas connections handled end-to-end. Highly recommend." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">What Customers Say</h2>
        <p className="mt-3 text-muted-foreground">Real feedback from our clients</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="hover-scale animate-enter">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle2 className="text-primary" />{t.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{t.text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
