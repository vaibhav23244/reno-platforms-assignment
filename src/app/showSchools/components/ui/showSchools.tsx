import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SchoolType } from "@/types/schoolType";
import { ArrowUpRight, SchoolIcon } from "lucide-react";
import Image from "next/image";

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
              Results {schools.length}
            </span>
          </div>
          <Button asChild variant="secondary" className="group">
            <Link
              href="addSchool"
              className="hidden text-sm font-medium hover:text-indigo-500 md:flex"
            >
              Add School
              <ArrowUpRight className="group-hover:rotate-45 ease-in-out transition-all duration-300" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {schools.map((school) => (
          <div key={school.id} className="group relative">
            <div className="h-48 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72">
              <Image
                src={`/schoolImages/${school.image}`}
                alt={school.name}
                width={400}
                height={300}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col py-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {school.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{school.city}</p>
              <p className="mt-1 text-xs text-gray-400">{school.address}</p>
            </div>
          </div>
        ))}

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="addSchool"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Add School
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
