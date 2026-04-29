import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { Briefcase, X, CheckCircle2, Calendar, Building2 } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  tech: string[];
  description: string;
  longDescription: string;
  achievements: string[];
  period: string;
}

const experiences: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Think41",
    duration: "Present",
    tech: ["React", "Obsidian UI", "Highcharts", "SpringBoot", "Tray.io", "Celery", "REST APIs"],
    description: "Led analytics dashboard development and built third-party integrations for enterprise clients Atomic and Entero.",
    longDescription:
      "Led frontend development of analytics dashboards using Atomic's Obsidian component library with Highcharts for rich data visualizations. Built and maintained third-party integrations via Tray.io with Datadog and Google Drive, and implemented end-to-end user behavior tracking with Celery-based event-driven notification workflows for client Entero.",
    achievements: [
      "Led analytics dashboard development using Obsidian UI & Highcharts for enterprise client Atomic",
      "Implemented Tray.io integrations with Datadog and Google Drive",
      "Built end-to-end user behavior tracking across the Entero application",
      "Created Celery-based background tasks for asynchronous event processing and notifications",
    ],
    period: "Jul 2025 – Present",
  },
  {
    role: "Software Development Engineer Intern",
    company: "Think41",
    duration: "5 months",
    tech: ["React", "Django", "PostgreSQL", "Gen AI", "LLMs", "NLP", "OpenAI SDK"],
    description: "Built an AI-driven feedback platform and a multi-agent support system using LLMs and agent orchestration.",
    longDescription:
      "Designed and developed two AI-powered products: an automated feedback and performance evaluation platform that uses LLM-based sentiment analysis to generate actionable insights, and a multi-agent support system with specialized domain agents and Human-in-the-Loop escalation for unresolved cases.",
    achievements: [
      "Designed AI-driven feedback platform automating peer and manager evaluations",
      "Integrated LLM-powered analysis to extract sentiment and performance signals",
      "Built multi-agent AI support system with specialized domain agents",
      "Enabled Human-in-the-Loop escalation for reliable, high-quality support outcomes",
    ],
    period: "Feb 2025 – Jun 2025",
  },
  {
    role: "Front-End Developer Intern",
    company: "Technovous",
    duration: "2 months",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    description: "Developed responsive web interfaces and integrated REST APIs for dynamic content rendering.",
    longDescription:
      "Developed responsive, user-friendly web interfaces using React, JavaScript, HTML5, CSS3, and Tailwind CSS. Ensured cross-browser compatibility and optimized UI/UX for seamless user interactions. Collaborated with backend developers to integrate REST APIs for dynamic content rendering.",
    achievements: [
      "Built responsive interfaces using React and Tailwind CSS",
      "Ensured cross-browser compatibility and optimized UI/UX",
      "Integrated REST APIs with backend developers for dynamic content rendering",
    ],
    period: "Oct 2022 – Nov 2022",
  },
];

const ExperienceSlide = () => {
  const [active, setActive] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === null) return;
    const modal = modalRef.current;
    const content = contentRef.current;
    const backdrop = backdropRef.current;
    if (!modal || !content || !backdrop) return;

    gsap.set(backdrop, { opacity: 0 });
    gsap.set(modal, {
      opacity: 0,
      scale: 0.6,
      y: 60,
      rotateX: -12,
      transformPerspective: 1200,
    });
    gsap.set(content, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" })
      .to(
        modal,
        { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 0.55, ease: "back.out(1.4)" },
        "-=0.15"
      )
      .to(content, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.2")
      .from(
        content.querySelectorAll("[data-stagger]"),
        { opacity: 0, y: 20, stagger: 0.06, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      );
  }, [active]);

  const hideDetails = () => {
    const modal = modalRef.current;
    const backdrop = backdropRef.current;
    if (!modal || !backdrop) {
      setActive(null);
      return;
    }
    const tl = gsap.timeline({ onComplete: () => setActive(null) });
    tl.to(modal, { opacity: 0, scale: 0.85, y: 30, rotateX: -8, duration: 0.35, ease: "power2.in" })
      .to(backdrop, { opacity: 0, duration: 0.25 }, "-=0.2");
  };

  const activeExp = active !== null ? experiences[active] : null;

  return (
    <div className="space-y-8">
      <div data-animate className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-soft flex items-center justify-center border border-primary/20">
          <Briefcase className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">Click a card for details</p>
        </div>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div
            data-animate
            key={exp.role + exp.company + exp.period}
            onClick={() => setActive(i)}
            className="bento-card cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-gradient transition-all">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground shadow-md">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t, idx) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${
                      idx % 2 === 0
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-accent/10 text-accent border border-accent/20"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {active !== null && activeExp &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              ref={backdropRef}
              onClick={hideDetails}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <div
              ref={modalRef}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-auto rounded-3xl bg-card border border-border shadow-2xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="h-1.5 bg-gradient-primary" />
              <button
                onClick={hideDetails}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all hover:rotate-90 z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div ref={contentRef} className="p-8 md:p-10 space-y-6">
                <div data-stagger className="pr-12">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">
                    <span className="text-gradient">{activeExp.role}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-primary" /> {activeExp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent" /> {activeExp.period} · {activeExp.duration}
                    </span>
                  </div>
                </div>
                <div data-stagger className="flex flex-wrap gap-2">
                  {activeExp.tech.map((tag, idx) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-md ${
                        idx % 2 === 0
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-accent/10 text-accent border border-accent/20"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p data-stagger className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {activeExp.longDescription}
                </p>
                <div data-stagger>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                    Key achievements
                  </h4>
                  <ul className="space-y-2">
                    {activeExp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default ExperienceSlide;
