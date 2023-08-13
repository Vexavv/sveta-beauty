
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchData} from "../helpers/dataHelpers";

const initialState = {
    status: null,
    error: '',
    nails: [],
    brows: [],
    permanent: [],
    isOpen: false, // modal window
    selectedProduct: null, // the right element
};

const requestsConfig = [
    {
        name: 'fetchAsyncNails',
        url: './data/nails.json',
        property: 'nails',
    },
    {
        name: 'fetchAsyncBrows',
        url: './data/brows.json',
        property: 'brows',
    },
    {
        name: 'fetchAsyncPermanent',
        url: './data/permanent.json',
        property: 'permanent',
    },
];

const asyncThunks = requestsConfig.map((config) => {
    return createAsyncThunk(
        `main/${config.name}`,
        async (_, { rejectWithValue }) => {
            try {
                const response = await fetchData(config.url);
                return response;
            } catch (error) {
                return rejectWithValue(error.message);
            }
        }
    );
});

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleModal(state, action) {
            state.isOpen = action.payload;
        },
        getElement(state, action) {
            state.selectedProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        asyncThunks.forEach((asyncThunk, index) => {
            const config = requestsConfig[index];
            builder
                .addCase(asyncThunk.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(asyncThunk.fulfilled, (state, action) => {
                    state[config.property] = action.payload;
                    state.status = 'loaded';
                })
                .addCase(asyncThunk.rejected, (state, action) => {
                    state.error = action.payload;
                    state.status = 'loaded';
                });
        });
    },
});

export const { toggleModal, getElement } = mainSlice.actions;
export const fetchAsyncNails = asyncThunks[0];
export const fetchAsyncBrows = asyncThunks[1];
export const fetchAsyncPermanent = asyncThunks[2];


export default mainSlice.reducer;

