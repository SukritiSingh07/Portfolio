"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import React, { useState } from "react";
import BentoCard from "./BentoCard";

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <BentoCard className="md:col-span-2 group" delay={0.3}>
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
              >
                <Briefcase className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-display font-semibold">Open to Work</h3>
                <p className="text-sm text-muted-foreground">Looking for full-time opportunities</p>
                <p className="text-xs text-muted-foreground/70 max-h-0 opacity-0 group-hover:max-h-6 group-hover:opacity-100 group-hover:mt-1 transition-all duration-300 overflow-hidden">
                  Remote · Full-time · Startups welcome
                </p>
              </div>
            </div>
        </BentoCard>
    );
}
