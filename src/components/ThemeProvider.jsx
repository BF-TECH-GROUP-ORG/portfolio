'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeMode, setThemeMode] = useState('system'); // 'light', 'dark', or 'system'
    const [actualTheme, setActualTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);

        // Check localStorage for saved theme preference
        const savedMode = localStorage.getItem('themeMode') || 'system';
        setThemeMode(savedMode);

        const updateTheme = (mode) => {
            let theme;
            if (mode === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                theme = prefersDark ? 'dark' : 'light';
            } else {
                theme = mode;
            }
            setActualTheme(theme);
            document.documentElement.setAttribute('data-theme', theme);
        };

        updateTheme(savedMode);

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (themeMode === 'system') {
                updateTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [themeMode]);

    const setTheme = (mode) => {
        setThemeMode(mode);
        localStorage.setItem('themeMode', mode);

        let theme;
        if (mode === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            theme = prefersDark ? 'dark' : 'light';
        } else {
            theme = mode;
        }
        setActualTheme(theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ themeMode, actualTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
