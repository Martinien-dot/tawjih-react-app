import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbUsers: [],
    loading: false,
    error:null
};

const getUsers = createAsyncThunk("user/getUsers", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/users").then(res => res.data);
})

// const addUser = createAsyncThunk("user/addUser", async (data) => {
//     return await Axios.post("http://127.0.0.1:8000/api/users",data).then(res => res.data);
// })

const updateUser = createAsyncThunk("user/updateUser", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/users${data.id}`,data.content).then(res => res.data);
})

const deleteUser = createAsyncThunk("user/deleteUser", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/users${data}`).then(res => res.data);
})

const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbUsers = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getUsers.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getUsers.fulfilled, (st, act) => {
            st.loading = false;
            st.dbUsers = act.payload;
            st.error = null;
        }).addCase(
            getUsers.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        // }).addCase(
        //     addUser.pending, (st) => {
        //     st.loading = true;
        //     st.error = null;
        // }).addCase(
        //     addUser.fulfilled, (st, act) => {
        //     st.loading = false;
        //     st.dbUsers.push(act.payload)
        //     st.error = null;
        // }).addCase(
        //     addUser.rejected, (st, act) => {
        //     st.loading = false;
        //     st.error = act.error.message;
        }).addCase(
            updateUser.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateUser.fulfilled, (st) => {
                st.loading = false;
                id = st.dbUsers.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbUsers = st.dbUsers.splice(id,1,act.payload.newUser)//splice
                st.error = null;
        }).addCase(
            updateUser.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteUser.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteUser.fulfilled, (st) => {
                st.loading = false;
                st.dbUsers = st.dbUsers.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbUsers.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbUsers = st.dbUsers.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteUser.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=userSlice.actions;
export {getUsers,deleteUser,updateUser};
export default userSlice.reducer;
