import { motion } from "framer-motion";
import { Code2, BadgeCheck } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", ".NET", "HTML", "CSS"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "FastAPI", "Django", "Springboot", "Generative AI", "ASPNET"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "AWS", "Docker", "GCP", "SQLAlchemy"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
];

const SkillsSlide = () => (
  <div className="space-y-10">
    <div data-animate className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-soft flex items-center justify-center border border-primary/20">
        <Code2 className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-lg text-muted-foreground">Technologies I work with</p>
      </div>
    </div>

    <div className="space-y-8">
      {skillCategories.map(({ category, skills }, ci) => (
        <div data-animate key={category}>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">{category}</p>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.06 + i * 0.04 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-card border border-border text-foreground/80 hover:text-foreground hover:border-primary/40 hover:shadow-sm transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
      {/* Certifications */}
      <div data-animate>
        <div className="flex items-center gap-3 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Certifications</p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-3">
          {[
            "Web Development Bootcamp",
            "Mastering Data Structures & Algorithms using C and C++",
            "Infosys Foundation Finishing School for Employability Program",
          ].map((cert) => (
            <div key={cert} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/80">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SkillsSlide;
