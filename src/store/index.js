import { configureStore,  getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice.js';

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  });

export const store =configureStore({
    reducer:{
        category: categoryReducer,
    }, middleware,
    devTools: process.env.NODE_ENV !== 'production',

});