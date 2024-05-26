// lib/api/TS_functions/listTodos.ts
import * as ddb from "@aws-appsync/utils/dynamodb";
function request(ctx) {
  const { username } = ctx.identity;
  return ddb.query({
    query: { __typename: { eq: "Todo" }, owner: { eq: username } },
    index: "todosByOwner",
    limit: ctx.args.limit,
    nextToken: ctx.args.nextToken
  });
}
function response(ctx) {
  const { items: todos = [], nextToken } = ctx.result;
  return { todos, nextToken };
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVFNfZnVuY3Rpb25zL2xpc3RUb2Rvcy50cyJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxZQUFZLFNBQVM7QUFJZCxTQUFTLFFBQVEsS0FBdUM7QUFDOUQsUUFBTSxFQUFFLFNBQVMsSUFBSSxJQUFJO0FBQ3pCLFNBQVcsVUFBTTtBQUFBLElBQ2hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxFQUFFLElBQUksU0FBUyxFQUFFO0FBQUEsSUFDN0QsT0FBTztBQUFBLElBQ1AsT0FBTyxJQUFJLEtBQUs7QUFBQSxJQUNoQixXQUFXLElBQUksS0FBSztBQUFBLEVBQ3JCLENBQUM7QUFDRjtBQUVPLFNBQVMsU0FBUyxLQUFjO0FBQ3RDLFFBQU0sRUFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLFVBQVUsSUFBSSxJQUFJO0FBQzdDLFNBQU8sRUFBRSxPQUFPLFVBQVU7QUFDM0I7IiwKICAibmFtZXMiOiBbXQp9Cg==
