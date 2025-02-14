import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NextJs MUI Authentication Dashboard",
    description:
        "A React-based authentication system with Material UI, Redux, and API integration. Features a protected dashboard, state management with Redux, and responsive design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Providers>
                <html lang="en">
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        <Toaster />
                        {children}
                    </body>
                </html>
            </Providers>
        </>
    );
}
