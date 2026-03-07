"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-2" delay={0.25}>
            <h2 className="text-xl font-display font-bold mb-4">Projects</h2>
            <div className="space-y-3">
              {[
                { name: "AI Feedback Generator", tags: ["Python", "GPT"] },
                { name: "Finance Graph Tool", tags: ["React", "D3"] },
                { name: "Project Management App", tags: ["TypeScript", "Node"] },
              ].map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group/proj p-3 rounded-xl bg-secondary/60 text-sm font-medium text-foreground cursor-pointer hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span>{project.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover/proj:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex gap-1.5 mt-0 max-h-0 opacity-0 group-hover/proj:max-h-8 group-hover/proj:opacity-100 group-hover/proj:mt-2 transition-all duration-300 overflow-hidden">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>
  );
}
