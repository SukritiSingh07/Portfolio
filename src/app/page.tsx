import ThemeToggle from "@/component/ThemeToggle";

export default function Home() {
  const gridStyle = { background: 'var(--surface2)' };
  return (
    <div className="h-screen flex flex-col relative">
      {/* Theme Toggle Button */}
      <div className="p-1 flex justify-end">
        <ThemeToggle />
    </div>
    
    

    {/* Themed Grid */ }
    <div
        className = "grid grid-cols-5 gap-4 flex-grow p-4"
  style = {{ backgroundColor: 'var(--background)', color: 'var(--text)' }
}
      >
        <div className="p-4 text-center rounded-md shadow-md col-span-3" style={gridStyle}>Education</div>
        <div className="p-4 text-center rounded-md shadow-md col-span-2" style={gridStyle}>Projects</div>
        <div className="p-4 text-center rounded-md shadow-md row-span-2" style={gridStyle}>Experience</div>
        <div className="p-4 text-center rounded-md shadow-md row-span-2 col-span-3" style={gridStyle}></div>
        <div className="p-4 text-center rounded-md shadow-md row-span-2" style={gridStyle}>Skills</div>
        <div className="p-4 text-center rounded-md shadow-md col-span-2" style={gridStyle}>11</div>
        <div className="p-4 text-center rounded-md shadow-md col-span-3" style={gridStyle}>14</div>
      </ div>
    </div >
  );
}
