import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Shield,
  Clock,
  Calendar,
  Phone,
  ArrowRight,
  Gavel,
  Users,
  FileText,
} from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Mustak Bohari — Advocate & Legal Consultant" },
      {
        name: "description",
        content:
          "Professional legal services in criminal and family law. Book appointments online with Advocate Mustak Bohari.",
      },
      { property: "og:title", content: "Mustak Bohari — Advocate & Legal Consultant" },
      {
        property: "og:description",
        content:
          "Professional legal services in criminal and family law. Book appointments online with Advocate Mustak Bohari.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Mustak Bohari — Advocate & Legal Consultant",
          description: "Professional legal services in criminal and family law.",
          url: "/",
          telephone: "+91-98765-43210",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Law Chambers, MG Road",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400001",
            addressCountry: "IN",
          },
          areaServed: "India",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--gold-fade),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
                <Shield className="h-4 w-4" />
                Trusted Legal Counsel
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Justice Guided by <span className="text-gold">Experience</span>
              </h1>
              <p className="max-w-xl text-lg text-primary-foreground/80">
                Advocate Mustak Bohari provides dedicated legal representation in criminal and
                family law. Clear advice, transparent fees, and a commitment to protecting your
                rights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-light">
                  <Link to="/appointment">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 shadow-2xl">
                <img
                  src="/src/assets/hero-legal.jpg"
                  alt="Professional legal office with law books and scales of justice"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-lg border border-gold/20 bg-card p-4 shadow-lg">
                <p className="font-display text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Years of Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust highlights */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Gavel className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">Criminal Defense</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strong representation in criminal cases, bail, and trials.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">Family Law</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Divorce, custody, and domestic matters handled with care.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">Legal Documentation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Drafting petitions, agreements, and legal notices.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">Easy Appointments</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Book your consultation online at your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office hours & CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold text-foreground">Office Hours</h2>
              <p className="text-muted-foreground">
                Visit the office during working hours or book an appointment online for a scheduled
                consultation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center justify-between border-b border-border pb-2">
                  <span className="font-medium">Monday – Friday</span>
                  <span className="text-muted-foreground">10:00 AM – 6:00 PM</span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-2">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">10:00 AM – 2:00 PM</span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-6 rounded-lg border border-border bg-card p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call for urgent matters</p>
                  <p className="font-display text-xl font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Prefer to schedule?</p>
                  <p className="font-display text-xl font-semibold text-foreground">Book online in minutes</p>
                </div>
              </div>
              <Button asChild className="bg-gold text-gold-foreground hover:bg-gold-light">
                <Link to="/appointment">Schedule Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-border bg-cream py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>
            This website is for informational purposes only and does not constitute legal advice.
            Attorney-client privilege is established only after a formal consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
