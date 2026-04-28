import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const IntroSlide = () => (
  <div className="flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 text-center md:text-left">
      <h1 data-animate className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4">
        Hi, I'm Sukriti 👋
      </h1>
      <p data-animate className="text-xl md:text-2xl text-muted-foreground mb-3">
        Software Development Engineer · Full-Stack Developer
      </p>
      <p data-animate className="text-base text-muted-foreground/80 leading-relaxed max-w-xl">
        Currently at Think41, I build analytics frontends, AI-powered systems, and backend integrations.
        Passionate about clean code, user-focused design, and modern frameworks.
      </p>
      <div data-animate className="flex gap-4 mt-8 justify-center md:justify-start">
        {[
          { icon: Github, label: "GitHub", href: "https://github.com/SukritiSingh07" },
          { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sukriti-singh07" },
          { icon: Mail, label: "Email", href: "mailto:singhsukriti0@gmail.com" },
        ].map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>
    <motion.div
      data-animate
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={avatarImg}
        alt="Sukriti Singh"
        className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover ring-4 ring-secondary"
      />
    </motion.div>
  </div>
);

export default IntroSlide;
