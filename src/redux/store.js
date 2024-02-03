// store.js file - redux 

import { configureStore } from "@reduxjs/toolkit";
import uReducer from "./uSlice";

export const store = configureStore({

    reducer: {
        uReducer,
    },
})