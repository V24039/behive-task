import { IAction, IPropertyDetails } from "../types";
import {
  GET_PROPERTY_DETAILS_REQUEST,
  GET_PROPERTY_DETAILS_SUCCESS,
} from "./const";

type IIinitalState = {
  propertyDetails: IPropertyDetails[];
  meta: {
    loading: boolean;
    success: boolean;
  };
};
const initalState: IIinitalState = {
  propertyDetails: [],
  meta: {
    loading: false,
    success: false,
  },
};

const PropertyReducer = (
  state = initalState,
  action: IAction
): IIinitalState => {
  switch (action.type) {
    case GET_PROPERTY_DETAILS_REQUEST:
      return Object.assign({}, state, {
        meta: {
          loading: true,
          success: false,
        },
      });
    case GET_PROPERTY_DETAILS_SUCCESS:
      const propertyDetails = action.payload ?? [];
      return Object.assign({}, state, {
        meta: {
          loading: false,
          success: true,
        },
        propertyDetails,
      });
    default:
      return state;
  }
};

export default PropertyReducer;
