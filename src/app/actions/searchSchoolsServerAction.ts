"use server";

import prisma from "@/lib/db";

export default async function searchSchoolsServerAction(q: string) {
  if (!q) {
    return await prisma.school.findMany();
  }

  const schools = await prisma.school.findMany({
    where: {
      OR: [
        { name: { contains: q } },
        { city: { contains: q } },
        { state: { contains: q } },
      ],
    },
  });

  return schools;
}
