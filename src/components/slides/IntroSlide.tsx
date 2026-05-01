import { motion } from "framer-motion";
import { GithubIcon, LucideLinkedin, Mail, Sparkles } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const stats = [
  { label: "Current Role", value: "SDE @ Think41" },
  { label: "Projects Shipped", value: "4+" },
  { label: "DSA Solved", value: "400+" },
  { label: "CGPA", value: "83.6%" },
];

const domains = ["Full-Stack Development", "AI & GenAI Systems", "Cloud & DevOps"];

const IntroSlide = () => (
  <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

    {/* Left */}
    <div className="flex-1 text-center md:text-left space-y-6">

      {/* Greeting + name */}
      <div data-animate>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
          Hi, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.05] mb-3">
          <span className="text-gradient">Sukriti Singh</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          Full-Stack Developer building AI-powered and GenAI-driven products
        </p>
      </div>

      {/* Bio */}
      <div data-animate className="space-y-3">
        <p className="text-base text-muted-foreground leading-relaxed">
          I design and develop intelligent systems — from interactive frontends to backend
          architectures and AI agents — focused on solving real-world problems.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          My work blends modern web technologies with{" "}
          <span className="text-foreground font-medium">LLMs, automation, and data-driven thinking</span>{" "}
          to create scalable, user-centric experiences.
        </p>
      </div>

      {/* Domain tags */}
      <div data-animate className="flex flex-wrap gap-2 justify-center md:justify-start">
        {domains.map((d) => (
          <span
            key={d}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-soft border border-primary/20 text-foreground/80"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            {d}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div data-animate className="grid grid-cols-4 gap-3">
        {stats.map(({ label, value }) => (
          <div key={label} className="text-center md:text-left">
            <p className="text-lg font-display font-bold text-gradient leading-none">{value}</p>
            <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{label}</p>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div data-animate className="flex gap-3 justify-center md:justify-start">
        {[
          { Icon: GithubIcon, label: "GitHub", href: "https://github.com/SukritiSingh07" },
          { Icon: LucideLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/sukriti-singh07" },
          { Icon: Mail, label: "Email", href: "mailto:singhsukriti0@gmail.com" },
        ].map(({ Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>

    {/* Right — avatar */}
    <motion.div
      data-animate
      className="flex-shrink-0"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl scale-110" />
        <img
          src={avatarImg}
          alt="Sukriti Singh"
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover ring-4 ring-secondary"
        />
      </div>
    </motion.div>

  </div>
);

export default IntroSlide;
