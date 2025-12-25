"use client";

import { useState } from "react";
import Login from "./components/Login";
import { useToggle } from "@/hooks/useToggle";

const AdminPage = () => {
  const [isAuthenticated, toggleAuthenticated] = useToggle(false);

  if (!isAuthenticated) {
    return <Login toggleAuthenticated={toggleAuthenticated} />;
  }

  return <div>AdminPage</div>;
};

export default AdminPage;
