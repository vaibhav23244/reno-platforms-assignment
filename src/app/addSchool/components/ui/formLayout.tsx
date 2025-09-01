import FormUI from "./formUI";

const FormLayout = () => {
  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
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
