import { Shield, Clock3, FileCheck2, PhoneCall } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Share Details", desc: "Call or email us your requirement and ID proofs." },
  { icon: FileCheck2, title: "We Prepare Docs", desc: "We fill forms, verify documents and book slots." },
  { icon: Clock3, title: "Sit Back", desc: "Track progress while we handle submissions securely." },
  { icon: Shield, title: "Done", desc: "Receive confirmation and final documents." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="container py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
        <p className="mt-3 text-muted-foreground">From details to done — simple, secure, streamlined</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border bg-card p-6 hover-scale animate-enter">
            <Icon className="text-primary" />
            <p className="mt-4 font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
