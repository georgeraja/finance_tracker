"use client";
import { useMountedState } from "react-use";

import NewAccountSheet from "@/features/accounts/components/new-account-sheet";
import React from "react";

export const SheetProvider = () => {

//same as useEffect code to fix hydration error
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};
