"use server";

import fs from "fs";
import path from "path";
import { z } from "zod";
import prisma from "@/lib/db";
import { addSchoolFormSchema } from "@/schema/addSchoolFormSchema";

export async function addSchoolsServerAction(data: z.infer<typeof addSchoolFormSchema>) {
  let filename = "";

  if (data.image instanceof File) {
    filename = `${data.image.name}`;
    const buffer = Buffer.from(await data.image.arrayBuffer());

    const uploadPath = path.join(
      process.cwd(),
      "public",
      "schoolImages",
      filename
    );
    await fs.promises.writeFile(uploadPath, buffer);
  }

  return await prisma.school.create({
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      state: data.state,
      contact: data.contact,
      email_id: data.email_id,
      image: filename,
    },
  });
}
