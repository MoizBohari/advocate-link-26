import { useEffect, useState, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight, Printer } from "lucide-react";
import { slides } from "./slides";

function useSlideScale() {
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const { clientWidth, clientHeight } = wrapperRef.current;
      const scaleX = clientWidth / 1920;
      const scaleY = clientHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return { scale, wrapperRef };
}

export function SlideViewer() {
  const [index, setIndex] = useState(0);
  const { scale, wrapperRef } = useSlideScale();

  const CurrentSlide = useMemo(() => slides[index].component, [index]);

  const goNext = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.title = `${index + 1}/${slides.length} — ${slides[index].title}`;
  }, [index]);

  return (
    <div className="slide-wrapper" ref={wrapperRef}>
      <div
        className="slide-scaler"
        style={{ "--slide-scale": scale } as React.CSSProperties}
      >
        <CurrentSlide />
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-[var(--slide-primary)]/90 px-6 py-3 text-[var(--slide-primary-foreground)] shadow-lg backdrop-blur">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="rounded-full p-2 hover:bg-white/10 disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="slide-chrome min-w-[4rem] text-center font-medium">
          {index + 1} / {slides.length}
        </span>
        <button
          onClick={goNext}
          disabled={index === slides.length - 1}
          className="rounded-full p-2 hover:bg-white/10 disabled:opacity-30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="mx-2 h-4 w-px bg-white/20" />
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-full p-2 hover:bg-white/10"
          aria-label="Print slides"
        >
          <Printer className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function SlidePrintView() {
  return (
    <div className="slide-print-wrapper" style={{ width: 1920, height: 1080 * slides.length }}>
      {slides.map((slide, i) => {
        const Component = slide.component;
        return (
          <div
            key={slide.id}
            className="slide-print slide-content"
            style={{ position: "absolute", top: i * 1080, left: 0 }}
          >
            <Component />
          </div>
        );
      })}
    </div>
  );
}
