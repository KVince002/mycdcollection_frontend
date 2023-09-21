// this is the store (redux-toolkit)
import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import CDSlice from "../Slices/CDSlice";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const Store = configureStore(
	{
		reducer:{
			CDSlice: CDSlice,
		}
	},
	composedEnhancer)

export default Store