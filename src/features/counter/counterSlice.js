import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

const { actions, reducer } = counterSlice;
export const { increment, decrement, reset, incrementByAmount } = actions;  // xuất các action
export default reducer;  // xuất reducer