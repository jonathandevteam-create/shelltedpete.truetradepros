"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // for app router
// import { useRouter } from "next/router"; // only for pages router

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/not-found");
  }, [router]);

  return null;
}
