import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuotesState {
    getquo: any[]
}

const initialState: QuotesState = {
    getquo: []
}

const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        setQuotes: (state, action: PayloadAction<any[]>) => {
            state.getquo = action.payload;
        }
    }
})

export const { setQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;
