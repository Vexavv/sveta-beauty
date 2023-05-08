import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
    trending: null,
    nails: [],
    isOpen: false,// modal window
    selectedProduct: null, //  the right element
}

export const fetchAsyncNails = createAsyncThunk(
    'main/fetchAsyncNails',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('/data/nails.json');
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)



const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
//switch modal windows
        toggleModal(state, action) {
            state.isOpen = action.payload
        },
        //getting the right element
        getElement(state, action) {
            state.selectedProduct = action.payload
        },
    },
    extraReducers: builder => {
        builder
            // .addCase(fetchAsyncNails.pending, (state) => {
            //     state.status = 'loading';
            // })
            .addCase(fetchAsyncNails.fulfilled, (state, action) => {
                state.nails = action.payload;
                // state.status = 'loaded';
            })
            // .addCase(fetchAsyncNails.rejected, (state, action) => {
            //     state.error = action.payload;
            //     state.status = 'loaded';
            // })

    }

})
export const { toggleModal, getElement} = mainSlice.actions
export default mainSlice.reducer;