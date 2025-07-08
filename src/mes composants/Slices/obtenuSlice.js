import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbObtenus: [],
    loading: false,
    error:null
};

const getObtenus = createAsyncThunk("obtenu/getObtenus", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/obtenus").then(res => res.data);
})

const addObtenu = createAsyncThunk("obtenu/addObtenu", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/obtenus",data).then(res => res.data);
})

const updateObtenu = createAsyncThunk("obtenu/updateObtenu", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/obtenus${data.id}`,data.content).then(res => res.data);
})

const deleteObtenu = createAsyncThunk("obtenu/deleteObtenu", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/obtenus${data}`).then(res => res.data);
})

const obtenuSlice = createSlice({
    name: "obtenu",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbObtenus = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getObtenus.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getObtenus.fulfilled, (st, act) => {
            st.loading = false;
            st.dbObtenus = act.payload;
            st.error = null;
        }).addCase(
            getObtenus.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addObtenu.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addObtenu.fulfilled, (st, act) => {
            st.loading = false;
            st.dbObtenus.push(act.payload)
            st.error = null;
        }).addCase(
            addObtenu.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateObtenu.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateObtenu.fulfilled, (st) => {
                st.loading = false;
                id = st.dbObtenus.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbObtenus = st.dbObtenus.splice(id,1,act.payload.newObtenu)//splice
                st.error = null;
        }).addCase(
            updateObtenu.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteObtenu.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteObtenu.fulfilled, (st) => {
                st.loading = false;
                st.dbObtenus = st.dbObtenus.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbObtenus.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbObtenus = st.dbObtenus.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteObtenu.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=obtenuSlice.actions;
export {getObtenus,addObtenu,deleteObtenu,updateObtenu};
export default obtenuSlice.reducer;
