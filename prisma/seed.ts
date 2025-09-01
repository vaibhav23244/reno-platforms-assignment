import prisma from "@/lib/db";

async function main() {
  await prisma.school.createMany({
    data: [
      {
        name: "La Martiniere College",
        address: "La Martiniere College Road, Hazratganj, Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
        contact: "9454469226",
        image: "La_Martiniere_College_Lucknow_.jpeg",
        email_id: "principal@lamartinierelucknow.org",
      },
    ],
  });
}

main()
  .then(() => console.log("Seeding complete"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
