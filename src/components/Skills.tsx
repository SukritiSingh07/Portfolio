"use client";

import BentoCard from "./BentoCard";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "Git", "Docker"];

  return (
    <BentoCard className="md:col-span-2" delay={0.1} elevated>
            <h2 className="text-xl font-display font-bold mb-1">Skills & Technologies</h2>
            <p className="text-sm text-muted-foreground mb-4">as a full stack developer, dive in</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.12, y: -2, transition: { duration: 0.2 } }}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </BentoCard>
  );
}
