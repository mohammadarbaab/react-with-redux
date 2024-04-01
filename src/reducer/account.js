import { dec, inc } from "../actions";

export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    default:
      return state;
  }
}
