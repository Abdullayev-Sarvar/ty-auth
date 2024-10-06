import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    quotes: [] || null
}

const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        setQuotes: (state, action: PayloadAction<any>) => {
            state.quotes = action.payload
        }
    }
})

export const {setQuotes} = quotesSlice.actions;
export default quotesSlice.reducer;