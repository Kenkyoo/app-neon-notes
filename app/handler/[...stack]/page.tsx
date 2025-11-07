import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/app/stack";
import { AbsoluteCenter, Box, Container, Heading } from "@chakra-ui/react";

export default function Handler(props: any) {
  return (
    <Container maxW="md" px="2" py="4">
    <Box position="relative" h="100vh" borderRadius="md">
      <Heading>The quick brown fox jumps over the lazy dog</Heading>
      <AbsoluteCenter>
        <Box bg="bg.emphasized" px="8" py="6" borderRadius="md" color="fg">
          <StackHandler app={stackServerApp} {...props}/>
        </Box>
      </AbsoluteCenter>
    </Box>
  </Container>
  );
}
