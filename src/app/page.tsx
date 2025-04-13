import ThemeToggle from "@/component/ThemeToggle";
import Intro from "@/component/Intro";
import Experience from "@/component/Experience";
import Skills from "@/component/Skills";
import Project from "@/component/Project";

export default function Home() {
  const cardStyle = "rounded-2xl shadow-lg p-6 bg-[var(--surface2)] text-center transition duration-500 ease-in-out hover:scale-105 hover:bg-[var(--surface3)]";

  return (
    <div className="h-screen flex flex-col relative">
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <div className="h-2 ,w-2 mb-4 border border-gray-200 rounded animate-fade-in-up delay-450">
          <ThemeToggle />
        </div>
      </div>

      {/* Grid Layout with Cards */}
      <div
        className="grid grid-cols-5 gap-6 p-6 flex-grow"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text)",
        }}
      >
        {/* Cards Start Here */}
        <div className={`${cardStyle} col-span-3`}>
          <h2 className="text-xl font-semibold">Education</h2>
        </div>

        <div className={`${cardStyle} col-span-2`}>
          <h2 className="text-xl font-semibold"><Skills /></h2>
        </div>

        <div className={`${cardStyle} row-span-2`}>
          <h2 className="text-xl font-semibold"><Experience /></h2>
        </div>

        <div className={`${cardStyle} col-span-3 row-span-2`}>
          <Intro />
        </div>

        <div className={`${cardStyle} row-span-2`}>
          <h2 className="text-xl font-semibold"><Project /></h2>
        </div>

        <div className={`${cardStyle} col-span-2`}>
          <h2 className="text-xl font-semibold">Section 11</h2>
        </div>

        <div className={`${cardStyle} col-span-3`}>
          <h2 className="text-xl font-semibold">Section 14</h2>
        </div>
      </div>
    </div>
  );
}
