import { APP_CONFIG } from "@/data/constant";
import { Banknote, ClockIcon, CreditCard } from "lucide-react";

const Details = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <section className="wrapper grid gap-8 px-4 md:grid-cols-3">
        {/* Schedule */}
        <main className="transition-300 rounded-3xl border border-slate-100 bg-slate-50 p-6 hover:shadow-lg sm:p-8">
          <span className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-emerald-100">
            <ClockIcon className="size-6 text-emerald-600" />
          </span>
          <h3 className="mb-4 text-xl font-bold text-slate-900">
            Program Schedule
          </h3>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <strong>Arrival:</strong> {APP_CONFIG.arrival}
            </p>
            <p>
              <strong>Departure:</strong> {APP_CONFIG.departure}
            </p>
          </div>
        </main>

        {/* Fees */}
        <main className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-shadow hover:shadow-lg">
          <span className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-emerald-100">
            <Banknote className="size-6 text-emerald-600" />
          </span>
          <h3 className="mb-4 text-xl font-bold text-slate-900">
            Registration Fees
          </h3>
          <div className="space-y-2 text-sm text-slate-600">
            <p className="flex justify-between">
              <span>Primary Classes:</span>{" "}
              <span className="font-bold text-emerald-600">
                ₦{APP_CONFIG.fees.primary}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Secondary & Tertiary:</span>{" "}
              <span className="font-bold text-emerald-600">
                ₦{APP_CONFIG.fees.secondaryTertiary}
              </span>
            </p>
          </div>
        </main>

        {/* Bank */}
        <main className="rounded-3xl bg-emerald-600 p-8 text-white shadow-xl shadow-emerald-100">
          <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/10">
            <CreditCard className="size-6 text-white" />
          </div>
          <h3 className="mb-4 text-xl font-bold">Payment Details</h3>
          <div className="space-y-2 text-sm text-emerald-50">
            <p>
              <strong>Bank:</strong> {APP_CONFIG.bankDetails.bank}
            </p>
            <p>
              <strong>Account:</strong> {APP_CONFIG.bankDetails.account}
            </p>
            <p>
              <strong>Name:</strong> {APP_CONFIG.bankDetails.name}
            </p>
          </div>
        </main>
      </section>
    </section>
  );
};

export default Details;
