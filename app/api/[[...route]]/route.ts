import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  return c.json({ err: "Internal Server Error" });
});
const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

//Generating RPC type, we also acheive end to end type safety with that
export type AppType = typeof routes;
