function useMyState(initialState) {
  let state = initialState;
  function setState(newState) {
    state = newState;
    // * Re render component nếu thấy state đã thay đổi
  }

  //   return [state, setState];
  return { state, setState };
}

export { useMyState };

const [count, setCount] = useMyState(0);
const { state: count, setState: setCount } = useMyState(0);
