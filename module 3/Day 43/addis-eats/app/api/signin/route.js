import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  const submittedNext = formData.get("next");

  let userId;

  if (email === "user@example.com" && password === "password123") {
    userId = "demo-user-1";
  } else if (email === "staff@example.com" && password === "staff123") {
    userId = "demo-staff-1";
  } else {
    return new Response("Invalid credentials", {
      status: 401,
    });
  }

  const next =
    typeof submittedNext === "string" &&
    submittedNext.startsWith("/") &&
    !submittedNext.startsWith("//") &&
    !submittedNext.includes("\\")
      ? submittedNext
      : "/";

  const cookieStore = await cookies();

  cookieStore.set("session", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return NextResponse.redirect(new URL(next, request.url));
}
