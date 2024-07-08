import { db } from "@/app/_libs/prisma";

export async function GET() {
  const data = await db.user.findMany({ where: { type: { equals: "BARBER" } }, include: { barbers: true } });

  console.log(data[0].barbers);

  return Response.json(data)
}