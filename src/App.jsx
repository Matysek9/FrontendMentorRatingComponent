import React, { useContext } from "react";

import Card from "./components/Card";
import "./App.css";
import Rating from "./components/Rating";
import AppContext from "./store/AppContext";
import Thanks from "./components/Thanks";

function App() {
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.ratingVisibleState && <Rating />}
      {!ctx.ratingVisibleState && <Thanks/>}
    </>
  );
}

export default App;
