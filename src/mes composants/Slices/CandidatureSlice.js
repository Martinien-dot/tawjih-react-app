import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbCandidatures: [],
    loading: false,
    error:null
};

const getCandidatures = createAsyncThunk("candidature/getCandidatures", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/candidatures`).then(res => res.data);
})

const addCandidature = createAsyncThunk("candidature/addCandidature", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/candidatures`,data).then(res => res.data);
})

const updateCandidature = createAsyncThunk("candidature/updateCandidature", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/candidatures/${data.id}`,data.content).then(res => res.data);
})

const deleteCandidature = createAsyncThunk("candidature/deleteCandidature", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/candidatures/${data}`).then(res => res.data);
})

const CandidatureSlice = createSlice({
    name: "candidature",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbCandidatures = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getCandidatures.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getCandidatures.fulfilled, (st, act) => {
            st.loading = false;
            st.dbCandidatures = act.payload;
            st.error = null;
        }).addCase(
            getCandidatures.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addCandidature.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addCandidature.fulfilled, (st, act) => {
            st.loading = false;
            st.dbCandidatures.push(act.payload)
            st.error = null;
        }).addCase(
            addCandidature.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateCandidature.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateCandidature.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbCandidatures.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbCandidatures = st.dbCandidatures.splice(id,1,act.payload.newCandidature)//splice
                st.error = null;
        }).addCase(
            updateCandidature.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteCandidature.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteCandidature.fulfilled, (st,act) => {
                st.loading = false;
                st.dbCandidatures = st.dbCandidatures.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbCandidatures.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbCandidatures = st.dbCandidatures.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteCandidature.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=CandidatureSlice.actions;
export {getCandidatures,addCandidature,deleteCandidature,updateCandidature};
export default CandidatureSlice.reducer;
