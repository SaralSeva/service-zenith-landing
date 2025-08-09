import { site } from "@/config/site";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={`tel:${site.phone}`} className="hover:text-foreground">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
