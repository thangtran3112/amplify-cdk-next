// lib/api/TS_functions/updateTodo.ts
import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";
function request(ctx) {
  const id = ctx.args.input.id;
  const owner = ctx.identity.username;
  const now = util.time.nowISO8601();
  const updateObj = {
    title: ddb.operations.replace(ctx.args.input.title),
    description: ddb.operations.replace(ctx.args.input.description),
    isCompleted: ddb.operations.replace(ctx.args.input.isCompleted),
    updatedAt: ddb.operations.replace(now)
  };
  return ddb.update({
    key: { id },
    update: updateObj,
    condition: { owner: { eq: owner } }
  });
}
function response(ctx) {
  return ctx.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVFNfZnVuY3Rpb25zL3VwZGF0ZVRvZG8udHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBMEMsWUFBWTtBQUN0RCxZQUFZLFNBQVM7QUFHZCxTQUFTLFFBQVEsS0FBMkM7QUFDbEUsUUFBTSxLQUFLLElBQUksS0FBSyxNQUFNO0FBQzFCLFFBQU0sUUFBUyxJQUFJLFNBQW9DO0FBQ3ZELFFBQU0sTUFBTSxLQUFLLEtBQUssV0FBVztBQUdqQyxRQUFNLFlBQTRDO0FBQUEsSUFDakQsT0FBVyxlQUFXLFFBQVEsSUFBSSxLQUFLLE1BQU0sS0FBSztBQUFBLElBQ2xELGFBQWlCLGVBQVcsUUFBUSxJQUFJLEtBQUssTUFBTSxXQUFXO0FBQUEsSUFDOUQsYUFBaUIsZUFBVyxRQUFRLElBQUksS0FBSyxNQUFNLFdBQVc7QUFBQSxJQUM5RCxXQUFlLGVBQVcsUUFBUSxHQUFHO0FBQUEsRUFDdEM7QUFFQSxTQUFXLFdBQU87QUFBQSxJQUNqQixLQUFLLEVBQUUsR0FBRztBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLE1BQU0sRUFBRTtBQUFBLEVBQ25DLENBQUM7QUFDRjtBQUVPLFNBQVMsU0FBUyxLQUFjO0FBQ3RDLFNBQU8sSUFBSTtBQUNaOyIsCiAgIm5hbWVzIjogW10KfQo=
