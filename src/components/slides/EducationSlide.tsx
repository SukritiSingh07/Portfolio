import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Information Technology",
    school: "Guru Gobind Singh Indraprastha University",
    location: "New Delhi, India",
    period: "Jul 2021 — Jul 2025",
    gpa: "83.6%",
    description: "Specialization in full-stack web development, algorithms, and distributed systems.",
    courses: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Web Technologies", "AI/ML"],
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Delhi Public School, Rajnagar",
    location: "Ghaziabad, India",
    period: "Apr 2019 — Mar 2020",
    gpa: "88.2%",
    description: "Science stream with Computer Science, Mathematics, and Physics.",
    courses: ["Computer Science", "Mathematics", "Physics", "Chemistry", "English"],
  },
  {
    degree: "Matriculation (Class X)",
    school: "Heritage Academy",
    location: "Modinagar, India",
    period: "Apr 2017 — Mar 2018",
    gpa: "82.2%",
    description: "Completed secondary education with a focus on STEM subjects.",
    courses: ["Mathematics", "Science", "Computer Science", "English", "Social Studies"],
  },
];

const EducationSlide = () => (
  <div className="space-y-8">
    <div data-animate className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-soft flex items-center justify-center border border-primary/20">
        <GraduationCap className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          <span className="text-gradient">Education</span>
        </h2>
        <p className="text-lg text-muted-foreground">Academic background & qualifications</p>
      </div>
    </div>

    <div className="relative pl-8 md:pl-12">
      <div
        className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-primary/30"
        style={{ boxShadow: "0 0 12px hsl(var(--primary) / 0.6), 0 0 24px hsl(var(--accent) / 0.3)" }}
      />

      <div className="space-y-8">
        {education.map((edu) => (
          <div data-animate key={edu.degree} className="relative group">
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
                GPA {edu.gpa}
              </span>
            </div>

            <div
              className="relative rounded-xl bg-card/60 backdrop-blur-sm border border-border p-5 md:p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card overflow-hidden"
              style={{ boxShadow: "0 4px 20px -8px hsl(var(--primary) / 0.15)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight">
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
  </div>
);

export default EducationSlide;
