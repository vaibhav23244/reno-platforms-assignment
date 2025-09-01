import prisma from "@/lib/db";

async function main() {
  await prisma.school.createMany({
    data: [
      {
        name: "Green Valley High School",
        address: "123 Main St",
        city: "Mumbai",
        state: "Maharashtra",
        contact: "9876543210",
        image: "testImages/school1.jpg",
        email_id: "contact@gvhs.edu",
      },
      {
        name: "Sunrise Public School",
        address: "45 Park Lane",
        city: "Delhi",
        state: "Delhi",
        contact: "9123456780",
        image: "testImages/school2.jpg",
        email_id: "info@sunrise.edu",
      },
    ],
  });
}

main()
  .then(() => console.log("Seeding complete"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
