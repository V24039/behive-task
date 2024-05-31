import Direction from "./Direction";
import img from "../assests/0a74575ca6004b4bb20dcd131afc5849.jpg";
import DayButton from "./DayButton";
import BulkButton from "./BulkButton";

const Property = () => {
  return (
    <div className="flex justify-between gap-2 flex-col w-96 h-96 rounded-md bg-white shadow-slate-300 shadow-md p-3">
      <header className="flex justify-between items-center">
        <p className="font-semibold text-[20px] leading-[24.2px] w-[238px]">
          name
        </p>
        <Direction />
      </header>
      <img className="rounded-lg h-52" alt="space-img" src={img} />
      <div className="flex justify-between gap-5">
        <DayButton />
        <BulkButton />
      </div>
    </div>
  );
};

export default Property;
