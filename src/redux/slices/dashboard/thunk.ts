import { THIREPARTY_API } from "@/config/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
    "dashboard/getUserData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
            `${THIREPARTY_API}/users` 
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getPostData = createAsyncThunk(
    "dashboard/getPostData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${THIREPARTY_API}/posts`
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
