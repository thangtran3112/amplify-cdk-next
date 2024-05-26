// lib/api/TS_functions/createTodo.ts
import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";
function request(ctx) {
  const id = util.autoId();
  const identity = ctx.identity;
  const now = util.time.nowISO8601();
  const item = {
    __typename: "Todo",
    id,
    owner: identity.username,
    createdAt: now,
    updatedAt: now,
    ...ctx.args.input
  };
  return ddb.put({
    key: { id },
    item
  });
}
function response(ctx) {
  return ctx.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVFNfZnVuY3Rpb25zL2NyZWF0ZVRvZG8udHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBMEMsWUFBWTtBQUN0RCxZQUFZLFNBQVM7QUFHZCxTQUFTLFFBQVEsS0FBMkM7QUFDbEUsUUFBTSxLQUFLLEtBQUssT0FBTztBQUN2QixRQUFNLFdBQVcsSUFBSTtBQUNyQixRQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVc7QUFFakMsUUFBTSxPQUFPO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWjtBQUFBLElBQ0EsT0FBTyxTQUFTO0FBQUEsSUFDaEIsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsR0FBRyxJQUFJLEtBQUs7QUFBQSxFQUNiO0FBSUEsU0FBVyxRQUFJO0FBQUEsSUFDZCxLQUFLLEVBQUUsR0FBRztBQUFBLElBQ1Y7QUFBQSxFQUNELENBQUM7QUFDRjtBQUVPLFNBQVMsU0FBUyxLQUFjO0FBQ3RDLFNBQU8sSUFBSTtBQUNaOyIsCiAgIm5hbWVzIjogW10KfQo=
