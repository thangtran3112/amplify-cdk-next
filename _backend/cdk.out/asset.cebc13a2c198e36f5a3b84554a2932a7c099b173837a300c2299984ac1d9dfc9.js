// lib/api/TS_functions/deleteTodo.ts
import * as ddb from "@aws-appsync/utils/dynamodb";
function request(ctx) {
  const { username } = ctx.identity;
  return ddb.remove({
    key: { id: ctx.args.id },
    condition: { owner: { eq: username } }
  });
}
function response(ctx) {
  return ctx.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVFNfZnVuY3Rpb25zL2RlbGV0ZVRvZG8udHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsWUFBWSxTQUFTO0FBR2QsU0FBUyxRQUFRLEtBQTJDO0FBRWxFLFFBQU0sRUFBRSxTQUFTLElBQUksSUFBSTtBQUN6QixTQUFXLFdBQU87QUFBQSxJQUNqQixLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssR0FBRztBQUFBLElBQ3ZCLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxTQUFTLEVBQUU7QUFBQSxFQUN0QyxDQUFDO0FBQ0Y7QUFFTyxTQUFTLFNBQVMsS0FBYztBQUN0QyxTQUFPLElBQUk7QUFDWjsiLAogICJuYW1lcyI6IFtdCn0K
