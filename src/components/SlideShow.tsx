import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

interface SlideShowProps {
  slides: { id: string; label: string; content: React.ReactNode }[];
  initialSlide?: number;
  onClose: () => void;
}

const SlideShow = ({ slides, initialSlide = 0, onClose }: SlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const animateToSlide = useCallback((newIndex: number, direction: "left" | "right") => {
    if (isAnimating.current || !slidesRef.current) return;
    isAnimating.current = true;

    const allSlides = slidesRef.current.children;
    const currentSlide = allSlides[currentIndex] as HTMLElement;
    const nextSlide = allSlides[newIndex] as HTMLElement;

    if (!currentSlide || !nextSlide) {
      isAnimating.current = false;
      return;
    }

    const xOut = direction === "left" ? "-60%" : "60%";
    const xIn = direction === "left" ? "60%" : "-60%";
    const rotateOut = direction === "left" ? -8 : 8;
    const rotateIn = direction === "left" ? 8 : -8;

    gsap.set(nextSlide, {
      display: "flex",
      x: xIn,
      opacity: 0,
      scale: 0.85,
      rotateY: rotateIn,
      filter: "blur(12px)",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(currentSlide, { display: "none" });
        setCurrentIndex(newIndex);
        isAnimating.current = false;
      },
    });

    // Current slide exits with 3D rotation + blur
    tl.to(currentSlide, {
      x: xOut,
      opacity: 0,
      scale: 0.85,
      rotateY: rotateOut,
      filter: "blur(12px)",
      duration: 0.5,
      ease: "power3.inOut",
    })
    // Next slide enters
    .to(nextSlide, {
      x: "0%",
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.3");

    // Stagger content elements with spring-like feel
    const contentEls = nextSlide.querySelectorAll("[data-animate]");
    if (contentEls.length) {
      tl.fromTo(
        contentEls,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );
    }
  }, [currentIndex]);

  const goNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      animateToSlide(currentIndex + 1, "left");
    }
  }, [currentIndex, slides.length, animateToSlide]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      animateToSlide(currentIndex - 1, "right");
    }
  }, [currentIndex, animateToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, onClose]);

  // Mouse wheel navigation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 30) goNext();
        else if (e.deltaY < -30) goPrev();
      }, 50);
    };
    const el = containerRef.current;
    el?.addEventListener("wheel", handleWheel, { passive: false });
    return () => { el?.removeEventListener("wheel", handleWheel); clearTimeout(timeout); };
  }, [goNext, goPrev]);

  // Entrance animation — cinematic zoom + fade
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(containerRef.current,
      { opacity: 0, scale: 1.08, filter: "blur(16px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }
    );

    if (slidesRef.current) {
      Array.from(slidesRef.current.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (i === initialSlide) {
          gsap.set(el, { display: "flex", x: "0%", opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" });
          const contentEls = el.querySelectorAll("[data-animate]");
          if (contentEls.length) {
            gsap.fromTo(contentEls,
              { y: 40, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.4)", delay: 0.35 }
            );
          }
        } else {
          gsap.set(el, { display: "none", opacity: 0 });
        }
      });
    }
  }, [initialSlide]);

  const handleClose = () => {
    if (!containerRef.current) return onClose();
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 0.92,
      filter: "blur(12px)",
      duration: 0.4,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-background flex flex-col"
      style={{ opacity: 0, perspective: "1200px" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => {
                if (i !== currentIndex) {
                  animateToSlide(i, i > currentIndex ? "left" : "right");
                }
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                i === currentIndex
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground hover:scale-105"
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
        <button
          onClick={handleClose}
          className="w-9 h-9 rounded-xl bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:rotate-90 transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Slides container */}
      <div className="flex-1 relative overflow-hidden" style={{ perspective: "1200px" }}>
        <div ref={slidesRef} className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="absolute inset-0 flex items-start justify-center p-8 md:p-16 overflow-y-auto"
              style={{ display: "none", backfaceVisibility: "hidden" }}
            >
              <div className="w-full max-w-5xl min-h-full flex flex-col justify-center">
                {slide.content}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 hover:scale-110 hover:-translate-x-1"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {currentIndex < slides.length - 1 && (
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 hover:scale-110 hover:translate-x-1"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom progress */}
      <div className="px-6 py-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-10 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]" : "w-2 bg-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
