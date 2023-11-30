// slice for the cds
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import thunk from "redux-thunk";

// initialState
const initialState={
	// all the cds
  cds: [],
	// specific cd's details
	details: [],
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

// async thunk for the specific cd data
export const CDDetails = createAsyncThunk(
	"cdDetails",
	async (cdId: cdItem, thunkAPI) =>{
		const response = await fetch("http://localhost:3001/cds/:cdItem")
		return response.data
	}
)


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
  },
	extraReducers: (builder) => {
	  builder.addCase(CDDetails.fulfilled, (state, action) => {
		  // CDDetails fulfilled
		  console.log("This action: "+action+ " is fulfilled")
		  // Push new cd details
		  console.log(action.payload)
		  state.details.push(action.payload)
		  state.status = "fulfilled"
	  })
		  .addCase(CDDetails.pending, (state, action) => {
			  console.log("This action: "+action+ " is pending")
			  state.status = "pending"
			  state.details = [];
		  })
		  .addCase(CDDetails.rejected, (state, action) =>{
			  console.log("This action: "+action+" is rejected")
			  state.status = "rejected"
		  })
	}
})

//actions
export const {addCDs, specCDSetter} = slice.actions;
export default slice.reducer;