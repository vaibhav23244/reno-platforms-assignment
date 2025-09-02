import prisma from "@/lib/db";
import ShowSchoolsLayout from "./showSchools/components/ui/showSchoolsLayout";

export default async function Home() {
  const schools = await prisma.school.findMany();
  return <ShowSchoolsLayout schools={schools} />;
}
