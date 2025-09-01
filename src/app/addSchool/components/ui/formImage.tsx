import Image from "next/image";
import React from "react";

const FormImage = () => {
  return (
    <div className="relative hidden w-0 flex-1 lg:block">
      <Image
        alt="Feature image"
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default FormImage;
