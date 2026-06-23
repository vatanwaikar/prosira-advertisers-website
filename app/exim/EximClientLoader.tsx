"use client";

import dynamic from "next/dynamic";
import React from "react";

const EximPageClient = dynamic(() => import("./EximPageClient"), { ssr: false });

export default function EximClientLoader() {
  return <EximPageClient />;
}
