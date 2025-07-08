import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    authUser: [],
    loading: false,
    error:null
};

const registerUser = createAsyncThunk("auth/registerUser", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/register`,data).then(res => res.data);
})

const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/login`,data).then(res => res.data);
})

const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/logout`).then(res => res.data);
})



const userSlice = createSlice({
    name: "auth",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.authUser = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            registerUser.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            registerUser.fulfilled, (st, act) => {
                st.loading = false;
                st.authUser.push(act.payload)
                st.error = null;
        }).addCase(
            registerUser.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            loginUser.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            loginUser.fulfilled, (st, act) => {
            st.loading = false;
            st.authUser = act.payload;

            st.error = null;
        }).addCase(
            loginUser.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            logoutUser.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            logoutUser.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.authUser.findIndex(x=>x.id===act.payload.id)//findIndex
                st.authUser = st.authUser.splice(id,1,act.payload.newAuth)//splice
                st.error = null;
        }).addCase(
            logoutUser.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=userSlice.actions;
export {registerUser,loginUser,logoutUser};
export default userSlice.reducer;
