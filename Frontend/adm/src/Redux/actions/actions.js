import { SETPRODUCT } from "../type/type";


export const setProductAction = (payload) => {
 
    return {
      type: SETPRODUCT,
      payload: payload,
    };
  };

