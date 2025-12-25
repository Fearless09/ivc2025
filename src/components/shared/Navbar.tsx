"use client";
import { APP_CONFIG } from "@/data/constant";
import { useClose } from "@/hooks/useClose";
import { useScrollY } from "@/hooks/useScrollY";
import { useToggle } from "@/hooks/useToggle";
import { cn } from "@/utils/cn";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, toggleOpenMenu] = useToggle(false);
  const { scrollY } = useScrollY();
  const pathname = usePathname();

  const menuRef = useClose(() => toggleOpenMenu(false));

  return (
    <nav
      className={cn(
        `transition-300 fixed top-0 right-0 left-0 z-25 bg-transparent py-5`,
        { "bg-white/90 py-3 shadow-sm backdrop-blur-md": scrollY > 20 },
      )}
    >
      <section className="wrapper">
        <main className="flex items-center justify-between">
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

          <div className="hidden items-center space-x-8 text-sm font-semibold tracking-wider sm:flex">
            <Link
              href={APP_CONFIG.externalRegLink}
              target="_blank"
              className={`transition-300 text-slate-600 hover:text-emerald-600`}
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

          <button
            className="transition-300 cursor-pointer text-slate-600 hover:text-emerald-600 sm:hidden [&_svg]:size-6"
            onClick={() => toggleOpenMenu()}
          >
            {openMenu ? <XIcon /> : <MenuIcon />}
          </button>
        </main>

        {/* Mobile menu trigger could go here */}
        <main
          className={cn(
            "transition-300 mt-4 max-h-35 overflow-clip rounded-2xl border-2 border-black/5 bg-slate-50 text-sm font-medium",
            { "pointer-events-none -mt-1 max-h-0 opacity-0": !openMenu },
          )}
          ref={menuRef}
        >
          <Link
            href={APP_CONFIG.externalRegLink}
            target="_blank"
            className={`transition-300 block px-4 py-3 text-slate-600 hover:bg-emerald-500 hover:text-white`}
            onClick={() => toggleOpenMenu(false)}
          >
            Register
          </Link>
          <Link
            href={"/confirm-payment"}
            className={`transition-300 block px-4 py-3 text-slate-600 hover:bg-emerald-500 hover:text-white`}
            onClick={() => toggleOpenMenu(false)}
          >
            Confirm Payment
          </Link>

          <Link
            href={"/admin"}
            className={`transition-300 block px-4 py-3 text-slate-600 hover:bg-emerald-500 hover:text-white`}
            onClick={() => toggleOpenMenu(false)}
          >
            Admin Portal
          </Link>
        </main>
      </section>
    </nav>
  );
};

export default Navbar;
