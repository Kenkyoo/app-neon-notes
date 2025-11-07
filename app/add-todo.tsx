"use client";

import { Button, Field, Stack, Textarea, Card } from "@chakra-ui/react";
import { insertTodo } from "app/actions";
import { useRef } from "react";

export function AddTodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (formData: FormData) => {
    const newTodo = formData.get("newTodo");

    if (!newTodo) {
      throw new Error("No newTodo");
    }

    if (typeof newTodo !== "string") {
      throw new Error("The newTodo must be a string");
    }

    await insertTodo({ newTodo: newTodo.toString() });
    formRef.current?.reset();
  };

  return (
    <Card.Root maxW="sm">
      <form ref={formRef} action={onSubmit}>
      <Card.Header>
        <Card.Title>New note</Card.Title>
        <Card.Description>
          Take notes, organize tasks, and stay productive.
        </Card.Description>
      </Card.Header>
      <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>New note</Field.Label>
              <Textarea name="newTodo" placeholder="New note" />
              <Field.HelperText>Take notes</Field.HelperText>
              <Field.ErrorText>{}</Field.ErrorText>
            </Field.Root>
          </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button type="submit">Create</Button>
      </Card.Footer>
    </form>
    </Card.Root>
  );
}
