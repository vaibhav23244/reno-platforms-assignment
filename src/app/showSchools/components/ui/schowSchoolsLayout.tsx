"use client";

import ShowSchools from "./showSchools";
import { SchoolType } from "@/types/schoolType";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const ShowSchoolsLayout = ({ schools }: { schools: SchoolType[] }) => {
  const placeholders = [
    "Search by School Name",
    "Search by School City",
    "Search by School State",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="mt-10">
      <h2 className="mb-10 text-xl text-center sm:text-3xl">
        Your Gateway to Quality Education
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <ShowSchools schools={schools} />
    </div>
  );
};

export default ShowSchoolsLayout;
