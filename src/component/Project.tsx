"use client";

import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 text-left h-full w-full overflow-y-auto px-2">
      <h2 className="text-3xl font-bold text-[var(--text)]">Projects</h2>

      {/* Project 1 */}
      <div className="p-2 rounded-xl bg-[var(--surface3)] hover:scale-[1.02] transition duration-300 shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] mb-1">
          AI Powered Feedback Generator
        </h3>
      </div>

      {/* Project 2 */}
      <div className="p-2 rounded-xl bg-[var(--surface3)] hover:scale-[1.02] transition duration-300 shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] mb-1">
          Finance Graph Generator
        </h3>
      </div>

      {/* Project 3 */}
      <div className="p-2 rounded-xl bg-[var(--surface3)] hover:scale-[1.02] transition duration-300 shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] mb-1">
          Organization Centric Project Management System
        </h3>
      </div>
        ..etc
      {/* Add more projects here if needed */}
    </div>
  );
}
