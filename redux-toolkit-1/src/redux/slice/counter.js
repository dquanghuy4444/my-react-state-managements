import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:1,
    reducers:{
        increment:(state) => state + 1,
        decrement:(state) => state - 1,
        test:(state , action) =>{
            const { value } = action.payload;
            console.log(value)
            console.log(state)

            return 5;
        }
    }
})

export const { increment, decrement , test } = counterSlice.actions;

export default counterSlice.reducer;