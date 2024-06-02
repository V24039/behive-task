type IPerks = {
  key: number;
  label: string;
  desc: string;
  svg: JSX.Element;
};

const Perk = ({ key, label, desc, svg }: IPerks) => {
  return (
    <div
      key={`perks${key}`}
      className="flex flex-col md:flex-row items-center gap-2 rounded-md bg-white shadow-slate-300 shadow-md p-3"
    >
      {svg}
      <p className="text-[10px] hover:text-xs hover:font-semibold transition-all">
        {label}
      </p>
      <div className="hover:first:inline">
        <p className="hidden text-[10px]">{desc}</p>
      </div>
    </div>
  );
};

export default Perk;
