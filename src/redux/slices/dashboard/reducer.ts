import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserData, getPostData } from "./thunk";
import { User, Post } from "@/app/types/dashboard/types";

interface DashboardState {
    users: User[];
    posts: Post[];
    isLoading: boolean;
    error: string | null;
}

const initialState: DashboardState = {
    users: [],
    posts: [],
    isLoading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload; 
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(getPostData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPostData.fulfilled, (state, action) => {
              state.isLoading = false;
              state.posts = action.payload; 
          })
            .addCase(getPostData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default dashboardSlice.reducer;
