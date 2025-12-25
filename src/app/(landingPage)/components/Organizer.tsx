const Organizer = () => {
  return (
    <section className="bg-white py-24">
      <section className="wrapper text-center">
        <h2 className="mb-12 text-sm font-bold tracking-widest text-emerald-600 uppercase">
          Proudly Organized By
        </h2>

        <ul className="group flex flex-wrap items-start justify-center gap-12">
          {orgs.map((org, index) => (
            <li
              key={index}
              className="transition-300 flex flex-col items-center opacity-80 group-hover:opacity-100"
            >
              <span className="mb-4 flex size-24 items-center justify-center rounded-full bg-emerald-50 font-bold text-emerald-800">
                {org.abbr}
              </span>
              <span className="max-w-30 text-xs font-semibold text-slate-500">
                {org.full}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Organizer;

const orgs = [
  {
    abbr: "FOMWAN",
    full: "Federation of Muslim Women's Associations in Nigeria",
  },
  { abbr: "UUMC", full: "University of Uyo Muslim Community" },
  { abbr: "MCAN", full: "Muslim Corpers Association of Nigeria" },
];
