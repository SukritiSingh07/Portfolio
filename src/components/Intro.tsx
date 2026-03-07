"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { Github, Linkedin, Mail } from "lucide-react";
import avatarImg from "@/assets/avtar.png";

export default function IntroPage() {

    return (
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col md:flex-row items-center gap-6" delay={0.2} elevated>
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                className="text-3xl md:text-4xl font-display font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm Alex 👋
              </motion.h1>
              <p className="text-base text-muted-foreground mb-2">
                Full-Stack Developer | Problem Solver | Tech Enthusiast
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I specialize in building dynamic web applications with a passion for clean code, 
                user-focused design, and modern frameworks. Let's create something amazing together!
              </p>
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ 
                opacity: { delay: 0.4 },
                scale: { delay: 0.4, type: "spring", stiffness: 200 },
                y: { delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img
                src={avatarImg}
                alt="Profile avatar"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover ring-4 ring-secondary hover:ring-primary/40 transition-all duration-500"
              />
            </motion.div>
          </BentoCard>
    );
}
