import { configureStore } from "@reduxjs/toolkit";  
import {reducer} from "./authSlice"

export const store = configureStore({
    reducer:reducer
}) 