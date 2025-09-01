import prisma from "@/lib/db";
import SchowSchoolsLayout from "./showSchools/components/ui/schowSchoolsLayout";

export default async function Home() {
  const schools = await prisma.school.findMany();  
  return <SchowSchoolsLayout schools={schools} />;
}
