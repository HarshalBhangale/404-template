/* eslint-disable @typescript-eslint/no-explicit-any */
import defaultTheme from './default';
import proTheme from './pro';

type ThemeMap = {
  [key: string]: Record<string, any>; // Add index signature
};

export const themeMap: ThemeMap = {
  default: defaultTheme,
  pro: proTheme,
};

export const theme = themeMap[process.env.NEXT_PUBLIC_THEME || 'default'];
