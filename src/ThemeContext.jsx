// ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [systemTheme, setSystemTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", systemTheme);
    }, [systemTheme]);

    const toggleTheme = () => {
        setSystemTheme((prev) => (prev === "light" ? "dark" : "light"));
    };



    return (
        <ThemeContext.Provider value={{ systemTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {
    return useContext(ThemeContext);
}