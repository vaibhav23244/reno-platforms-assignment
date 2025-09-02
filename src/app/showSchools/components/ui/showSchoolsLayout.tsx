"use client";

import { useState } from "react";
import ShowSchools from "./showSchools";
import { SchoolType } from "@/types/schoolType";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import searchSchoolsServerAction from "@/app/actions/searchSchoolsServerAction";

const ShowSchoolsLayout = ({
  schools: initialSchools,
}: {
  schools: SchoolType[];
}) => {
  const [query, setQuery] = useState("");
  const [schools, setSchools] = useState<SchoolType[]>(initialSchools);
  const [loading, setLoading] = useState(false);

  const placeholders = [
    "Search by School Name",
    "Search by School City",
    "Search by School State",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const results = await searchSchoolsServerAction(query);
    setSchools(results);

    setLoading(false);
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

      {loading ? (
        <p className="text-center mt-5">Loading...</p> // replace with skeleton later
      ) : (
        <ShowSchools schools={schools} />
      )}
    </div>
  );
};

export default ShowSchoolsLayout;
