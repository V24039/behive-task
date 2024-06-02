import Perk from "./Perk";
import { perks } from "./consts";

const Perks = () => {
  return (
    <>
      <p className="font-bold text-4xl">Why Choose us?</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {perks?.map((value, index) => (
          <Perk key={index} label={value.label} desc={value.desc} svg={value.svg}/>
        ))}
      </div>
    </>
  );
};

export default Perks;
