import ThemeToggle from "@/components/ThemeToggle";
import Achievement from "@/components/Achievement";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import IntroPage from "@/components/Intro";
import Project from "@/components/Project";
import About from "@/components/About";
import TechBlog from "@/components/TechBlog";

const Index = () => {
  return (
    <div className="h-screen bg-background p-4 overflow-hidden transition-colors duration-300 flex flex-col gap-3">
      <div className="flex justify-end shrink-0">
        <ThemeToggle />
      </div>
      <div className="flex-1 min-h-0">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full md:grid-rows-[auto_1fr_1fr_auto]">

          {/* Top Row: Achievement + Skills */}
          <Achievement />

          <Skills />

          {/* Middle Row: Experience + Hero + Projects */}
          <Experience />

          <IntroPage />

          <Project />

          {/* Bottom Row: Contact + About */}
          <About />

          <TechBlog />

        </div>
      </div>
    </div>
  );
};

export default Index;
