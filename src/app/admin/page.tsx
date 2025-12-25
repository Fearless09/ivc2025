"use client";

import Admin from "./components/Admin";
import Login from "./components/Login";
import { useToggle } from "@/hooks/useToggle";

const AdminPage = () => {
  const [isAuthenticated, toggleAuthenticated] = useToggle(false);

  if (!isAuthenticated) {
    return <Login logIn={() => toggleAuthenticated(true)} />;
  }

  return <Admin logOut={() => toggleAuthenticated(false)} />;
};

export default AdminPage;
