import { APP_CONFIG } from "@/data/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <section className="wrapper">
        <main className="flex flex-wrap justify-between gap-12">
          {/* Brand */}
          <div className="w-full max-w-70 text-balance">
            <h3 className="mb-4 text-lg font-bold text-white">IVC 2025</h3>
            <p className="mb-4 text-sm leading-relaxed">
              The 9th Annual Islamic Vacation Course organized by FOMWAN, in
              collaboration with UUMC and MCAN.
            </p>
            <p className="text-xs text-slate-400 italic">
              &ldquo;Guarding the heart in the age of screen&rdquo;
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Contact & Inquiries
            </h3>
            <ul className="space-y-2 text-sm">
              {["8038089766", "8106222501", "8023204151", "8027063327"].map(
                (phone, index) => (
                  <li key={index}>
                    <Link
                      href={`tel:+234${phone}`}
                      className="transition-300 tracking-widest hover:text-emerald-500"
                    >
                      +234{phone}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Venue</h3>
            <p className="text-sm">University of Uyo Central Mosque</p>
            <p className="mt-2 text-xs font-semibold text-emerald-500 uppercase">
              Uyo, Akwa Ibom State
            </p>
          </div>
        </main>

        <main className="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} {APP_CONFIG.organizers}. All Rights
          Reserved.
        </main>
      </section>
    </footer>
  );
};

export default Footer;
