import ArrowSVG from "../ArrowSVG";
type IBulkButtonProps = {
  charges: number;
  discount: number;
};

const BulkButton = ({ charges, discount }: IBulkButtonProps) => {
  const getDiscountedPrice = () => {
    const tenDays = charges * 10;
    return tenDays - (tenDays * discount) / 100;
  };

  return (
    <>
      <div className="relative flex py-2 px-4 items-center justify-between bg-primary-button border-primary-button-border border-2 w-full rounded-lg">
        <div>
          <p className="text-lg font-medium leading-tight text-left">
            Bulk Pass
          </p>
          <p className="text-xl font-semibold">
            ₹ {getDiscountedPrice()}
            <span className="text-[12px] font-medium">/ 10 Days</span>
          </p>
        </div>
        <ArrowSVG />
      </div>
      <div className="absolute mb-96 ml-60 bg-black rounded-sm text-white px-1 text-[8px]">{discount}% Discount</div>
    </>
  );
};

export default BulkButton;
