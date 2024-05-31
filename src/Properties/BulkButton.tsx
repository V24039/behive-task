import React from "react";
import ArrowSVG from "../ArrowSVG";

const BulkButton = () => {
  return (
    <div className="flex py-2 px-4 items-center justify-between bg-primary-button w-full rounded-lg">
      <div>
        <p className="text-lg font-medium leading-tight text-left">
          Bulk Pass
        </p>
        <p className="text-xl font-semibold">
          ₹ 2400
          <span className="text-[12px] font-medium">
            / 10 Days
          </span>
        </p>
      </div>
      <ArrowSVG/>
    </div>
  );
};

export default BulkButton;
