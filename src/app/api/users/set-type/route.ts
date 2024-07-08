"use server"

import { db } from "@/app/_libs/prisma"
import { authOptions } from "@/app/_libs/auth"
import { getServerSession } from "next-auth"

export async function POST(request: Request) {
  const { type } = await request.json();
  const { user }: any = await getServerSession(authOptions)

  await db.user.update({ where: { email: user.email }, data: { type } });

  return Response.json({ user })
}