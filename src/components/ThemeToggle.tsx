// src/components/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(currentTheme || 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-2xl bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
    >
      Toggle Theme
    </button>
  );
}

