import { SlideLayout } from "./SlideLayout";
import { Home, User, Briefcase, Calendar, Receipt, Phone } from "lucide-react";

const modules = [
  { icon: Home, label: "Home", desc: "Introduction and key highlights" },
  { icon: User, label: "About Advocate", desc: "Qualifications, experience, and values" },
  { icon: Briefcase, label: "Legal Services", desc: "Criminal, family, and documentation services" },
  { icon: Calendar, label: "Appointment Booking", desc: "Online consultation request form" },
  { icon: Receipt, label: "Fee Structure", desc: "Transparent consultation and representation fees" },
  { icon: Phone, label: "Contact", desc: "Office location, phone, email, and enquiry form" },
];

export function Slide4() {
  return (
    <SlideLayout dark className="flex flex-col justify-center px-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--gold-fade),transparent_45%)]" />

      <div className="relative z-10">
        <span className="slide-kicker text-gold">Core modules</span>
        <h2 className="slide-title mt-6 text-[var(--slide-primary-foreground)] max-w-4xl">
          Six connected pages that serve both visitor and advocate
        </h2>

        <div className="mt-14 grid grid-cols-3 gap-8">
          {modules.map((module, i) => {
            const Icon = module.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-gold/20 bg-gold/5 p-8 transition-colors hover:bg-gold/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold text-[var(--slide-accent-foreground)]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="slide-subtitle mt-6 text-[var(--slide-primary-foreground)]">
                  {module.label}
                </h3>
                <p className="slide-caption mt-3 text-[var(--slide-primary-foreground)]/70">
                  {module.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
