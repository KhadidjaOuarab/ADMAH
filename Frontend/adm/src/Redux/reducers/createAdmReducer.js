import { SETADMINFORMATION } from "../type/type";
const initState = [{
  admNo: "",
  agentCode: "",
  documentNumber: "",
  admType: "",
  anomaly: "",
  currencyCode: "",
  totalAmount: "",
  username: "",
  issueCity: "",
  issueDate: "",
  flightNumber: "",
  flightDate: "",
  froms: "",
  tos: "",
  exchangeNumber: "",
  exchangedDate: "",
  couponNumberExchange: "",
  agentCodeExchange: "",
  refundNumber: "",
  refundDate: "",
  couponNumberRefund: "",
  agentCodeRefund: "",
}];

const reducerSetAdmInformation = (state = initState, action) => {
  console.log("Appel du Store et transmettre action ???????????");
  console.log(action.payload);
  // Check to see if the reducer cares about this action
  if (action.type === SETADMINFORMATION) {
    // If so, make a copy of `state`
    console.log();
    return {
         ...state, state: action.payload 
      
    };
  }
  // otherwise return the existing state unchanged

  return state;
};

export default reducerSetAdmInformation;
