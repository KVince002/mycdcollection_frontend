// slice for the cds
import {createSlice} from "@reduxjs/toolkit"

// initialState
const initialState={
	// all the cds
  cds: [],
	// specific cd
	cdSpec: [],
	// status *unused yet*
  status: "idle" | "pending" | "fulfilled" | "rejected",
	// error *unused yet*
  error: null
}

// async thunk
// todo: Comment
/*
* This is an async function that calls (dispatch) and action while fetching data form the server
* */
export async function fetchCDs(dispatch, getState){
	// fetching from the server
  await fetch("http://localhost:3001/fetchallcds")
	  // response to JSON
      .then((res) => res.json())
	  // dispatch the addCDs action and give the data payload
      .then((data) => dispatch({type: "CDs/addCDs", payload: data}))
	  // catch the error and console it
      .catch((err) => console.error(err))
}

// Accrue a specific song info from server
export async function fetchCDInfo(dispatch, getState, cdItem) {
	await fetch("http://localhost:3001/cds/"+cdItem)
		.then((res)=> res.json())
		.then((data)=> dispatch({type: "CDs/redirectCDView", payload: data}))
		.catch((error)=> console.error(error))
}

// slice
// todo: "normalize"
const slice = createSlice({
  name: "CDs",
  initialState,
  reducers: {
    addCDs: (state, action) => {
		console.log("Inside CDSlice > slice > reducers > addCDs")
	    state.cds = action.payload;
    },
	  specCDSetter: (state, action)=> {
		console.log("Inside CDSlice > slice > reducers > specCDSetter");
		  /*
		  * // Todo: Get the right payload and with query and pass the information to the CDView the render it!
		  * */
		  console.log(action.payload);
		// reset the cdSpec array first
		  state.cdSpec = [];
		  // give the data to it
		  state.cdSpec = action.payload;
	  },
  }
})

//actions
export const {addCDs, specCDSetter} = slice.actions;
export default slice.reducer;