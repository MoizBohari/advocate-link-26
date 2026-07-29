import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/fees")({
  component: FeesPage,
  head: () => ({
    meta: [
      { title: "Fee Structure — Mustak Bohari" },
      {
        name: "description",
        content:
          "Transparent consultation fees for criminal law, family law, bail applications, and legal documentation.",
      },
      { property: "og:title", content: "Fee Structure — Mustak Bohari" },
      {
        property: "og:description",
        content:
          "Transparent consultation fees for criminal law, family law, bail applications, and legal documentation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fees" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/fees" }],
  }),
});

function FeesPage() {
  const fees = [
    {
      service: "Initial Consultation",
      duration: "30 minutes",
      price: "₹1,500",
      description: "One-on-one discussion to understand your case and outline possible legal options.",
      includes: ["Case review", "Legal options overview", "Next steps guidance"],
    },
    {
      service: "Detailed Case Review",
      duration: "1 hour",
      price: "₹3,000",
      description: "In-depth analysis of documents, evidence, and legal strategy for your matter.",
      includes: ["Document review", "Evidence assessment", "Strategy discussion"],
    },
    {
      service: "Bail Application",
      duration: "Per application",
      price: "₹5,000",
      description: "Preparation and representation for regular bail and anticipatory bail applications.",
      includes: ["Petition drafting", "Court filing", "Hearing representation"],
    },
    {
      service: "Legal Documentation",
      duration: "Per document",
      price: "₹2,500",
      description: "Drafting of legal notices, agreements, petitions, and affidavits.",
      includes: ["Draft preparation", "Review & corrections", "Final copy delivery"],
    },
    {
      service: "Court Representation",
      duration: "Per hearing",
      price: "₹5,000+",
      description: "Appearance and representation in court hearings and related proceedings.",
      includes: ["Hearing preparation", "Court appearance", "Post-hearing update"],
    },
    {
      service: "Family Law Matter",
      duration: "Case based",
      price: "Custom",
      description: "Divorce, custody, maintenance, and other family disputes handled on a case basis.",
      includes: ["Initial consultation", "Petition drafting", "Ongoing representation"],
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Fee Structure</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Transparent and straightforward consultation fees. Final costs for ongoing matters depend on complexity and court requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fees.map((item, idx) => (
            <Card key={idx} className="border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-xl font-semibold text-foreground">
                  {item.service}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-display text-3xl font-bold text-gold">{item.price}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <ul className="space-y-2">
                  {item.includes.map((inc, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-bold text-foreground">Important Notes</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Fees are indicative and may vary based on case complexity and court location.</li>
            <li>• Additional government fees, stamp duties, and court charges are not included in the above amounts.</li>
            <li>• A detailed estimate is provided after the initial consultation.</li>
            <li>• Payment terms are discussed and agreed upon before any formal representation begins.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold-light">
            <Link to="/appointment">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
