import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser : null,
        isFetching:false,
        error: false,
        users:[]
    },
    reducers:{
        //SET ERROR
        setError:(state, error)=>{
            state.error = error;
        },
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser= action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        //GET ALL
        getUserStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        getUserSuccess: (state, action)=>{
            state.isFetching = false;
            state.users = action.payload;
        },
        getUserFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteUserStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        deleteUserSuccess: (state, action)=>{
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item)=> item._id === action.payload),
                1
            );
        },
        deleteCurrentUserSuccess: (state)=>{
            state.isFetching = false;
            state.currentUser = null;
        },
        deleteUserFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {loginStart, loginSuccess, loginFailure,
            getUserFailure, getUserStart, getUserSuccess, setError,
            deleteUserFailure, deleteUserStart, deleteUserSuccess, deleteCurrentUserSuccess,
            } = userSlice.actions;
export default userSlice.reducer;