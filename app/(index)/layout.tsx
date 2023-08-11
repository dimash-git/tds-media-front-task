"use client";

import React from "react";

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[90%] xl:max-w-5xl mx-auto">{children}</div>;
};

export default IndexLayout;
