import { SETPRODUCT } from "../type/type";


export const setProductAction = (payload) => {
  return function (dispatch, getState) {
    return {
      type: SETPRODUCT,
      payload: payload,
    };
  };
};
