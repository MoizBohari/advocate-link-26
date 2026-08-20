import { createFileRoute } from "@tanstack/react-router";
import { SlideViewer, SlidePrintView } from "@/components/slides/SlideViewer";

export const Route = createFileRoute("/slides")({
  component: SlidesPage,
  head: () => ({
    meta: [
      { title: "Project Presentation — Advocate Website & Appointment System" },
      {
        name: "description",
        content:
          "A 5-slide presentation covering the Advocate Website and Appointment Management System: overview, purpose, modules, and technology stack.",
      },
      { property: "og:title", content: "Project Presentation" },
      {
        property: "og:description",
        content:
          "Overview of the Advocate Website and Appointment Management System for Mustak Bohari.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/slides" }],
  }),
});

function SlidesPage() {
  const search = Route.useSearch();
  const isPrint = search?.print != null;

  return (
    <div className="h-screen w-screen overflow-hidden">
      {isPrint ? <SlidePrintView /> : <SlideViewer />}
    </div>
  );
}
