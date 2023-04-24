import React, { useState, useContext} from "react";

import "./RatingPoints.css";

import Button from "./Button";
import AppContext from "../store/AppContext";

function RatingPoints() {
  const ctx = useContext(AppContext)
  const [point, setPoint] = useState(null);

  function clickHandler(num) {
    setPoint(num);
  }

  function submitHandler(e){
    e.preventDefault();
    if(point != null){
      ctx.updateState(point);
    }
    
  }
  

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="pointsContainer">
          <Button point={1} clickHandler={clickHandler} />
          <Button point={2} clickHandler={clickHandler} />
          <Button point={3} clickHandler={clickHandler} />
          <Button point={4} clickHandler={clickHandler} />
          <Button point={5} clickHandler={clickHandler} />
        </div>
        <button className="submitBTN" type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default RatingPoints;
