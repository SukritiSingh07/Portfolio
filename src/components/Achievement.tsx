"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import BentoCard from "./BentoCard";

export default function Achievement() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <BentoCard className="md:col-span-2 group flex items-center gap-6" delay={0} elevated>
            <motion.div 
              className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10"
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
            >
              <GraduationCap className="w-7 h-7 text-primary" />
            </motion.div>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Latest Achievement</p>
              <p className="text-4xl font-display font-bold text-foreground">3.9</p>
              <p className="text-sm text-muted-foreground">GPA</p>
              <div className="flex gap-2 mt-2 max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">B.Tech in CS</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">Class of 2024</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">Dean's List</span>
              </div>
            </div>
          </BentoCard>
    );
}
