import { getPropertiesRequest, getPropertiesSuccess } from "./actions";
import { store } from "./store";
// import data from '../'

export const fecthProperties = () => () => {
  store.dispatch(getPropertiesRequest());

  return fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      store.dispatch(getPropertiesSuccess(data))
    });
};
