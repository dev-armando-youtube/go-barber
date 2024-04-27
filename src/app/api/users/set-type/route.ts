"use server"

import { db } from "@/app/_libs/prisma"
import { authOptions } from "@/app/_libs/auth"
import { getServerSession } from "next-auth"

export async function PUT(request: Request) {

  const user = await getServerSession(authOptions)

  return Response.json({ user })
}