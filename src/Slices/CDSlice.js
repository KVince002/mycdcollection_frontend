// slice for the cds
import {createSlice} from "@reduxjs/toolkit"

  // initialState
  const initialState={
    cds: [],
    status: "idle" | "pending" | "fulfilled" | "rejected",
    error: null
  }

  // async thunk
export async function fetchCDs(dispatch, getState){
  await fetch("http://localhost:3001/fetchallcds")
      .then((res) => res.json())
      .then((data) => dispatch({type: "CDs/addCDs", payload: data}))
      .catch((err) => console.log(err))
}

  // slice
  const slice = createSlice({
    name: "CDs",
    initialState,
    reducers: {
      addCDs: (state, action) => {
        state.cds = action.payload;
      },
      manipulateCDs: {
        reducer: (state, action) => {
          console.log("Inside CDSlice > slice > reducers > manipulatecds")
          console.log(action.payload)
          state.cds += action.payload
        },
        prepare: (value) => ({payload:value || "nothing arrived"})
      }
    }
  })

console.log(slice)

// selectors
export const selectAllCDs = (state) => state.cds;
export const  selectCDSliceError = (state) => state.error;
export const  selectCDSliceStatus = (state) => state.status;

//actions
export const {manipulateCDs, addCDs} = slice.actions;
export default slice.reducer;