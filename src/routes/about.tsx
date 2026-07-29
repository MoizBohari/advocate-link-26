import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, Scale, Briefcase, UserCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Advocate Mustak Bohari" },
      {
        name: "description",
        content:
          "Learn about Advocate Mustak Bohari's qualifications, experience, and practice in criminal and family law.",
      },
      { property: "og:title", content: "About Advocate Mustak Bohari" },
      {
        property: "og:description",
        content:
          "Learn about Advocate Mustak Bohari's qualifications, experience, and practice in criminal and family law.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor of Laws (LL.B.) from a recognized Indian university with continuous legal education in criminal and family law.",
    },
    {
      icon: Scale,
      title: "Bar Enrollment",
      description: "Enrolled with the Bar Council of Maharashtra and Goa, authorized to practice in district courts and relevant tribunals.",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Over 10 years of courtroom experience handling criminal defense, bail applications, matrimonial disputes, and family settlements.",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Recognized for clear client communication, ethical practice, and consistent preparation across a wide range of cases.",
    },
  ];

  const achievements = [
    "Successfully defended clients in complex criminal trials and bail hearings.",
    "Resolved numerous family disputes through mediation and court representation.",
    "Drafted petitions, agreements, and legal notices for individuals and families.",
    "Built a reputation for punctuality, honesty, and client-focused advocacy.",
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">About the Advocate</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A dedicated legal professional committed to defending rights and resolving family matters with integrity.
          </p>
        </div>

        {/* Profile intro */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              MB
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">Mustak Bohari</h2>
            <p className="mt-2 font-medium text-gold">Advocate & Legal Consultant</p>
            <p className="mt-4 text-muted-foreground">
              Advocate Mustak Bohari has built his practice on the belief that every client deserves clear, honest,
              and effective legal representation. With a focus on criminal law and family law, he guides clients through
              some of the most challenging moments of their lives — from criminal accusations and bail matters to
              divorce, child custody, and domestic issues.
            </p>
            <p className="mt-4 text-muted-foreground">
              His approach combines thorough legal knowledge with practical advice, ensuring clients understand their
              options and can make informed decisions at every stage.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">Professional Values</h3>
            <ul className="space-y-4">
              {[
                { icon: UserCheck, text: "Client-first approach with transparent communication" },
                { icon: Scale, text: "Ethical advocacy and respect for due process" },
                { icon: BookOpen, text: "Continuous learning and up-to-date legal knowledge" },
                { icon: Award, text: "Commitment to timely and effective outcomes" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-16">
          <h3 className="mb-8 text-center font-display text-3xl font-bold text-foreground">
            Qualifications & Experience
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualifications.map((item, idx) => (
              <Card key={idx} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="rounded-lg border border-border bg-card p-8">
          <h3 className="mb-6 font-display text-2xl font-bold text-foreground">Key Achievements</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
