// lib/api/TS_functions/getTodo.ts
import * as ddb from "@aws-appsync/utils/dynamodb";
function request(ctx) {
  return ddb.get({ key: { id: ctx.args.id } });
}
function response(ctx) {
  const identity = ctx.identity;
  if (ctx.result.owner !== identity.username) {
    util.unauthorized();
  }
  return ctx.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVFNfZnVuY3Rpb25zL2dldFRvZG8udHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsWUFBWSxTQUFTO0FBR2QsU0FBUyxRQUFRLEtBQXFDO0FBRTVELFNBQVcsUUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUM1QztBQUVPLFNBQVMsU0FBUyxLQUFjO0FBRXRDLFFBQU0sV0FBVyxJQUFJO0FBQ3JCLE1BQUksSUFBSSxPQUFPLFVBQVUsU0FBUyxVQUFVO0FBQzNDLFNBQUssYUFBYTtBQUFBLEVBQ25CO0FBRUEsU0FBTyxJQUFJO0FBQ1o7IiwKICAibmFtZXMiOiBbXQp9Cg==
