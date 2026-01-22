import { Effect } from "effect";
import { effect } from "effect/Layer";
const data = (input: number) => {
  if (input === 10) {
    return Effect.fail("Not Valid");
  } else {
    return Effect.succeed("Valid");
  }
};

console.log(data(2));
