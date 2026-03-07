"use client";

import React from "react";
import BentoCard from "./BentoCard";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-2" delay={0.15}>
            <h2 className="text-xl font-display font-bold mb-4">Experience</h2>
            <div className="space-y-3">
              {[
                { role: "Frontend Developer Intern", tag: "React · 6 months" },
                { role: "Full Stack Intern", tag: "Node.js · 4 months" },
                { role: "Open Source Contributor", tag: "100+ contributions" },
              ].map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group/exp p-3 rounded-xl bg-secondary/60 text-sm font-medium text-foreground cursor-pointer hover:bg-secondary transition-colors"
                >
                  <span>{item.role}</span>
                  <p className="text-xs text-muted-foreground mt-0 max-h-0 opacity-0 group-hover/exp:max-h-6 group-hover/exp:opacity-100 group-hover/exp:mt-1 transition-all duration-300 overflow-hidden">
                    {item.tag}
                  </p>
                </motion.div>
              ))}
            </div>
          </BentoCard>
  );
}
