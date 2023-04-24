import React, { useReducer } from "react";
import AppContext from "./AppContext";

const ACTIONS = { CHANGE: "CHANGE" };

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE:
      return {
        visibleState: !state.visibleState,
        ratingPoint: action.payload,
      };
    default:
      return { visibleState: true, ratingPoint: null };
  }
}

function ContextProvider(props) {
  const [state, dispatcher] = useReducer(reducerFunction, {
    visibleState: true, 
    ratingPoint: null,
  });

  function updateStateHandler(load) {
    dispatcher({ type: ACTIONS.CHANGE, payload: load });
  }

  return (
    <AppContext.Provider
      value={{
        ratingVisibleState: state.visibleState,
        ratingPointValue: state.ratingPoint,
        updateState: updateStateHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
