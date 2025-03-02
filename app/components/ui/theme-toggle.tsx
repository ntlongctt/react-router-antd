import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from './button';

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
      root.classList.add('dark');
    } else {
      setTheme('light');
      root.classList.remove('dark');
    }
  }, []);

  function toggleTheme() {
    const root = window.document.documentElement;
    if (theme === 'light') {
      localStorage.theme = 'dark';
      root.classList.add('dark');
      setTheme('dark');
    } else {
      localStorage.theme = 'light';
      root.classList.remove('dark');
      setTheme('light');
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
