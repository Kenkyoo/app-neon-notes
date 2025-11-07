import { AddTodoForm } from "app/add-todo";
import { Header } from "app/header";
import { TodoList } from "app/todo-list";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { UsersStats } from "app/users-stats";
import { stackServerApp } from "app/stack";

export default async function Home() {
  const user = await stackServerApp.getUser();
  let content = null;
  console.log(user)
  if (user) {
    content = (
      <>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm">
              Open Drawer
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Sidebar</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <p className="mb-10">
                   Create a note
                  </p>
                  <AddTodoForm />
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
        <div className="flex flex-col justify-center items-center gap-8">
          <TodoList />
           <UsersStats />
        </div>
      </>
    );
  }
  
  return (
    <>
      <Header />
      {content}
    </>
  );
}