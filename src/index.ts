import { Effect } from "effect";

interface User {
  readonly id: number;
  readonly name: string;
}

const getUser = (userId: number): Effect.Effect<User, Error> => {
  const userDatabase: Record<number, User> = {
    1: { id: 1, name: "ranjit" },
    2: { id: 2, name: "rahul" },
  };
  if (userDatabase[userId]) {
    return Effect.succeed(userDatabase[userId]);
  } else {
    return Effect.fail(new Error("User not found"));
  }
};
const exampleUserEffect = getUser(1);
