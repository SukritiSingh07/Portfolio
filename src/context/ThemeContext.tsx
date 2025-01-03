"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const ThemeContext = createContext<any>(null);

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>('latte'); // Default theme

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Apply theme globally
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'latte' ? 'mocha' : 'latte';
        setTheme(newTheme); // Update theme state
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};