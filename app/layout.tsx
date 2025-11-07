"use client"

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "./stack";
import "@/app/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ColorModeProvider>
              <ChakraProvider value={defaultSystem}>
                <Provider>{children}</Provider>
              </ChakraProvider>
            </ColorModeProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
