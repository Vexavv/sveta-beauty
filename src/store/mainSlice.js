import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    trending: null,
}
const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {

    },

})
// export const {} = mainSlice.actions
export default mainSlice.reducer;