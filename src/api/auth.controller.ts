"use server";

import { cookies } from "next/headers";

const SESSION_ADMIN_KEY = "isAdmin";

export const logInAdmin = async (username: string, password: string) => {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  const cookieStore = await cookies();
  if (username === adminUsername && password === adminPassword) {
    cookieStore.set(SESSION_ADMIN_KEY, "true");

    return { success: true };
  } else {
    return { success: false };
  }
};

export const logOutAdmin = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_ADMIN_KEY);

  return { success: true };
};

export const isAdminLoggedIn = async () => {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get(SESSION_ADMIN_KEY);

  return adminCookie?.value === "true";
};
