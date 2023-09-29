import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import importantLinks from "@/data/importantLinks";

function volunteer() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(importantLinks.volunteer);
  }, []);

  return null;
}

export default volunteer;
