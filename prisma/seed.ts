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
        image: "La_Martiniere_College_Lucknow.jpeg",
        email_id: "principal@lamartinierelucknow.org",
      },
      {
        name: "Jagran Public School",
        address: "Viraj Khand - 2, Gomti Nagar, Lucknow-226010, Gomti Nagar, Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
        contact: "7081891282",
        image: "Jagran_Public_School_Lucknow.jpeg",
        email_id: "jpslko@rediffmail.com",
      },
      {
        name: "Seth Anandram Jaipuria",
        address: "Sector-D, Pocket-3, Sushant Golf City, Shaheed path, Lucknow, 226030, Gomti Nagar, Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
        contact: "9721081098",
        image: "Seth_Anandram_Jaipuria_Lucknow.jpeg",
        email_id: "	sajslko@jaipuria.edu.in",
      },
      {
        name: "Lucknow Public School Vinamra Khand",
        address: "Vinamra Khand, Gomti Nagar, Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
        contact: "8429830069",
        image: "Lucknow_Public_School_Vinamra_Khand_Lucknow.jpeg",
        email_id: "lpc_gtnr@yahoo.in",
      },
      {
        name: "Fortune World School",
        address: "Express Way, Sector-105, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        contact: "9650299686",
        image: "Fortune_World_School_Noida.jpeg",
        email_id: "school@fortuneworldschool.com",
      },
      {
        name: "Sapphire International School Noida",
        address: "SS-1, Sector 70, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        contact: "9650546546",
        image: "Sapphire_International_School_Noida.jpeg",
        email_id: "info@sapphireschool.in",
      },
      {
        name: "The Paras World School",
        address: "Rose Wood City, Main Sector Road, Sector 50, Gurgaon",
        city: "Gurgaon",
        state: "Haryana",
        contact: "7042496985",
        image: "The_Paras_World_School_Gurgaon.jpeg",
        email_id: "admissions@parasworldschool.com",
      },
      {
        name: "Pathways World School Aravali",
        address: "Off Gurugram, Sohna Road, Gurgaon",
        city: "Gurgaon",
        state: "Haryana ",
        contact: "9818666644",
        image: "Pathways_World_School_Aravali_Gurgaon.jpeg",
        email_id: "school.aravali@pathways.in",
      },
    ],
  });
}

main()
  .then(() => console.log("Seeding complete"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
