import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    getquo: [] || null
}

const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        setQuotes: (state, action: PayloadAction<any>) => {
            state.getquo = action.payload
        }
    }
})

export const {setQuotes} = quotesSlice.actions;
export default quotesSlice.reducer;
