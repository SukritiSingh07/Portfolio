import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

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
  <div className="space-y-8">
    <div data-animate className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Code2 className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Skills</h2>
        <p className="text-lg text-muted-foreground">Technologies I work with</p>
      </div>
    </div>

    <div className="space-y-5">
      {skillCategories.map(({ category, skills }) => (
        <div data-animate key={category}>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSlide;
