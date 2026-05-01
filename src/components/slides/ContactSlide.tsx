import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Download } from "lucide-react";
import resumePdf from "@/assets/resume.pdf";

const ContactSlide = () => (
  <div className="space-y-10 text-center max-w-2xl mx-auto">
    <div data-animate>
      <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
        Let's Connect
      </h2>
      <p className="text-lg text-muted-foreground">
        Open to full-time opportunities, collaborations, and interesting conversations.
      </p>
    </div>

    <div data-animate className="flex justify-center gap-4 flex-wrap">
      {[
        { icon: Github, label: "GitHub", sub: "SukritiSingh07", href: "https://github.com/SukritiSingh07" },
        { icon: Linkedin, label: "LinkedIn", sub: "sukriti-singh07", href: "https://linkedin.com/in/sukriti-singh07" },
        { icon: Mail, label: "Email", sub: "singhsukriti0@gmail.com", href: "mailto:singhsukriti0@gmail.com" },
      ].map(({ icon: Icon, label, sub, href }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card hover:bg-card-elevated transition-colors duration-300 min-w-[140px]"
        >
          <Icon className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground">{sub}</span>
        </motion.a>
      ))}
    </div>

    <div data-animate className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-5 rounded-2xl bg-card flex items-center gap-3 justify-center">
        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
        <div className="text-left">
          <h3 className="font-display font-semibold text-foreground text-sm">Phone</h3>
          <p className="text-sm text-muted-foreground">+91 9368141342</p>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-card flex items-center gap-3 justify-center">
        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
        <div className="text-left">
          <h3 className="font-display font-semibold text-foreground text-sm">Location</h3>
          <p className="text-sm text-muted-foreground">Bangalore, India</p>
        </div>
      </div>
    </div>

    <div data-animate>
      <motion.a
        href={resumePdf}
        download="Sukriti_Singh_Resume.pdf"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <Download className="w-5 h-5" />
        Download Resume
      </motion.a>
    </div>
  </div>
);

export default ContactSlide;
