import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { FolderOpen, X, CheckCircle2, Sparkles } from "lucide-react";

gsap.registerPlugin(Flip);

interface Project {
  name: string;
  description: string;
  tags: string[];
  longDescription: string;
  features: string[];
  role: string;
  year: string;
}

const projects: Project[] = [
  {
    name: "Organisation Centric Project Management System",
    description: "Collaborative Trello-style platform with RBAC security, real-time WebSocket chat, AI-powered task insights, and employee performance analytics.",
    tags: ["MERN Stack", "WebSockets", "RBAC"],
    longDescription:
      "A full-featured collaborative project management platform built with the MERN stack. Features secure role-based access control using Passport.js, real-time WebSocket-based messaging, AI-powered task insights, and an interactive graph generator for tracking employee performance, task completion rates, and late submissions.",
    features: [
      "Trello-style collaborative task management boards",
      "RBAC-based secure auth & authorization via Passport.js",
      "Real-time WebSocket chat with AI-powered task insights",
      "Graph-based employee analytics — completion rates & performance tracking",
    ],
    role: "Full-stack Developer",
    year: "Sep 2024 – Nov 2024",
  },
  {
    name: "Friends Chat",
    description: "Social networking chat app with friend recommendations, end-to-end encrypted messaging, and JWT + OAuth security.",
    tags: ["MERN Stack", "JWT", "OAuth", "WebSockets"],
    longDescription:
      "A social chat application combining friend discovery, encrypted private messaging, and a robust security layer. Built with the MERN stack featuring a friend recommendation system, one-on-one end-to-end encrypted chats, JWT authentication, OAuth login, and role-based access control for different user tiers.",
    features: [
      "Social friend recommendation system",
      "End-to-end encrypted private messaging",
      "JWT authentication & OAuth login support",
      "Role-based access control for user permissions",
    ],
    role: "Full-stack Developer",
    year: "Jan 2025",
  },
  {
    name: "AI Feedback & Evaluation System",
    description: "AI-driven platform automating structured peer and manager evaluations with LLM-powered sentiment analysis and performance insights.",
    tags: ["React", "Django", "PostgreSQL", "Gen AI", "LLMs"],
    longDescription:
      "Designed and developed at Think41, this AI-powered feedback platform automates structured peer and manager evaluations. Uses LLM-based analysis to extract sentiment and performance signals from qualitative feedback, renders interactive trend dashboards, and generates actionable summaries to support data-driven performance reviews.",
    features: [
      "LLM-powered sentiment and performance signal extraction",
      "Automated structured peer & manager evaluation workflows",
      "Interactive dashboards for visualizing feedback trends",
      "Actionable summaries to assist managers in decision-making",
    ],
    role: "SDE Intern @ Think41",
    year: "Feb – Jun 2025",
  },
  {
    name: "Multi-Agent AI Support & Escalation System",
    description: "AI-powered support system using multi-agent orchestration with specialized domain agents and Human-in-the-Loop escalation for unresolved cases.",
    tags: ["OpenAI SDK", "LLMs", "Agent Orchestration", "Prompt Engineering"],
    longDescription:
      "Built at Think41, this multi-agent AI support system uses an orchestration architecture with specialized agents handling different support domains. Each agent is instruction-driven with detailed prompts to resolve niche issues accurately and contextually. Unresolved cases escalate to human review via a Human-in-the-Loop mechanism, ensuring high-quality and reliable support outcomes.",
    features: [
      "Multi-agent orchestration with specialized domain agents",
      "Instruction-driven agents with detailed prompt engineering",
      "Human-in-the-Loop escalation for unresolved support cases",
      "Contextual, accurate resolution across diverse support domains",
    ],
    role: "SDE Intern @ Think41",
    year: "Feb – Jun 2025",
  },
];

const ProjectsSlide = () => {
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
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 0.55,
          ease: "back.out(1.4)",
        },
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
    tl.to(modal, {
      opacity: 0,
      scale: 0.85,
      y: 30,
      rotateX: -8,
      duration: 0.35,
      ease: "power2.in",
    }).to(backdrop, { opacity: 0, duration: 0.25 }, "-=0.2");
  };

  const activeProject = active !== null ? projects[active] : null;

  return (
    <div className="space-y-8">
      <div data-animate className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-soft flex items-center justify-center border border-primary/20">
          <FolderOpen className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">Click a card for details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div
            data-animate
            key={project.name}
            onClick={() => setActive(i)}
            className="bento-card cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-gradient transition-all">
                  {project.name}
                </h3>
                <Sparkles className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${
                      idx % 2 === 0
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-accent/10 text-accent border border-accent/20"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {active !== null && activeProject &&
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
                    <span className="text-gradient">{activeProject.name}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activeProject.role} · {activeProject.year}
                  </p>
                </div>
                <div data-stagger className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, idx) => (
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
                  {activeProject.longDescription}
                </p>
                <div data-stagger>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                    Key features
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
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

export default ProjectsSlide;
