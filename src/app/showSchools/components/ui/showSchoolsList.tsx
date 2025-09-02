import Link from "next/link";
import Image from "next/image";
import { SchoolType } from "@/types/schoolType";

const ShowSchoolsList = ({ schools }: { schools: SchoolType[] }) => {
  return (
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
  );
};

export default ShowSchoolsList;
