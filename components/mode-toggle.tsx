'use client';

// import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp';
// import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline';
import { useTheme } from 'next-themes';

export function ModeToggle({ size = 45 }: { size?: number }) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="z-50 flex h-8 w-8 items-center justify-center  rounded-full "
    >
      <span className="sr-only">Toggle mode</span>
      <h1>summy</h1>

      <h1>moom</h1>
    </button>
  );
}
