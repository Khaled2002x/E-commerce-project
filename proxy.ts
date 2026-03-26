import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!!token) return NextResponse.next();
  console.log(token);

  return NextResponse.redirect(new URL("/auth/login", req.url));
}
export const config = {
  matcher: ["/brands"],
};
