// Generated with the application so deployment checks can verify the exact build.
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    status: "ok",
    revision: process.env.APP_REVISION || "development",
  });
}
