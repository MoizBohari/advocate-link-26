import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Mustak Bohari" },
      {
        name: "description",
        content:
          "Contact Advocate Mustak Bohari. Office address, phone, email, and an enquiry form for legal questions.",
      },
      { property: "og:title", content: "Contact — Mustak Bohari" },
      {
        property: "og:description",
        content:
          "Contact Advocate Mustak Bohari. Office address, phone, email, and an enquiry form for legal questions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Reach out to discuss your legal matter, schedule an appointment, or request more information.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Office Address</h3>
                    <p className="mt-1 text-muted-foreground">
                      123 Law Chambers, MG Road
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Phone</h3>
                    <p className="mt-1 text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">Available during office hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                    <p className="mt-1 text-muted-foreground">contact@mustakbohari.com</p>
                    <p className="text-sm text-muted-foreground">Responses within 1-2 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Office Hours</h3>
                    <ul className="mt-1 space-y-1 text-muted-foreground">
                      <li>Monday – Friday: 10:00 AM – 6:00 PM</li>
                      <li>Saturday: 10:00 AM – 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry form */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Send an Enquiry</h2>
            {sent ? (
              <div className="rounded-lg border border-gold/20 bg-gold/5 p-6 text-center">
                <p className="font-display text-lg font-semibold text-foreground">Thank you for your message.</p>
                <p className="mt-2 text-muted-foreground">We will get back to you as soon as possible.</p>
                <Button
                  className="mt-4 bg-gold text-gold-foreground hover:bg-gold-light"
                  onClick={() => setSent(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input id="contact-name" placeholder="Your name" required minLength={2} maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" placeholder="+91 98765 43210" required maxLength={20} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input id="contact-subject" placeholder="How can we help?" required maxLength={200} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Describe your legal matter briefly"
                    className="min-h-[120px]"
                    required
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold-light">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground">
                  This form is for enquiries only. Please use the{" "}
                  <Link to="/appointment" className="text-gold underline underline-offset-2">
                    appointment page
                  </Link>{" "}
                  to schedule a consultation.
                  <ArrowRight className="inline h-3 w-3" />
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
