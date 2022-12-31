const initState = {
  isLog: false,
};

const reducerAuth = (state = initState, action) => {
  console.log("Appel du Store et transmettre action ???????????");
  if (action.type === "IsLogin") {
    return {
      isLog: true,
    };
  }
  if (action.type === "NotLogin") {
    return {
      isLog: false,
    };
  }
  return state;
};

export default reducerAuth;
