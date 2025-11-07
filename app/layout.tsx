import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "./stack";
import "@/app/styles/globals.css";
import { Provider } from "@/components/ui/provider";

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
                <Provider>{children}</Provider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
