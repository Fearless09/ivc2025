"use client";
import { APP_CONFIG } from "@/data/constant";
import { useScrollY } from "@/hooks/useScrollY";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { scrollY } = useScrollY();
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        `transition-300 fixed top-0 right-0 left-0 z-25 bg-transparent py-5`,
        { "bg-white/90 py-3 shadow-sm backdrop-blur-md": scrollY > 20 },
      )}
    >
      <section className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
            I
          </div>
          <span
            className={cn(
              `font-montserrat text-xl font-bold tracking-tight text-slate-800`,
              { "text-emerald-800": scrollY > 20 },
            )}
          >
            IVC 2025
          </span>
        </Link>

        <div className="hidden items-center space-x-8 text-sm font-semibold tracking-wider uppercase md:flex">
          <Link
            href={APP_CONFIG.externalRegLink}
            className={`transition-300 hover:text-emerald-600`}
          >
            Register
          </Link>
          <Link
            href="/confirm-payment"
            className={cn(
              `transition-300 text-slate-600 hover:text-emerald-600`,
              { "text-emerald-600": pathname === "/confirm-payment" },
            )}
          >
            Confirm Payment
          </Link>
          <Link
            href="/admin"
            className={`transition-300 rounded-full border-2 border-emerald-600 px-4 py-2 text-emerald-600 hover:bg-emerald-600 hover:text-white`}
          >
            Admin Portal
          </Link>
        </div>
        {/* Mobile menu trigger could go here */}
      </section>
    </nav>
  );
};

export default Navbar;
