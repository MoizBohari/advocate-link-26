import { SlideLayout } from "./SlideLayout";

const stack = [
  {
    layer: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    layer: "Framework",
    items: ["TanStack Start", "TanStack Router", "React Hook Form"],
  },
  {
    layer: "Backend & Data",
    items: ["Lovable Cloud", "Cloud Database", "Secure Server Functions"],
  },
  {
    layer: "Deployment",
    items: ["Lovable Platform", "GitHub Sync"],
  },
];

export function Slide5() {
  return (
    <SlideLayout className="flex flex-col justify-center px-32">
      <div className="absolute right-32 top-0 h-full w-px bg-[var(--slide-accent)]/30" />

      <div className="relative z-10 grid grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <span className="slide-kicker text-[var(--slide-accent)]">Built with</span>
          <h2 className="slide-title text-[var(--slide-primary)]">Modern, reliable technology stack</h2>
          <p className="slide-body max-w-xl text-[var(--slide-muted)]">
            The project uses a full-stack React framework with a secure cloud backend, combining a
            polished user interface with reliable data storage and server-side validation.
          </p>
        </div>

        <div className="grid gap-6">
          {stack.map((group, i) => (
            <div key={i} className="rounded-2xl border-l-4 border-[var(--slide-accent)] bg-white p-8 shadow-sm">
              <h3 className="slide-subtitle text-[var(--slide-primary)]">{group.layer}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--slide-surface-alt)] px-5 py-2 slide-chrome font-medium text-[var(--slide-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
