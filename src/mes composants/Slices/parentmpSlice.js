import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbParentmps: [],
    loading: false,
    error:null
};

const getParentmps = createAsyncThunk("parentmp/getParentmps", async () => {
    // return await Axios.get("http://127.0.0.1:8000/api/parentmps").then(res => res.data);
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/parentmps`).then(res => res.data);
})

const addParentmp = createAsyncThunk("parentmp/addParentmp", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/parentmps`,data).then(res => res.data);
})

const updateParentmp = createAsyncThunk("parentmp/updateParentmp", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/parentmps/${data.id}`,data.content).then(res => res.data);
})

const deleteParentmp = createAsyncThunk("parentmp/deleteParentmp", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/parentmps/${data}`).then(res => res.data);
})

const parentmpSlice = createSlice({
    name: "parentmp",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbParentmps = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getParentmps.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getParentmps.fulfilled, (st, act) => {
            st.loading = false;
            st.dbParentmps = act.payload;
            st.error = null;
        }).addCase(
            getParentmps.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addParentmp.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addParentmp.fulfilled, (st, act) => {
            st.loading = false;
            st.dbParentmps.push(act.payload)
            st.error = null;
        }).addCase(
            addParentmp.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateParentmp.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateParentmp.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbParentmps.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbParentmps = st.dbParentmps.splice(id,1,act.payload.newParentmp)//splice
                st.error = null;
        }).addCase(
            updateParentmp.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteParentmp.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteParentmp.fulfilled, (st,act) => {
                st.loading = false;
                st.dbParentmps = st.dbParentmps.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbParentmps.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbParentmps = st.dbParentmps.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteParentmp.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=parentmpSlice.actions;
export {getParentmps,addParentmp,deleteParentmp,updateParentmp};
export default parentmpSlice.reducer;
