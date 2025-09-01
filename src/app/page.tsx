"use client";

import ShowSchools from "./showSchools/components/showSchools";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function Home() {
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
      <ShowSchools />
    </div>
  );
}
