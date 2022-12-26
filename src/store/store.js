import { configureStore } from "@reduxjs/toolkit";
import statesSlice from "./features/statesSlice";
import countySlice from "./features/countySlice";
 
export const store =  configureStore({
    reducer:{
        estado: statesSlice,
        municipio: countySlice,
    },
});