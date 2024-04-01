import React from "react";
import { increment,decrement } from "../actions";
import { useDispatch, useSelector } from "react-redux";
function Account() {
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Account:{amount}</h4>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Account;
