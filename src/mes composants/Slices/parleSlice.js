import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbParles: [],
    loading: false,
    error:null
};

const getParles = createAsyncThunk("parle/getParles", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/parles").then(res => res.data);
})

const addParles = createAsyncThunk("parle/addParles", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/parles",data).then(res => res.data);
})

const updateParles = createAsyncThunk("parle/updateParles", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/parles${data.id}`,data.content).then(res => res.data);
})

const deleteParles = createAsyncThunk("parle/deleteParles", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/parles${data}`).then(res => res.data);
})

const parleSlice = createSlice({
    name: "parle",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbParles = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getParles.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getParles.fulfilled, (st, act) => {
            st.loading = false;
            st.dbParles = act.payload;
            st.error = null;
        }).addCase(
            getParles.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addParles.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addParles.fulfilled, (st, act) => {
            st.loading = false;
            st.dbParles.push(act.payload)
            st.error = null;
        }).addCase(
            addParles.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateParles.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateParles.fulfilled, (st) => {
                st.loading = false;
                id = st.dbParles.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbParles = st.dbParles.splice(id,1,act.payload.newParle)//splice
                st.error = null;
        }).addCase(
            updateParles.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteParles.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteParles.fulfilled, (st) => {
                st.loading = false;
                st.dbParles = st.dbParles.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbParles.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbParles = st.dbParles.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteParles.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=parleSlice.actions;
export {getParles,addParles,deleteParles,updateParles};
export default parleSlice.reducer;
