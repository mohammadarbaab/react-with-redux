import React from "react";
import Account from "./components/Account";
import { useSelector } from "react-redux";
import Account2 from "./components/Account2";

function App() {
  const amount = useSelector((state) => state.account.amount);
  return (
    <div>
      <h4>App</h4>
      <h3>Current Amount:{amount}</h3>
      <Account />
      <Account2/>
    </div>
  );
}

export default App;
