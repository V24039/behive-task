import Direction from "./Direction";
import DayButton from "./DayButton";
import BulkButton from "./BulkButton";
import { useSelector } from "react-redux";
import { IPropertyDetails } from "../types";

type IPropertyProps = {
  index: number;
};

const Property = ({ index }: IPropertyProps) => {
  const properties = useSelector(
    (state: any) => state.property.propertyDetails[index]
  ) as IPropertyDetails;

  return (
    <div className="aspect-square flex justify-between gap-2 flex-col md:w-96 md:h-96 rounded-md bg-white shadow-slate-300 shadow-md p-3">
      <header className="flex justify-between items-center">
        <p className="font-semibold text-xl">{properties.name}</p>
        <Direction />
      </header>
      <img
        className="rounded-lg md:h-52"
        alt="space-img"
        src={properties.images[0]}
      />
      <div className="flex justify-between gap-5">
        <DayButton charges={properties.day_pass_price} />
        <BulkButton
          charges={properties.day_pass_price}
          discount={properties.day_pass_discounts_percentage[10].value}
        />
      </div>
    </div>
  );
};

export default Property;
