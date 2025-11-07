"use client";

import Link from "next/link";
import { useStackApp, useUser } from "@stackframe/stack";
import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { ColorModeButton } from "@/components/ui/color-mode";

export function Header({ children }: { children?: ReactNode }) {
  const user = useUser();
  const app = useStackApp();

  return (
    <Box background="teal.600" width="100%" color="white">
      <Flex gap="4" align="center" justify="space-between">
        <Heading> App Notes </Heading>
        {user ? (
          <Flex gap="4" justify="center">
            <Heading> Hello {user.primaryEmail} </Heading>
            <Link href={app.urls.signOut}>
              <Button>Sign Out</Button>
            </Link>
          </Flex>
        ) : (
          <Stack direction="row" gap="3">
            <Link href={app.urls.signIn}>
              <Button>Sign in</Button>
            </Link>{" "}
            |
            <Link href={app.urls.signUp}>
              <Button>Sign Up</Button>
            </Link>
          </Stack>
        )}
        <ColorModeButton />
        <div>{children}</div>
      </Flex>
    </Box>
  );
}
