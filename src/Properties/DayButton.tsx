import ArrowSVG from "../ArrowSVG";

type IDayButtonProps = {
  charges: number;
};

const DayButton = ({ charges }: IDayButtonProps) => {
  return (
    <div className="flex px-4 items-center justify-between bg-secondary-button border-stroke-darkgray border-2 w-full rounded-lg">
      <div>
        <p className="text-lg font-medium leading-tight text-left">Day Pass</p>
        <p className="text-xl font-semibold">
          ₹ {charges}
          <span className="text-[12px] font-medium">/ Day</span>
        </p>
      </div>
      <ArrowSVG />
    </div>
  );
};

export default DayButton;
