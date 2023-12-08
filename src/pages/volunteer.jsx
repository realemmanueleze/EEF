import React, { useEffect } from "react";
import { useRouter } from "next/router";
import importantLinks from "@/data/importantLinks";

function Volunteer() {
  const router = useRouter();

  useEffect(() => {
    router.push(importantLinks.volunteer);
  }, [router]);

  return null;
}

export default Volunteer;
