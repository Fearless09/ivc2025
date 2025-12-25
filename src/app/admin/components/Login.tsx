"use client";

import { logInAdmin } from "@/api/auth.controller";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Simplified hardcoded credentials for demonstration
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { success } = await logInAdmin(username, password);

    if (!success) {
      setLoginError("Invalid username or password");
      return;
    }

    setLoginError("");
  };

  return (
    <div className="bg-slate-50 px-4 pt-32 pb-24">
      <div className="wrapper max-w-md rounded-3xl border border-black/7 bg-white px-4 py-6 shadow-xl sm:p-8!">
        <header className="mb-8 text-center">
          <span className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-emerald-100">
            <LockKeyhole className="size-8 text-emerald-600" />
          </span>

          <h1 className="text-2xl font-black text-slate-900">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-500">
            Access restricted to authorized personnel
          </p>
        </header>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="transition-300 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="transition-300 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          {loginError && (
            <p className="text-xs font-bold text-red-500">{loginError}</p>
          )}
          <button
            type="submit"
            className="transition-300 mt-6 w-full cursor-pointer rounded-xl bg-emerald-600 px-3 py-3 font-bold text-white shadow-lg shadow-emerald-100 hover:bg-emerald-700 active:scale-98"
          >
            Log In
          </button>
        </form>

        {/* <p className="mt-8 text-center text-xs text-slate-400">
          For demo, use: <span className="font-bold">admin / ivc2025</span>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
