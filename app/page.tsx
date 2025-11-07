import { AddTodoForm } from "app/add-todo";
import { Header } from "app/header";
import { TodoList } from "app/todo-list";
import {
  Button,
  Container,
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
              <Button size="sm">
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
                  <Stack gap="5">
                    <p className="mb-10">{user.primaryEmail}</p>
                    <AddTodoForm />
                    <UsersStats />
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
        <TodoList />
      </>
    );
  }

  return <>{content}</>;
}
