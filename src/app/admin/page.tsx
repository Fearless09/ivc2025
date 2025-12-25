"use client";

import { useEffect } from "react";
import Admin from "./components/Admin";
import Login from "./components/Login";
import { useToggle } from "@/hooks/useToggle";

const AdminPage = () => {
  const [isAuthenticated, toggleAuthenticated] = useToggle(false);

  useEffect(() => {
    const checkSession = sessionStorage.getItem("isAdmin");
    if (checkSession) {
      toggleAuthenticated(true);
    }
  }, [toggleAuthenticated]);

  if (!isAuthenticated) {
    return <Login logIn={() => toggleAuthenticated(true)} />;
  }

  return <Admin logOut={() => toggleAuthenticated(false)} />;
};

export default AdminPage;
