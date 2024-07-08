import { authOptions } from "@/app/_libs/auth";
import { db } from "@/app/_libs/prisma";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const { user }: any = await getServerSession(authOptions)
  const body = await request.json();

  console.log(user);
  console.log(body);

  const barber = await db.barber.findFirst({ where: { userId: user.id } })

  if (barber) {
    console.log("ATUALIZADO");

    const data = await db.barber.update({
      where: { id: barber.id },
      data: {
        openDays: body.days,
        openHours: body.hours,
        userId: user.id
      }
    })
  } else {
    console.log("CRIADO");

    const data = await db.barber.create({
      data: {
        openDays: body.days,
        openHours: body.hours,
        userId: user.id
      }
    })
  }

  return Response.json({})
}