"use client";

import Link from "next/link";
import { useStackApp, useUser } from "@stackframe/stack";
import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function Header({ children }: { children?: ReactNode }) {
  const user = useUser();
  const app = useStackApp();

  return (
    <Box background="teal.600" width="100%" padding="4" color="white">
      <Heading> App Notes </Heading>
      {user ? (
        <Flex gap="4" justify="center">
          <div>{children}</div>
          <Heading> Hello {user.primaryEmail} </Heading>
          <Link href={app.urls.signOut}>Sign Out</Link>
        </Flex>
      ) : (
        <Stack direction="row">
          <Link href={app.urls.signIn}>
            <Button>Sign in</Button>
          </Link>{" "}
          |
          <Link href={app.urls.signUp}>
            <Button>Sign Up</Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
}
