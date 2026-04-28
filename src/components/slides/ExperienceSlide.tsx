import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer",
    company: "Think41",
    duration: "Jul 2025 – Present",
    location: "Bangalore, India",
    tech: ["React", "Obsidian UI", "Highcharts", "SpringBoot", "Tray.io", "Celery", "REST APIs"],
    description: "Led frontend development of analytics dashboards using Atomic's Obsidian component library. Built third-party integrations via Tray.io, native integrations with Google Drive and Datadog, and implemented end-to-end user behavior tracking with event-driven notification workflows.",
  },
  {
    role: "Software Development Engineer Intern",
    company: "Think41",
    duration: "Feb 2025 – Jun 2025",
    location: "Bangalore, India",
    tech: ["React", "Django", "PostgreSQL", "Gen AI", "LLMs", "NLP", "OpenAI SDK"],
    description: "Built an AI-driven feedback platform to automate peer and manager evaluations with LLM-powered sentiment analysis. Designed a multi-agent AI support system with specialized agents and Human-in-the-Loop escalation for unresolved cases.",
  },
  {
    role: "Front-End Developer Intern",
    company: "Technovous",
    duration: "Oct 2022 – Nov 2022",
    location: "Noida, India",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    description: "Developed responsive, user-friendly web interfaces and ensured cross-browser compatibility with optimized UI/UX. Collaborated with backend developers to integrate REST APIs for dynamic content rendering.",
  },
];

const ExperienceSlide = () => (
  <div className="space-y-8">
    <div data-animate className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Briefcase className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Experience</h2>
        <p className="text-lg text-muted-foreground">Where I've worked</p>
      </div>
    </div>

    <div className="space-y-4">
      {experiences.map((exp) => (
        <motion.div
          data-animate
          key={exp.role + exp.company + exp.duration}
          whileHover={{ x: 8, transition: { duration: 0.2 } }}
          className="p-6 rounded-2xl bg-card hover:bg-card-elevated transition-colors duration-300 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company} · {exp.location}</p>
            </div>
            <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground whitespace-nowrap">
              {exp.duration}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map(t => (
              <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/10 text-primary">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ExperienceSlide;
