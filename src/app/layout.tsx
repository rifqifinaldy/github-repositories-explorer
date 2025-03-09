import { Box } from "@chakra-ui/react";
import { UiProvider } from "@components/_chakra-ui/provider";

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import StoreProvider from "./StoreProvider";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repositories Explorer",
  description: "Github Repositories Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${ubuntu.className}`}>
        <StoreProvider>
          <UiProvider>
            <Box p="40px">{children}</Box>
          </UiProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
