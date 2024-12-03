"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const WellcomeMessage = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Wellcome back {isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        Here`s your Financial Report Overview
      </p>
    </div>
  );
};

export default WellcomeMessage;
