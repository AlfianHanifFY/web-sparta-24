"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import ClientLayout from "../ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false); // Initializing useState

  useEffect(() => {
    setIsClient(true); // Setting the state to true after the component mounts
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <SessionProvider>{children}</SessionProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
