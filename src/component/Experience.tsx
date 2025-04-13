"use client";

import React from "react";

export default function Experience() {
  return (
    <div className="flex flex-col gap-6 text-left">
        <h2 className="text-3xl font-bold">Experience</h2>
      {/* Frontend Developer Internship */}
      <div className="p-4 rounded-xl bg-[var(--surface3)] hover:scale-[1.02] transition duration-300 shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] mb-1">
          Frontend Developer Intern
        </h3>
      </div>

      {/* Full Stack Developer Internship */}
      <div className="p-4 rounded-xl bg-[var(--surface3)] hover:scale-[1.02] transition duration-300 shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] mb-1">
          Full Stack Intern
        </h3>
      </div>
    </div>
  );
}
