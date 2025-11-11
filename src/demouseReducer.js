const [score, dispatch] = useReducer(reducer, initialScore);

function useReducer1(reducer, inittialState) {
  return [state1, dispatch];
}

const [state1, dispatch1] = useReducer1(reducer, { cart: [] });
