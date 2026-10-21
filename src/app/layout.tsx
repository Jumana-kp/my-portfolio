
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import ThemeRegistry from "../ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
    title: "JUMANA K P | Python Full Stack Developer",
    description:
        "Portfolio of Jumana K P, a Python Full Stack Developer specializing in Python, Django, React, Next.js and PostgreSQL.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeRegistry>
                        {children}
                    </ThemeRegistry>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
