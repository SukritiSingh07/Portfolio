import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Organisation Centric Project Management System",
    description: "Collaborative platform with Trello-style task management, RBAC security via Passport.js, real-time WebSocket chat & AI-powered insights, and a graph generator for employee performance analytics.",
    tags: ["MERN Stack", "WebSockets", "RBAC", "Passport.js", "AI"],
    duration: "Sep 2024 – Nov 2024",
  },
  {
    name: "Friends Chat",
    description: "Social networking app with friend recommendations, end-to-end encrypted private messaging, advanced security via JWT authentication, OAuth login, and RBAC for user roles.",
    tags: ["MERN Stack", "JWT", "OAuth", "WebSockets"],
    duration: "Jan 2025",
  },
];

const ProjectsSlide = () => (
  <div className="space-y-8">
    <div data-animate className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <FolderOpen className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Projects</h2>
        <p className="text-lg text-muted-foreground">Things I've built</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <motion.div
          data-animate
          key={project.name}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
        >
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-lg font-display font-semibold text-foreground leading-tight pr-2">{project.name}</h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
          </div>
          <p className="text-xs text-muted-foreground/60 mb-3">{project.duration}</p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProjectsSlide;
