import React, { useEffect } from "react";
import Property from "./Property";
import { store } from "../redux/store";
import { fecthProperties } from "../redux/middleware";
import { useSelector } from "react-redux";
import { IPropertyDetails } from "../types";

const Properties = () => {
  const properties = useSelector(
    (state: any) => state.property.propertyDetails
  ) as IPropertyDetails[];

  useEffect(() => {
    store.dispatch(fecthProperties());
  }, []);

  return (
    <div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
      {properties?.map((_, index) => (
        <Property index={index}/>
      ))}
    </div>
  );
};

export default Properties;
