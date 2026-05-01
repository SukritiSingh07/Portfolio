import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { GraduationCap, X, Award, Calendar, MapPin, BookOpen } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
  longDescription: string;
  highlights: string[];
  courses: string[];
}

const education: Education[] = [
  {
    degree: "B.Tech — Information Technology",
    school: "Guru Gobind Singh Indraprastha University",
    location: "New Delhi, India",
    period: "Jul 2021 — Jul 2025",
    gpa: "83.6%",
    description: "Specialization in full-stack web development, algorithms, and distributed systems.",
    longDescription:
      "Graduated with strong academic standing across 8 semesters. Focused coursework on data structures, web architecture, database management, and software engineering. Built multiple full-stack projects and solved 400+ DSA problems on LeetCode, earning the Annual Badge 2024. Interned at Think41 during final year and converted to a full-time SDE role upon graduation.",
    highlights: [
      "CGPA: 83.6% across 8 semesters",
      "LeetCode: 400+ DSA problems solved · Annual Badge 2024",
      "Converted from intern to full-time SDE at Think41",
    ],
    courses: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Web Technologies", "AI/ML"],
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Delhi Public School, Rajnagar",
    location: "Ghaziabad, India",
    period: "Apr 2019 — Mar 2020",
    gpa: "88.2%",
    description: "Science stream with Computer Science, Mathematics, and Physics.",
    longDescription:
      "Completed Class XII with distinction in the Science stream. Strong foundation in Mathematics and Computer Science laid the groundwork for a career in software engineering.",
    highlights: [
      "88.2% aggregate in Board Examinations",
      "Science stream — Computer Science, Mathematics, Physics",
    ],
    courses: ["Computer Science", "Mathematics", "Physics", "Chemistry", "English"],
  },
  {
    degree: "Matriculation (Class X)",
    school: "Heritage Academy",
    location: "Modinagar, India",
    period: "Apr 2017 — Mar 2018",
    gpa: "82.2%",
    description: "Completed secondary education with a focus on STEM subjects.",
    longDescription:
      "Completed Class X Board Examinations with solid academic performance across all subjects, building a strong foundation for further studies in science and technology.",
    highlights: [
      "82.2% aggregate in Board Examinations",
    ],
    courses: ["Mathematics", "Science", "Computer Science", "English", "Social Studies"],
  },
];

const EducationSlide = () => {
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
    gsap.set(modal, { opacity: 0, scale: 0.6, y: 60, rotateX: -12, transformPerspective: 1200 });
    gsap.set(content, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" })
      .to(modal, { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 0.55, ease: "back.out(1.4)" }, "-=0.15")
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
    if (!modal || !backdrop) { setActive(null); return; }
    const tl = gsap.timeline({ onComplete: () => setActive(null) });
    tl.to(modal, { opacity: 0, scale: 0.85, y: 30, rotateX: -8, duration: 0.35, ease: "power2.in" })
      .to(backdrop, { opacity: 0, duration: 0.25 }, "-=0.2");
  };

  const activeEdu = active !== null ? education[active] : null;

  return (
    <div className="space-y-8">
      <div data-animate className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-soft flex items-center justify-center border border-primary/20">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">Click a card for details</p>
        </div>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div
          className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-primary/30"
          style={{ boxShadow: "0 0 12px hsl(var(--primary) / 0.6), 0 0 24px hsl(var(--accent) / 0.3)" }}
        />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              data-animate
              key={edu.degree}
              onClick={() => setActive(i)}
              className="relative cursor-pointer group"
            >
              <div
                className="absolute -left-8 md:-left-12 top-1 w-7 h-7 md:w-9 md:h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent"
                style={{ boxShadow: "0 0 0 4px hsl(var(--background)), 0 0 16px hsl(var(--primary) / 0.6)" }}
              >
                <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary group-hover:text-accent transition-colors" />
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
                  {edu.period}
                </span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {edu.gpa !== "—" ? `GPA ${edu.gpa}` : "Self-directed"}
                </span>
              </div>

              <div
                className="relative rounded-xl bg-card/60 backdrop-blur-sm border border-border p-5 md:p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card overflow-hidden"
                style={{ boxShadow: "0 4px 20px -8px hsl(var(--primary) / 0.15)" }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-all leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm">
                      <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        {edu.school}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 italic border-l-2 border-accent/40 pl-3">
                  {edu.description}
                </p>

                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mt-1.5 shrink-0">
                    Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.slice(0, 4).map((c) => (
                      <span key={c} className="px-2 py-0.5 text-[11px] font-medium rounded border border-border bg-background/50 text-foreground/70">
                        {c}
                      </span>
                    ))}
                    {edu.courses.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                        +{edu.courses.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && activeEdu &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div ref={backdropRef} onClick={hideDetails} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
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
                    <span className="text-gradient">{activeEdu.degree}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-primary" /> {activeEdu.school}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent" /> {activeEdu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" /> {activeEdu.period}
                    </span>
                  </div>
                </div>
                <div data-stagger className="flex flex-wrap gap-2">
                  {activeEdu.gpa !== "—" && (
                    <span className="px-3 py-1 text-xs font-medium rounded-md bg-gradient-primary text-primary-foreground shadow-sm">
                      GPA {activeEdu.gpa}
                    </span>
                  )}
                  {activeEdu.courses.map((c, idx) => (
                    <span key={c} className={`px-3 py-1 text-xs font-medium rounded-md ${
                      idx % 2 === 0
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-accent/10 text-accent border border-accent/20"
                    }`}>
                      {c}
                    </span>
                  ))}
                </div>
                <p data-stagger className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {activeEdu.longDescription}
                </p>
                <div data-stagger>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {activeEdu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
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

export default EducationSlide;
