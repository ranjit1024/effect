import { Cause, Effect } from "effect";

const cause = Cause.fail("My eoor");
const data = Effect.failCause(cause);

const result = Effect.runSyncExit(data);
console.log(result);
