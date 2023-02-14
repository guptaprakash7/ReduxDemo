const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
