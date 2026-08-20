import { SlideLayout } from "./SlideLayout";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Replace phone calls, office visits, and handwritten registers",
  "Provide 24/7 access to services, fees, and office information",
  "Reduce appointment conflicts, delays, and manual errors",
  "Improve transparency and trust between advocate and client",
  "Create a professional, organized digital first impression",
];

export function Slide3() {
  return (
    <SlideLayout className="flex flex-col justify-center px-32">
      <div className="absolute left-0 top-0 h-2 w-full bg-[var(--slide-accent)]" />

      <div className="relative z-10 max-w-6xl">
        <span className="slide-kicker text-[var(--slide-accent)]">Why it matters</span>
        <h2 className="slide-title mt-6 text-[var(--slide-primary)] max-w-5xl">
          Modernizing advocate-client interaction
        </h2>
        <p className="slide-body-lg mt-6 max-w-4xl text-[var(--slide-muted)]">
          Traditional appointment systems rely on manual processes that slow communication and create
          inefficiencies. This project shifts the experience online, giving clients clarity and the
          advocate organized, searchable records.
        </p>

        <div className="mt-14 grid gap-5">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--slide-accent)] text-[var(--slide-accent-foreground)]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <span className="slide-body text-[var(--slide-text)]">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
