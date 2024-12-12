'use client';

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function Themeprovider({children , ...props}){
return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}