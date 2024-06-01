import { IPropertyDetails } from "../types";
import {
  GET_PROPERTY_DETAILS_REQUEST,
  GET_PROPERTY_DETAILS_SUCCESS,
} from "./const";

export function getPropertiesRequest() {
  return {
    type: GET_PROPERTY_DETAILS_REQUEST,
  };
}

export function getPropertiesSuccess(payload: IPropertyDetails) {
  return {
    type: GET_PROPERTY_DETAILS_SUCCESS,
    payload,
  };
}
