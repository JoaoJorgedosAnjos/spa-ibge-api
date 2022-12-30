import { configureStore } from "@reduxjs/toolkit";
import statesSlice from "./features/statesSlice";
import countySlice from "./features/countySlice";
import infosSlice from "./features/infosSlice";

export const store = configureStore({
    reducer: {
        estados: statesSlice,
        municipios: countySlice,
        infos: infosSlice,
    },
});