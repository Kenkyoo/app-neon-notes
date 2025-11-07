import { AddTodoForm } from "app/add-todo";
import { Header } from "app/header";
import { TodoList } from "app/todo-list";
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { UsersStats } from "app/users-stats";
import { stackServerApp } from "app/stack";

export default async function Home() {
  const user = await stackServerApp.getUser();
  let content = null;

  if (user) {
    content = (
      <>
        <Drawer.Root>
          <Header>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                Sidebar
              </Button>
            </Drawer.Trigger>
          </Header>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Sidebar</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Stack>
                    <p className="mb-10">{user.primaryEmail}</p>
                    <AddTodoForm />
                  </Stack>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>

        <Flex gap="4" direction="column">
          <TodoList />
          <UsersStats />
        </Flex>
      </>
    );
  }

  return <>{content}</>;
}
