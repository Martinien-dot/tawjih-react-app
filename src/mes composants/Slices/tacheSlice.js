import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbTaches: [],
    loading: false,
    error:null
};

const getTaches = createAsyncThunk("tache/getTaches", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/taches").then(res => res.data);
})

const addTache = createAsyncThunk("tache/addTache", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/taches",data).then(res => res.data);
})

const updateTache = createAsyncThunk("tache/updateTache", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/taches${data.id}`,data.content).then(res => res.data);
})

const deleteTache = createAsyncThunk("tache/deleteTache", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/taches${data}`).then(res => res.data);
})

const tacheSlice = createSlice({
    name: "tache",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbTaches= [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getTaches.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getTaches.fulfilled, (st, act) => {
            st.loading = false;
            st.dbTaches = act.payload;
            st.error = null;
        }).addCase(
            getTaches.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addTache.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addTache.fulfilled, (st, act) => {
            st.loading = false;
            st.dbTaches.push(act.payload)
            st.error = null;
        }).addCase(
            addTache.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateTache.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateTache.fulfilled, (st) => {
                st.loading = false;
                id = st.dbTaches.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbTaches = st.dbTaches.splice(id,1,act.payload.newTache)//splice
                st.error = null;
        }).addCase(
            updateTache.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteTache.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteTache.fulfilled, (st) => {
                st.loading = false;
                st.dbTaches = st.dbTaches.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbTaches.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbTaches = st.dbTaches.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteTache.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});

export const {viderListe}=tacheSlice.actions;
export {getTaches,addTache,updateTache,deleteTache};
export default tacheSlice.reducer;