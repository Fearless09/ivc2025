"use client";

import { Member } from "@/utils/Type";
import { SearchIcon, WalletCards } from "lucide-react";
import { useMemo, useState } from "react";

const ConfirmPayment = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers: Member[] = [];
  //   const filteredMembers = useMemo(() => {
  //     return searchMembers(searchQuery);
  //   }, [searchQuery]);

  return (
    <section className="bg-slate-50 pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-4">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
            Payment Confirmation
          </h1>
          <p className="text-slate-600">
            Search for your name to confirm your registration and payment
            status.
          </p>
        </header>

        <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Search by full name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="transition-300 w-full rounded-xl border border-black/7 bg-white px-4 py-3 pl-10 text-base shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
          <SearchIcon className="absolute top-1/2 left-4 size-5 -translate-y-1/2 transform text-slate-400" />
        </form>

        <section className="overflow-hidden rounded-2xl border border-black/7 bg-white shadow-xl">
          <main className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-black/7 bg-slate-50">
                  <th className="px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Full Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/7">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <tr
                      key={member.id}
                      className="transition-300 even:bg-slate-50 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-slate-900">
                          {member.fullName}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm whitespace-nowrap text-slate-500">
                        {member.email}
                      </td>
                      <td className="px-5 py-4 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                          <span className="size-2 rounded-full bg-emerald-500"></span>
                          Confirmed
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center">
                        <WalletCards className="mb-4 size-16 text-slate-200" />
                        <p className="font-medium text-slate-400">
                          No confirmed members found.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </main>
        </section>
      </section>
    </section>
  );
};

export default ConfirmPayment;
