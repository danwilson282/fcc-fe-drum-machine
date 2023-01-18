import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'testing',
  status: 'idle',
};


export const displaySlice = createSlice({
  name: 'display',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateDisplay: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateDisplay} = displaySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDisplay = (state) => state.display.value;

export default displaySlice.reducer;
