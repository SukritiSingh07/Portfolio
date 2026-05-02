import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Mail, GithubIcon, LucideLinkedin, ExternalLink, ChevronDown, FolderOpen } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import ThemeToggle from "@/components/ThemeToggle";
import SlideShow from "@/components/SlideShow";
import IntroSlide from "@/components/slides/IntroSlide";
import EducationSlide from "@/components/slides/EducationSlide";
import SkillsSlide from "@/components/slides/SkillsSlide";
import ExperienceSlide from "@/components/slides/ExperienceSlide";
import ProjectsSlide from "@/components/slides/ProjectsSlide";
import ContactSlide from "@/components/slides/ContactSlide";
import avatarImg from "@/assets/avatar.png";

const skillDomains = [
  { label: "Frontend Dev", sub: "React · TS · HTML/CSS", color: "bg-primary/10 text-primary border-primary/20" },
  { label: "Backend Dev", sub: "Node · Django · Spring", color: "bg-accent/10 text-accent border-accent/20" },
  { label: "AI & Gen AI", sub: "LLMs · OpenAI · FastAPI", color: "bg-funk-violet/10 text-funk-violet border-funk-violet/20" },
  { label: "Cloud & DevOps", sub: "AWS · GCP · Docker", color: "bg-funk-cyan/10 text-funk-cyan border-funk-cyan/20" },
  { label: "Databases", sub: "PostgreSQL · MongoDB · MySQL", color: "bg-funk-magenta/10 text-funk-magenta border-funk-magenta/20" },
  { label: "Languages", sub: "Python · Java · C++", color: "bg-funk-yellow/10 text-funk-yellow border-funk-yellow/20" },
];

const slideData = [
  { id: "intro", label: "Intro", content: <IntroSlide /> },
  { id: "education", label: "Education", content: <EducationSlide /> },
  { id: "skills", label: "Skills", content: <SkillsSlide /> },
  { id: "experience", label: "Experience", content: <ExperienceSlide /> },
  { id: "projects", label: "Projects", content: <ProjectsSlide /> },
  { id: "contact", label: "Contact", content: <ContactSlide /> },
];

const roles = ["Full-Stack Developer", "AI Systems Builder", "Problem Solver"];

const Index = () => {
  const [slideShowOpen, setSlideShowOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  const [gridScale, setGridScale] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    setIsDesktop(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768) {
        setGridScale(Math.min(window.innerWidth / 1600, window.innerHeight / 885, 1));
      } else {
        setGridScale(1);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(interval);
  }, []);

  const openSlide = useCallback((slideId: string) => {
    const idx = slideData.findIndex(s => s.id === slideId);
    setInitialSlide(idx >= 0 ? idx : 0);
    setSlideShowOpen(true);
  }, []);

  useEffect(() => {
    if (slideShowOpen) return;
    const handleWheel = (e: WheelEvent) => {
      const el = gridRef.current;
      if (!el) return;
      const isScrollable = el.scrollHeight > el.clientHeight + 50;
      const atBottom = !isScrollable || el.scrollTop + el.clientHeight >= el.scrollHeight - 50;
      if (atBottom && e.deltaY > 30) {
        e.preventDefault();
        setInitialSlide(0);
        setSlideShowOpen(true);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [slideShowOpen]);

  // Touch swipe-up to open slideshow on mobile
  useEffect(() => {
    if (slideShowOpen) return;
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const el = gridRef.current;
      if (!el) return;
      const deltaY = startY - e.changedTouches[0].clientY;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 50;
      if (atBottom && deltaY > 60) {
        setInitialSlide(0);
        setSlideShowOpen(true);
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [slideShowOpen]);

  return (
    <div
      className="min-h-screen md:h-screen flex flex-col bg-background transition-colors duration-300 overflow-y-auto md:overflow-hidden"
      style={isDesktop && gridScale < 1 ? { zoom: gridScale, height: `${100 / gridScale}vh` } : undefined}
    >
      <ThemeToggle />

      {slideShowOpen && (
        <SlideShow
          slides={slideData}
          initialSlide={initialSlide}
          onClose={() => setSlideShowOpen(false)}
        />
      )}

      {/* Bento Grid */}
      <div ref={gridRef} className="flex-1 min-h-0 pt-4 md:pt-6 lg:pt-10 px-4 md:px-8 lg:px-14 pb-2 md:pb-3 flex flex-col md:overflow-hidden">
        <div className="flex-1 min-h-0 flex flex-col">
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-3 flex-1 min-h-0"
            style={isDesktop ? { gridTemplateRows: "1fr 1fr 1fr 0.55fr" } : undefined}
          >

            {/* Top Row: Education + Skills */}
            <BentoCard className="md:col-span-2 group" delay={0} elevated>
              <div onClick={() => openSlide("education")} className="cursor-pointer flex flex-col h-full justify-between">
                {/* Top */}
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</p>
                </div>
                {/* Middle */}
                <div>
                  <p className="font-display font-black text-gradient leading-none" style={{ fontSize: "clamp(2rem, 6vh, 4.5rem)" }}>83.6</p>
                  <p className="text-sm text-muted-foreground mt-1.5">CGPA · BTech IT · GGSIPU</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">Information Technology · 2021 – 2025</p>
                </div>
                {/* Bottom: hover details */}
                <div className="space-y-1">
                  <div className="flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[
                      { label: "New Delhi", cls: "bg-secondary text-secondary-foreground" },
                      { label: "LeetCode: 400+ DSA", cls: "bg-primary/10 text-primary border border-primary/20" },
                      { label: "Annual Badge 2024", cls: "bg-accent/10 text-accent border border-accent/20" },
                    ].map(({ label, cls }) => (
                      <span key={label} className={`px-2.5 py-1 text-[11px] font-medium rounded-lg ${cls}`}>{label}</span>
                    ))}
                  </div>
                  <p className="text-[10px] text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Click to explore →</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 group" delay={0.1} elevated>
              <div onClick={() => openSlide("skills")} className="cursor-pointer flex flex-col h-full gap-2">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-base lg:text-xl font-display font-bold">
                      <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <p className="text-xs text-muted-foreground">26 skills across 4 categories</p>
                  </div>
                  <span className="text-2xl lg:text-3xl font-display font-black text-primary/10 select-none leading-none">26+</span>
                </div>
                {/* Middle: 2-row domain grid */}
                <div className="grid grid-cols-3 gap-1.5 flex-1 content-center">
                  {skillDomains.map(({ label, sub, color }) => (
                    <motion.div
                      key={label}
                      whileHover={{ scale: 1.04, y: -2, transition: { duration: 0.2 } }}
                      className={`px-2 py-1.5 rounded-xl border ${color} cursor-default`}
                    >
                      <p className="text-xs font-semibold leading-tight">{label}</p>
                      <p className="text-[10px] opacity-70 mt-0.5 leading-tight">{sub}</p>
                    </motion.div>
                  ))}
                </div>
                {/* Bottom */}
                <p className="text-[10px] text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore all →</p>
              </div>
            </BentoCard>

            {/* Middle Row: Experience + Hero + Projects */}
            <BentoCard className="md:col-span-1 md:row-span-2 group" delay={0.15}>
              <div onClick={() => openSlide("experience")} className="cursor-pointer flex flex-col h-full">
                <h2 className="text-base lg:text-xl font-display font-bold mb-2 lg:mb-3">Experience</h2>
                <div className="flex flex-col flex-1 gap-3">
                  {[
                    { role: "SDE — Think41", tag: "Jul 2025 – Present", color: "border-primary" },
                    { role: "SDE Intern — Think41", tag: "Feb – Jun 2025", color: "border-accent" },
                    { role: "FE Intern — Technovous", tag: "Oct – Nov 2022", color: "border-funk-violet" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.role}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`group/exp flex-1 flex flex-col justify-center px-3 py-2 rounded-xl bg-secondary/60 text-sm font-medium text-foreground hover:bg-secondary transition-colors border-l-2 ${item.color}`}
                    >
                      <span>{item.role}</span>
                      <span className="text-[11px] text-muted-foreground mt-0.5">{item.tag}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

            {/* Hero */}
            <BentoCard className="md:col-span-2 md:row-span-2 group" delay={0.2} elevated>
              <div onClick={() => openSlide("intro")} className="cursor-pointer flex flex-col h-full gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1.5">Software Development Engineer</p>
                    <h1 className="font-display font-bold leading-[1.05] mb-2" style={{ fontSize: "clamp(1.5rem, 8cqh, 3.5rem)" }}>
                      <span className="text-gradient">Sukriti</span><br />Singh
                    </h1>
                    <div className="h-5 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={roleIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs font-medium text-muted-foreground"
                        >
                          {roles[roleIndex]}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <motion.img
                    src={avatarImg}
                    alt="Sukriti Singh"
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full object-cover ring-4 ring-secondary flex-shrink-0"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
                <motion.p
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 lg:line-clamp-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  I build things that work — real-time collaborative platforms,{" "}
                  <span className="text-foreground font-medium">LLM-powered feedback systems</span>, and full-stack
                  apps with React, Django &amp; Node. Passionate about clean architecture and shipping products people actually use.
                </motion.p>
                <div className="flex gap-2">
                  {[
                    { href: "https://github.com/SukritiSingh07", Icon: GithubIcon, label: "GitHub" },
                    { href: "https://linkedin.com/in/sukriti-singh07", Icon: LucideLinkedin, label: "LinkedIn" },
                    { href: "mailto:singhsukriti0@gmail.com", Icon: Mail, label: "Email" },
                  ].map(({ href, Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </motion.a>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-border/50 mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-[11px] text-muted-foreground">
                    Currently building <span className="text-foreground font-medium">AI feedback &amp; evaluation tools</span> at Think41
                  </p>
                  <p className="ml-auto text-[10px] text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click →</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-1 md:row-span-2 group" delay={0.25}>
              <div onClick={() => openSlide("projects")} className="cursor-pointer flex flex-col h-full">
                <h2 className="text-base lg:text-xl font-display font-bold mb-2 lg:mb-3">Projects</h2>
                <div className="flex flex-col flex-1 gap-3">
                  {[
                    { name: "Org Centric PM System", tags: ["MERN", "WebSockets", "RBAC"], color: "border-primary" },
                    { name: "Friends Chat", tags: ["MERN", "JWT", "OAuth"], color: "border-accent" },
                    { name: "AI Feedback & Evaluation", tags: ["React", "Django", "Gen AI"], color: "border-funk-violet" },
                    { name: "Multi-Agent AI System", tags: ["OpenAI SDK", "Agents"], color: "border-funk-magenta" },
                  ].map((project, i) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`group/proj flex-1 flex flex-col justify-center px-3 py-2 rounded-xl bg-secondary/60 text-sm font-medium text-foreground hover:bg-secondary transition-colors border-l-2 ${project.color}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span>{project.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover/proj:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                      <div className="flex gap-1.5 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary/10 text-primary">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to explore →</p>
              </div>
            </BentoCard>

            {/* Bottom Row */}
            <BentoCard className="md:col-span-2 group" delay={0.3}>
              <div onClick={() => openSlide("contact")} className="cursor-pointer flex items-center h-full gap-3">
                <motion.div
                  className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
                >
                  <Briefcase className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold truncate">Open to Work</h3>
                  <p className="text-sm text-muted-foreground truncate">Looking for full-time opportunities</p>
                  <p className="text-xs text-muted-foreground/70 max-h-0 opacity-0 group-hover:max-h-6 group-hover:opacity-100 group-hover:mt-1 transition-all duration-300 overflow-hidden">
                    Remote · Full-time · Startups welcome
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 group" delay={0.35}>
              <div onClick={() => openSlide("contact")} className="cursor-pointer flex items-center h-full gap-3">
                <motion.div
                  className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: -5, transition: { duration: 0.2 } }}
                >
                  <FolderOpen className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold truncate">Let's Connect</h3>
                  <p className="text-sm text-muted-foreground truncate">singhsukriti0@gmail.com</p>
                  <p className="text-xs text-muted-foreground/70 max-h-0 opacity-0 group-hover:max-h-6 group-hover:opacity-100 group-hover:mt-1 transition-all duration-300 overflow-hidden">
                    GitHub · LinkedIn · Email
                  </p>
                </div>
              </div>
            </BentoCard>

          </div>

          {/* Scroll down indicator */}
          <motion.div
            className="flex flex-col items-center mt-3 mb-1 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => { setInitialSlide(0); setSlideShowOpen(true); }}
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
