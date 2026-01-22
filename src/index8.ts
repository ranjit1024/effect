import { Effect, Random, Data } from "effect";

class HttpError extends Data.TaggedError("HttpError")<{}> {}

class ValidationError extends Data.TaggedError("ValidationError")<{}> {}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  // Generate two random numbers between 0 and 1
  const n1 = yield* Random.next;
  const n2 = yield* Random.next;

  // Simulate an HTTP error
  if (n1 < 0.5) {
    return yield* Effect.fail(new HttpError());
  }
  // Simulate a validation error
  if (n2 < 0.5) {
    return yield* Effect.fail(new ValidationError());
  }

  return "some result";
});
Effect.runPromise(program).then((data) => console.log(data));
