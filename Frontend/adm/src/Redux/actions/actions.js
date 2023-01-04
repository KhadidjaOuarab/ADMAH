import { SETPRODUCT } from "../type/type";
import { SETADMINFORMATION } from "../type/type";

export const setProductAction = (payload) => {
 
    return {
      type: SETPRODUCT,
      payload: payload,
    };
  };

  export const setAdmAction = (payload) => {
 
    return {
      type: SETADMINFORMATION,
      payload: payload,
    };
  };
