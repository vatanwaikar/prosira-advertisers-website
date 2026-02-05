"use client";

import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div
      className={`
        transition-opacity duration-300 ease-out
        ${hydrated ? "opacity-100" : "opacity-0"}
      `}
    >
      {children}
    </div>
  );
}
