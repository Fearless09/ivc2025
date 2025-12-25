"use client";

import { APP_CONFIG } from "@/data/constant";
import { useAddMember } from "@/hooks/useAddMember";
import { useDeleteMember } from "@/hooks/useDeleteMember";
import { useGetMembers } from "@/hooks/useGetMembers";
import { cn } from "@/utils/cn";
import { Trash } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

const Admin: FC<{ logOut: () => void }> = ({ logOut }) => {
  const { members, refetch } = useGetMembers();
  const { addMemberAsync, isPending: addingMember } = useAddMember();
  const { deleteMemberAsync, isPending: deletingMember } = useDeleteMember();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleAddMember = async () => {
    if (!newName || !newEmail) return;

    addMemberAsync({ name: newName, email: newEmail }).then(() => {
      refetch();
      setNewName("");
      setNewEmail("");
    });
  };
  const handleLogout = () => {
    logOut();
    sessionStorage.removeItem("isAdmin");
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this member?")) {
      deleteMemberAsync(id).then(() => {
        refetch();
      });
    }
  };
  return (
    <section className="min-h-screen bg-slate-50 pt-32 pb-24">
      <section className="wrapper max-w-6xl">
        <header className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-black text-slate-900">
              Admin Dashboard
            </h1>
            <p className="text-slate-500">
              Manage registered and paid members.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="cursor-pointer rounded-full bg-slate-200 px-6 py-2 text-sm font-bold text-slate-700 transition-all hover:bg-slate-300"
          >
            Log Out
          </button>
        </header>

        <section className="grid gap-8 lg:grid-cols-3">
          {/* Add Member Form */}
          <main className="relative rounded-2xl border border-slate-100 bg-white px-4 py-6 shadow-sm sm:px-6 lg:sticky lg:top-32 lg:col-span-1">
            <h2 className="mb-6 text-lg font-bold text-slate-900">
              Add Paid Member
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddMember();
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter full name"
                  className="transition-300 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="transition-300 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={addingMember}
                className={cn(
                  `transition-300 mt-4 w-full rounded-xl bg-emerald-600 p-3 font-semibold text-white shadow-lg hover:bg-emerald-700 active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`,
                )}
              >
                {addingMember ? "Processing..." : "Add Member"}
              </button>
            </form>
          </main>

          {/* Member List */}
          <main className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
              <h2 className="font-bold text-slate-900">
                Paid Member List ({members.length})
              </h2>

              <div className="flex divide-x divide-white/15 overflow-clip rounded-xl text-xs font-semibold text-white">
                <Link
                  href={APP_CONFIG.formResponse}
                  target="_blank"
                  className="transition-300 bg-emerald-600 px-3 py-2.5 hover:bg-emerald-700"
                >
                  Members
                </Link>
                <Link
                  href={APP_CONFIG.formResponseSheet}
                  target="_blank"
                  className="transition-300 bg-emerald-700 px-3 py-2.5 hover:bg-emerald-600"
                >
                  Spreadsheet
                </Link>
              </div>
            </div>

            <main className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-y border-black/5 bg-slate-50">
                    <th className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase">
                      Member
                    </th>
                    <th className="px-5 py-3.5 text-xs font-bold text-slate-500 uppercase">
                      Status
                    </th>
                    <th className="px-5 py-3.5 text-right text-xs font-bold text-slate-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-black/5">
                  {members.length > 0 ? (
                    members.map((member) => (
                      <tr
                        key={member.id}
                        className="even:bg-slate-50 hover:bg-slate-50"
                      >
                        <td className="px-5 py-3">
                          <div className="text-sm font-bold text-slate-900">
                            {member.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {member.email}
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-700 uppercase">
                            Paid
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <button
                            onClick={() => handleDelete(member.id)}
                            className="transition-300 cursor-pointer text-red-500 hover:text-red-700 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete member"
                            disabled={deletingMember}
                          >
                            <Trash className="size-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-12 text-center text-sm text-slate-400"
                      >
                        No members registered yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </main>
          </main>
        </section>
      </section>
    </section>
  );
};

export default Admin;
