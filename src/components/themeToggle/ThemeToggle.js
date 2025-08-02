import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-toggle me-3">
      <input
        type="checkbox"
        id="theme-switch"
        checked={isDarkMode}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <label htmlFor="theme-switch" className="theme-slider">
        <i className="fas fa-sun theme-toggle-icon sun" aria-hidden="true"></i>
        <i className="fas fa-moon theme-toggle-icon moon" aria-hidden="true"></i>
      </label>
    </div>
  );
};

export default ThemeToggle;
