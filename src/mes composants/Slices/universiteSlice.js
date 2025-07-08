import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbUniversites: [],
    loading: false,
    error:null
};

const getUniversites = createAsyncThunk("universite/getUniversites", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/universites`).then(res => res.data);
})

const addUniversite = createAsyncThunk("universite/addUniversite", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/universites`,data).then(res => res.data);
})

const updateUniversite = createAsyncThunk("universite/updateUniversite", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/universites/${data.id}`,data.content).then(res => res.data);
})

const deleteUniversite = createAsyncThunk("universite/deleteUniversite", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/universites/${data}`).then(res => res.data);
})

const universiteSlice = createSlice({
    name: "universite",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbUniversites = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getUniversites.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getUniversites.fulfilled, (st, act) => {
            st.loading = false;
            st.dbUniversites = act.payload;
            st.error = null;
        }).addCase(
            getUniversites.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addUniversite.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addUniversite.fulfilled, (st, act) => {
            st.loading = false;
            st.dbUniversites.push(act.payload)
            st.error = null;
        }).addCase(
            addUniversite.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateUniversite.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateUniversite.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbUniversites.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbUniversites = st.dbUniversites.splice(id,1,act.payload.newUniversite)//splice
                st.error = null;
        }).addCase(
            updateUniversite.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteUniversite.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteUniversite.fulfilled, (st,act) => {
                st.loading = false;
                st.dbUniversites = st.dbUniversites.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbUniversites.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbUniversites = st.dbUniversites.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteUniversite.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=universiteSlice.actions;
export {getUniversites,addUniversite,deleteUniversite,updateUniversite};
export default universiteSlice.reducer;
