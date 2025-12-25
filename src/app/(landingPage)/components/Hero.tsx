import { APP_CONFIG } from "@/data/constant";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-emerald-50 pt-20"
    >
      <>
        <span className="bg-emerald-pattern absolute inset-0 opacity-3" />
        <span className="absolute -top-24 -right-24 size-96 rounded-full bg-emerald-200 opacity-30 blur-3xl" />
        <span className="absolute top-1/2 -left-24 size-64 rounded-full bg-emerald-300 opacity-20 blur-3xl" />
      </>

      <section className="wrapper relative z-10 grid items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:py-24">
        <main className="text-center text-balance lg:text-left">
          <span className="animate-fade-in mb-6 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-700 uppercase">
            9th Annual Youth Camp
          </span>

          <h1 className="mb-6 text-4xl leading-tight font-black text-slate-900 md:text-6xl">
            Guarding the Heart <br />
            <span className="text-emerald-600">in the Age of Screens</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed font-medium text-slate-600 italic md:text-xl lg:mx-0">
            "{APP_CONFIG.themeSubtext}"
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href={APP_CONFIG.externalRegLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-300 rounded-full bg-emerald-600 px-8 py-2.5 text-base font-semibold text-white shadow-xl shadow-emerald-200 hover:scale-105 hover:bg-emerald-700"
            >
              Register Now
            </Link>
            <Link
              href="/confirm-payment"
              className="transition-300 rounded-full border-2 border-emerald-100 bg-white px-8 py-2.5 text-base font-semibold text-emerald-700 hover:border-emerald-600 hover:bg-emerald-100"
            >
              Check Payment List
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-4 text-sm font-semibold text-slate-500 lg:justify-start">
            <span className="flex items-center gap-2">
              <Calendar className="size-5 text-emerald-500" />
              {APP_CONFIG.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-5 text-emerald-500" />
              Uyo, AKS
            </span>
          </div>
        </main>

        <main className="group relative aspect-60/45">
          <div className="transition-300 absolute inset-0 rounded-3xl bg-emerald-400 opacity-10 blur-2xl group-hover:opacity-30" />
          <Image
            src="https://picsum.photos/id/77/1631/1102"
            alt="Islamic Architecture Placeholder"
            fill
            sizes="100%"
            preload
            className="relative rounded-3xl border-4 border-white object-cover object-center drop-shadow-2xl"
          />
        </main>
      </section>
    </section>
  );
};

export default Hero;
