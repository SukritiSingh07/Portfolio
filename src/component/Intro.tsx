"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function IntroPage() {
    const headlineRef = useRef(null);

    useEffect(() => {
        gsap.to(headlineRef.current, {
            duration: 2,
            text: {
                value: "Hi, I'm Sukriti Singh 👋",
                delimiter: "",
            },
            ease: "none",
        });
    }, []);

    return (
        <div
            className="w-full h-full flex justify-center items-center gap-4"
            // style={{ background: "var(--background)", color: "var(--text)" }}
        >
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <h1
                    ref={headlineRef}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Hi, I'm ...
                </h1>

                <h2 className="text-lg md:text-2xl font-medium mb-4 text-[var(--text-secondary)] animate-fade-in-up delay-150">
                    Full-Stack Web Developer | Problem Solver | Tech Enthusiast
                </h2>

                <p className="max-w-2xl text-base md:text-lg text-[var(--text-muted)] mb-8 animate-fade-in-up delay-300">
                    I specialize in building dynamic web applications with a passion for
                    clean code, user-focused design, and modern frameworks. Let's create
                    something amazing together!
                </p>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <img
                    src="/passport.png"
                    alt="Passport"
                    style={{ height: "293px", borderRadius: "50%" }}
                    className="min-h-1/3 object-cover"
                />

            </div>
        </div>
    );
}
