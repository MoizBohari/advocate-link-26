import { SlideLayout } from "./SlideLayout";
import { Globe, Calendar, FileText } from "lucide-react";

export function Slide2() {
  return (
    <SlideLayout className="flex flex-col justify-center px-32">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[var(--slide-surface-alt)]" />

      <div className="relative z-10 grid grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="slide-kicker text-[var(--slide-accent)]">What is this project?</span>
          <h2 className="slide-title text-[var(--slide-primary)]">
            A complete online presence for a modern legal practice
          </h2>
          <p className="slide-body max-w-2xl text-[var(--slide-muted)]">
            This system combines a professional advocate profile with an online appointment booking
            experience. Visitors can learn about qualifications, explore legal services, review
            consultation fees, and request appointments — all from one responsive platform.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex items-start gap-5 rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--slide-primary)] text-[var(--slide-primary-foreground)]">
              <Globe className="h-8 w-8" />
            </div>
            <div>
              <h3 className="slide-subtitle text-[var(--slide-primary)]">Public Website</h3>
              <p className="slide-caption text-[var(--slide-muted)]">Professional profile, services, and fee transparency</p>
            </div>
          </div>

          <div className="flex items-start gap-5 rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--slide-primary)] text-[var(--slide-primary-foreground)]">
              <Calendar className="h-8 w-8" />
            </div>
            <div>
              <h3 className="slide-subtitle text-[var(--slide-primary)]">Online Booking</h3>
              <p className="slide-caption text-[var(--slide-muted)]">Clients schedule consultations without phone calls</p>
            </div>
          </div>

          <div className="flex items-start gap-5 rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--slide-primary)] text-[var(--slide-primary-foreground)]">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h3 className="slide-subtitle text-[var(--slide-primary)]">Digital Records</h3>
              <p className="slide-caption text-[var(--slide-muted)]">Appointments stored securely in the cloud database</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
