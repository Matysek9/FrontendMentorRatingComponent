import React from "react";
import { createContext } from "react";

const AppContext = createContext({
    ratingVisibleState : true,
    ratingPointValue : null,
    updateState: ()=>{}
})

export default AppContext;