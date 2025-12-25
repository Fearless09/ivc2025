import Admin from "./components/Admin";
import Login from "./components/Login";
import { isAdminLoggedIn } from "@/api/auth.controller";

const AdminPage = async () => {
  const isAuthenticated = await isAdminLoggedIn();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <Admin />;
};

export default AdminPage;
