import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
      {title}
    </div>
  );
};

export default Heading;
