import { Effect, Exit } from "effect";

const program = Effect.fail("Something went wrong");

const result = await Effect.runPromiseExit(program);

if (Exit.isSuccess(result)) {
  console.log("Success:", result.value);
} else {
  console.log("Failure:", result.cause);
}
