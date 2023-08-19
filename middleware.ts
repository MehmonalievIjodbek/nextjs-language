import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

const I18nMiddleware = createI18nMiddleware(["en", "ru"] as const, "ru");

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = getCookie("site-jwt", { req, res });
  res.status(200).json({ token });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
