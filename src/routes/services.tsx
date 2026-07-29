import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Gavel,
  Shield,
  Users,
  Baby,
  Scale,
  FileText,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Legal Services — Mustak Bohari" },
      {
        name: "description",
        content:
          "Explore legal services in criminal law, family law, bail, divorce, custody, and legal documentation.",
      },
      { property: "og:title", content: "Legal Services — Mustak Bohari" },
      {
        property: "og:description",
        content:
          "Explore legal services in criminal law, family law, bail, divorce, custody, and legal documentation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  const services = [
    {
      icon: Gavel,
      title: "Criminal Defense",
      description:
        "Representation in criminal cases from the initial investigation through trial. We work to protect your rights, examine evidence, and build a strong defense strategy.",
      cases: ["Theft & Fraud", "Assault & Violent Crimes", "White-Collar Offenses", "Criminal Trials"],
    },
    {
      icon: Shield,
      title: "Bail Applications",
      description:
        "Assistance with bail applications at police stations and courts, including anticipatory bail and regular bail, with prompt attention to procedural requirements.",
      cases: ["Regular Bail", "Anticipatory Bail", "Interim Bail", "Bail Cancellation Matters"],
    },
    {
      icon: Users,
      title: "Divorce & Matrimonial Disputes",
      description:
        "Guidance through divorce proceedings, mutual consent divorce, contested divorce, and related matters with sensitivity and legal clarity.",
      cases: ["Mutual Divorce", "Contested Divorce", "Restitution of Conjugal Rights", "Domestic Violence"],
    },
    {
      icon: Baby,
      title: "Child Custody & Maintenance",
      description:
        "Advocacy for child custody, visitation rights, and maintenance matters, prioritizing the welfare of the child and the rights of the parent.",
      cases: ["Custody Petitions", "Visitation Rights", "Child Maintenance", "Guardianship"],
    },
    {
      icon: Scale,
      title: "Family Settlements & Mediation",
      description:
        "Support for family settlements, property partition among family members, and mediation to resolve disputes outside prolonged litigation.",
      cases: ["Family Settlement Deeds", "Partition Matters", "Mediation", "Elder Care Disputes"],
    },
    {
      icon: FileText,
      title: "Legal Documentation & Notices",
      description:
        "Drafting and review of petitions, agreements, legal notices, and affidavits to ensure accuracy and compliance with legal standards.",
      cases: ["Legal Notices", "Agreements & Affidavits", "Petitions", "Will Drafting"],
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Legal Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive legal support focused on criminal law and family law. Each case is handled with attention to detail, discretion, and client priorities.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Card key={idx} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-1">
                  {service.cases.map((c, cidx) => (
                    <li key={cidx} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border border-gold/20 bg-gold/5 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">Need legal advice?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Schedule a consultation to discuss your case and understand the best legal path forward.
          </p>
          <Button asChild className="mt-6 bg-gold text-gold-foreground hover:bg-gold-light">
            <Link to="/appointment">
              Book an Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
