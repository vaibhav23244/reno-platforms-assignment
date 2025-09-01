import Link from "next/link";
import FormUI from "./formUI";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormLayout = () => {
  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div>
          <h2 className="mt-8 text-2xl/9 font-semibold tracking-tight text-gray-900 dark:text-white">
            Add School Details
          </h2>
          <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
            Fill in the form below to add a new school to the directory. All
            fields are required, and the school image will be stored in the{" "}
            <span className="font-medium">schoolImages</span> folder.
          </p>
        </div>
        <div className="mt-5">
          <FormUI />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
