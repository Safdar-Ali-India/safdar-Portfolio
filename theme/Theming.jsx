'use client';

import { ThemeProvider } from "next-themes";

function Theming({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
export default Theming;