import { SlideLayout } from "./SlideLayout";
import { Scale, Gavel } from "lucide-react";

export function Slide1() {
  return (
    <SlideLayout dark className="flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--gold-fade),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--navy-light),transparent_50%)] opacity-40" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-24">
        <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-6 py-3">
          <Scale className="h-6 w-6 text-gold" />
          <span className="slide-kicker text-gold">Final Year Project</span>
        </div>

        <div className="space-y-6">
          <h1 className="slide-title-lg max-w-5xl">
            Advocate Website &<br />
            <span className="text-gold">Appointment Management</span> System
          </h1>
          <p className="slide-subtitle max-w-3xl text-primary-foreground/80">
            A professional digital platform for Advocate Mustak Bohari
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 text-gold/80">
          <Gavel className="h-6 w-6" />
          <span className="slide-body">Criminal Law &bull; Family Law</span>
        </div>
      </div>
    </SlideLayout>
  );
}
