import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SchoolType } from "@/types/schoolType";
import ShowSchoolsList from "./showSchoolsList";
import { ArrowUpRight, SchoolIcon } from "lucide-react";

export default function ShowSchools({ schools }: { schools: SchoolType[] }) {
  if (schools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <SchoolIcon className="h-10 w-10 text-gray-400" />
        </div>
        <h2 className="mt-6 text-lg font-semibold text-gray-900">
          No schools added yet
        </h2>
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          Start building your school directory by adding the first school.
        </p>
        <Button asChild className="mt-6 group">
          <Link href="addSchool">
            Add School
            <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div>
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Schools Directory
            </h2>
            <span className="text-sm font-medium text-indigo-600">
              {schools.length} Results Found
            </span>
          </div>
          <Button asChild variant="secondary" className="group">
            <Link
              href="addSchool"
              className="hidden text-sm font-medium md:flex"
            >
              Add School
              <ArrowUpRight className="group-hover:rotate-45 ease-in-out transition-all duration-300" />
            </Link>
          </Button>
        </div>
      </div>
      <ShowSchoolsList schools={schools} />
    </div>
  );
}
