import { configureStore,  getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice.js';
import productReducer from './product/productSlice.js';
import orderReducer, { localStorageMiddleware } from './order/orderSlice.js';
import modalReducer from './modalDelivery/modalDeliverySlice.js';
import formReducer from './form/formSlice.js';



/*const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  });*/

export const store =configureStore({
    reducer:{
        category: categoryReducer,
        product: productReducer,
        order:orderReducer,
        modal: modalReducer,
        form: formReducer,
    },
    middleware: getDefaultMiddleware =>{
       const mdws = getDefaultMiddleware().concat(localStorageMiddleware)
       return mdws
    }
   /* middleware,
    devTools: process.env.NODE_ENV !== 'production',*/
    
});