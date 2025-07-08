import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbAbonnements: [],
    loading: false,
    error:null
};

const getAbonnements = createAsyncThunk("abonnement/getAbonnements", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/abonnements").then(res => res.data);
})

const addAbonnement = createAsyncThunk("abonnement/addAbonnement", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/abonnements",data).then(res => res.data);
})

const updateAbonnement = createAsyncThunk("abonnement/updateAbonnement", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/abonnements${data.id}`,data.content).then(res => res.data);
})

const deleteAbonnement = createAsyncThunk("abonnement/deleteAbonnement", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/abonnements${data}`).then(res => res.data);
})

const AbonnementSlice = createSlice({
    name: "abonnement",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbAbonnements = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getAbonnements.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getAbonnements.fulfilled, (st, act) => {
            st.loading = false;
            st.dbAbonnements = act.payload;
            st.error = null;
        }).addCase(
            getAbonnements.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addAbonnement.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addAbonnement.fulfilled, (st, act) => {
            st.loading = false;
            st.dbAbonnements.push(act.payload)
            st.error = null;
        }).addCase(
            addAbonnement.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateAbonnement.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateAbonnement.fulfilled, (st) => {
                st.loading = false;
                id = st.dbAbonnements.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbAbonnements = st.dbAbonnements.splice(id,1,act.payload.newAbonnement)//splice
                st.error = null;
        }).addCase(
            updateAbonnement.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteAbonnement.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteAbonnement.fulfilled, (st) => {
                st.loading = false;
                st.dbAbonnements = st.dbAbonnements.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbAbonnements.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbAbonnements = st.dbAbonnements.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteAbonnement.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=AbonnementSlice.actions;
export {getAbonnements,addAbonnement,deleteAbonnement,updateAbonnement};
export default AbonnementSlice.reducer;
