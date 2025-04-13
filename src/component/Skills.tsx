"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Skills() {
  const headlineRef = useRef(null);

  useEffect(() => {
    gsap.to(headlineRef.current, {
      duration: 2,
      text: {
        value: "Skills & Technologies",
        delimiter: "",
      },
      ease: "none",
    });
  }, []);

  return (
    <div className="flex flex-col text-left animate-fade-in-up delay-150">
      <h1 ref={headlineRef} className="text-3xl font-bold" />
      <p className="text-xs text-[var(--text-secondary)] italic mt-1">
        as full stack developer, dive in
      </p>
    </div>
  );
}
