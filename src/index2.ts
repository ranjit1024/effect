import { Effect } from "effect";

const log = (message: string) =>
  Effect.sync(() => {
    console.log(message); // side effect
  });

//      ┌─── Effect<void, never, never>
//      ▼
const program = log("Hello, World!");
console.log(program);
