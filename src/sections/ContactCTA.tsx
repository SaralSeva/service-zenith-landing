import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

const ContactCTA = () => {
  return (
    <section id="contact" className="container py-16">
      <div className="max-w-3xl mx-auto text-center rounded-xl border bg-card p-8 md:p-12">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to get started?</h2>
        <p className="mt-3 text-muted-foreground">Call or email us and we'll take care of the rest.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${site.phone}`} className="w-full sm:w-auto"><Button variant="hero" size="lg">Call {site.phone}</Button></a>
          <a href={`mailto:${site.email}`} className="w-full sm:w-auto"><Button variant="outline" size="lg">Email {site.email}</Button></a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
