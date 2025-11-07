"use server";
import {
  checkOrUncheckTodoFormAction,
  deleteTodoFormAction,
  getTodos,
} from "app/actions";
import {
  Avatar,
  Button,
  Card,
  Flex,
  Container,
  Heading,
} from "@chakra-ui/react";

export async function TodoList() {
  const todos = await getTodos();

  if (todos === null) {
    return <Heading>Loading...</Heading>;
  }

  // Calculate the number of pending todos
  const pendingTodos = todos.filter((todo) => !todo.isComplete).length;

  return (
    <Container fluid px="4">
      <Flex gap="4" direction="column">
      <Heading>
        {pendingTodos} todo{pendingTodos !== 1 ? "s" : ""} remaining
      </Heading>
      {todos.length > 0 ? (
        <Flex gap="4">
          {todos.map((todo) => (
            <Card.Root width="320px" key={todo.id}>
              <Card.Body gap="2">
                {todo.owner?.email ? (
                  <Card.Title mt="2"> Note</Card.Title>
                ) : null}
                <Card.Description>{todo.task}</Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <form action={checkOrUncheckTodoFormAction}>
                  <input
                    name="isComplete"
                    type="hidden"
                    value={String(todo.isComplete)}
                  />
                  <input name="id" type="hidden" value={String(todo.id)} />
                  <Button variant="outline" type="submit">
                    {todo.isComplete ? "↩️" : "✅"}
                  </Button>
                </form>
                <form action={deleteTodoFormAction}>
                  <input name="id" type="hidden" value={String(todo.id)} />
                  <Button type="submit">🗑️</Button>
                </form>
              </Card.Footer>
            </Card.Root>
          ))}
        </Flex>
      ) : (
        <div>You don&apos;t have any todos!</div>
      )}
    </Flex>
    </Container>
  );
}
