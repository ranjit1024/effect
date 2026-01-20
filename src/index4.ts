import { Effect } from "effect";
console.log(Effect.runSyncExit(Effect.promise(() => Promise.resolve(1))));
