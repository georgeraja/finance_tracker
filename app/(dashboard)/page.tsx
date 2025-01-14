"use client";

import { Button } from "@/components/ui/button";
import { UseNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = UseNewAccount();
  return (
    <div>
      <Button onClick={onOpen}>Add an account</Button>
    </div>
  );
}
