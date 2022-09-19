const inititalState = 10;
const counterReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
