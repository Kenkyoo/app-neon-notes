import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/app/stack";
import {
  AbsoluteCenter,
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Highlight,
} from "@chakra-ui/react";

export default function Handler(props: any) {
  return (
    <Container maxW="md" px="2" py="4">
      <Box position="relative" h="100vh" borderRadius="md">
        <Stack>
          <Heading size="3xl" letterSpacing="tight">
            <Highlight query="with speed" styles={{ color: "teal.600" }}>
              Login in your account
            </Highlight>
          </Heading>
          <Text fontSize="md" color="fg.muted">
            Login is a simple, modular and accessible neon auth component
            library that gives you the building blocks you need.
          </Text>
        </Stack>
        <AbsoluteCenter>
          <Box bg="bg.emphasized" px="8" py="6" borderRadius="md" color="fg">
            <StackHandler app={stackServerApp} {...props} />
          </Box>
        </AbsoluteCenter>
      </Box>
    </Container>
  );
}
