"use server";

import { usersSync as users } from "drizzle-orm/neon";
import { todos } from "./schema/schema";
import { and, eq, isNull } from "drizzle-orm";
import { fetchWithDrizzle } from "app/db";
import { Avatar, Button, Card } from "@chakra-ui/react";

async function getUserStats() {
  const stats = await fetchWithDrizzle((db) =>
    db
      .select({
        email: users.email,
        name: users.name,
        complete: db.$count(
          todos,
          and(eq(todos.isComplete, true), eq(todos.ownerId, users.id)),
        ),
        total: db.$count(todos, eq(todos.ownerId, users.id)),
      })
      .from(users)
      .innerJoin(todos, eq(todos.ownerId, users.id))
      .where(isNull(users.deletedAt))
      .groupBy(users.email, users.name, users.id),
  );

  return stats;
}

export async function UsersStats() {
  const stats = await getUserStats();

  if (stats.length === 0) {
    return null;
  }

  return (
    <>
      {stats.map((user) => (
        <Card.Root maxW="sm" key={user.email}>
          <Card.Body gap="2">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>
            <Card.Title mt="2">{user.email}</Card.Title>
            <Card.Description>
              {user.name ?? "N/A"}
              {user.complete}
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline">Notes: {user.total}</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </>
  );
}
