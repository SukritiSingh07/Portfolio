import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, FolderOpen, GraduationCap, Mail, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import ThemeToggle from "@/components/ThemeToggle";
import SlideShow from "@/components/SlideShow";
import IntroSlide from "@/components/slides/IntroSlide";
import SkillsSlide from "@/components/slides/SkillsSlide";
import ExperienceSlide from "@/components/slides/ExperienceSlide";
import ProjectsSlide from "@/components/slides/ProjectsSlide";
import ContactSlide from "@/components/slides/ContactSlide";
import avatarImg from "@/assets/avatar.png";

const skills = ["React", "TypeScript", "Python", "Django", "Node.js", "PostgreSQL", "Docker", "AWS", "Gen AI", "Springboot"];

const slideData = [
  { id: "intro", label: "Intro", content: <IntroSlide /> },
  { id: "skills", label: "Skills", content: <SkillsSlide /> },
  { id: "experience", label: "Experience", content: <ExperienceSlide /> },
  { id: "projects", label: "Projects", content: <ProjectsSlide /> },
  { id: "contact", label: "Contact", content: <ContactSlide /> },
];

const Index = () => {
  const [slideShowOpen, setSlideShowOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const openSlide = useCallback((slideId: string) => {
    const idx = slideData.findIndex(s => s.id === slideId);
    setInitialSlide(idx >= 0 ? idx : 0);
    setSlideShowOpen(true);
  }, []);

  // Open slideshow on scroll down when at the bottom of the grid
  useEffect(() => {
    if (slideShowOpen) return;

    const handleWheel = (e: WheelEvent) => {
      const el = gridRef.current;
      if (!el) return;
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (atBottom && e.deltaY > 30) {
        e.preventDefault();
        setInitialSlide(0);
        setSlideShowOpen(true);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [slideShowOpen]);

  return (
    <div className="h-screen flex flex-col bg-background transition-colors duration-300 overflow-hidden">
      <ThemeToggle />

      {/* Slideshow overlay */}
      {slideShowOpen && (
        <SlideShow
          slides={slideData}
          initialSlide={initialSlide}
          onClose={() => setSlideShowOpen(false)}
        />
      )}


      {/* Bento Grid Overview */}
      <div ref={gridRef} className="flex-1 pt-4 md:pt-10 lg:pt-16 px-4 md:px-10 lg:px-16 pb-2 md:pb-4 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1"
            style={{ gridTemplateRows: "auto 1fr 1fr auto" }}
          >

            {/* Top Row: Achievement + Skills */}
            <BentoCard className="md:col-span-2 group flex items-center gap-6" delay={0} elevated>
              <div onClick={() => openSlide("skills")} className="flex items-center gap-6 w-full">
                <motion.div 
                  className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <GraduationCap className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Education</p>
                  <p className="text-4xl font-display font-bold text-foreground">83.6</p>
                  <p className="text-sm text-muted-foreground">CGPA · BTech IT</p>
                  <div className="flex gap-2 mt-2 max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">GGSIPU</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">2021 – 2025</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">New Delhi</span>
                  </div>
                  <p className="text-[10px] text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">LeetCode: 400+ DSA · Annual Badge 2024</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 group" delay={0.1} elevated>
              <div onClick={() => openSlide("skills")} className="cursor-pointer">
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
                <p className="text-[10px] text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

            {/* Middle Row: Experience + Hero + Projects */}
            <BentoCard className="md:col-span-1 md:row-span-2 group" delay={0.15}>
              <div onClick={() => openSlide("experience")} className="cursor-pointer">
                <h2 className="text-xl font-display font-bold mb-4">Experience</h2>
                <div className="space-y-3">
                  {[
                    { role: "SDE — Think41", tag: "Jul 2025 – Present" },
                    { role: "SDE Intern — Think41", tag: "Feb 2025 – Jun 2025" },
                    { role: "FE Intern — Technovous", tag: "Oct 2022 – Nov 2022" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.role}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="group/exp p-3 rounded-xl bg-secondary/60 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                    >
                      <span>{item.role}</span>
                      <p className="text-xs text-muted-foreground mt-0 max-h-0 opacity-0 group-hover/exp:max-h-6 group-hover/exp:opacity-100 group-hover/exp:mt-1 transition-all duration-300 overflow-hidden">
                        {item.tag}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col md:flex-row items-center gap-6 group" delay={0.2} elevated>
              <div onClick={() => openSlide("intro")} className="flex flex-col md:flex-row items-center gap-6 w-full cursor-pointer">
                <div className="flex-1 text-center md:text-left">
                  <motion.h1
                    className="text-3xl md:text-4xl font-display font-bold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Hi, I'm Sukriti Singh 👋
                  </motion.h1>
                  <p className="text-base text-muted-foreground mb-2">
                    SDE @ Think41 · Full-Stack · AI Systems
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building analytics frontends, AI-driven platforms, and backend integrations.
                    Passionate about clean code, user-focused design, and modern frameworks.
                  </p>
                  <div className="flex gap-3 mt-4 justify-center md:justify-start">
                    <motion.a href="https://github.com/SukritiSingh07" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={e => e.stopPropagation()} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a href="https://linkedin.com/in/sukriti-singh07" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={e => e.stopPropagation()} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a href="mailto:singhsukriti0@gmail.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={e => e.stopPropagation()} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
                  <p className="text-[10px] text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
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
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-1 md:row-span-2 group" delay={0.25}>
              <div onClick={() => openSlide("projects")} className="cursor-pointer">
                <h2 className="text-xl font-display font-bold mb-4">Projects</h2>
                <div className="space-y-3">
                  {[
                    { name: "Org Centric PM System", tags: ["MERN", "WebSockets", "RBAC"] },
                    { name: "Friends Chat App", tags: ["MERN", "JWT", "OAuth"] },
                  ].map((project, i) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="group/proj p-3 rounded-xl bg-secondary/60 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
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
                <p className="text-[10px] text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

            {/* Bottom Row: Contact + About */}
            <BentoCard className="md:col-span-2 group" delay={0.3}>
              <div onClick={() => openSlide("contact")} className="cursor-pointer">
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
                <p className="text-[10px] text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 group" delay={0.35}>
              <div onClick={() => openSlide("contact")} className="cursor-pointer">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotate: -5, transition: { duration: 0.2 } }}
                  >
                    <Code2 className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-display font-semibold">Tech Blog</h3>
                    <p className="text-sm text-muted-foreground">Writing about web dev & beyond</p>
                    <p className="text-xs text-muted-foreground/70 max-h-0 opacity-0 group-hover:max-h-6 group-hover:opacity-100 group-hover:mt-1 transition-all duration-300 overflow-hidden">
                      Latest: "Why TypeScript is a must in 2024"
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

          </div>

          {/* Scroll down indicator */}
          <motion.div
            className="flex flex-col items-center mt-3 mb-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Scroll down to start presentation</p>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Index;
