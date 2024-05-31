import ArrowSVG from "../ArrowSVG";

const DayButton = () => {
  return (
    <div className="flex px-4 items-center justify-between bg-secondary-button w-full rounded-lg">
      <div>
        <p className="text-lg font-medium leading-tight text-left">
          Day Pass
        </p>
        <p className="text-xl font-semibold">
          ₹ 300
          <span className="text-[12px] font-medium">
            / Day
          </span>
        </p>
      </div>
      <ArrowSVG />
    </div>
  );
};

export default DayButton;
