import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbOffres: [],
    offreInfo:{},
    loading: false,
    error:null
};

const getOffres = createAsyncThunk("offre/getOffres", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/offres`).then(res => res.data);
})

const getOffre = createAsyncThunk("offre/getOffre", async (data) => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/offres/${data}`).then(res => res.data);
})

const addOffre = createAsyncThunk("offre/addOffre", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/offres`,data).then(res => res.data);
})

const updateOffre = createAsyncThunk("offre/updateOffre", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/offres/${data.id}`,data.content).then(res => res.data);
})

const deleteOffre = createAsyncThunk("offre/deleteOffre", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/offres/${data}`).then(res => res.data);
})

const offreSlice = createSlice({
    name: "offre",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbOffres = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getOffres.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getOffres.fulfilled, (st, act) => {
            st.loading = false;
            st.dbOffres = act.payload;
            st.error = null;
        }).addCase(
            getOffres.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            getOffre.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getOffre.fulfilled, (st, act) => {
            st.loading = false;
            st.offreInfo = act.payload;
            st.error = null;
        }).addCase(
            getOffre.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addOffre.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addOffre.fulfilled, (st, act) => {
            st.loading = false;
            st.dbOffres.push(act.payload)
            st.error = null;
        }).addCase(
            addOffre.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateOffre.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateOffre.fulfilled, (st,act) => {
            console.log(act.payload);
                
            st.loading = false;
            let pos = st.dbOffres.findIndex(x=>x.id===act.payload.id)//findIndex
            // st.dbOffres = st.dbOffres.splice(id,1,act.payload.newOffre)//splice
            st.dbOffres[pos] = act.payload//splice
            st.error = null;
        }).addCase(
            updateOffre.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteOffre.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
        deleteOffre.fulfilled, (st,act) => {
            st.loading = false;
            st.dbOffres = st.dbOffres.filter(x=>x.id!==act.payload.id)//filter
            // let id = st.dbOffres.findIndex(x=>x.id===act.payload.id)//findIndex
            // st.dbOffres = st.dbOffres.splice(id,1)//splice
            // st.dbOffres[id] = act.payload//splice
            st.error = null;
        }).addCase(
            deleteOffre.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=offreSlice.actions;
export {getOffres,getOffre,addOffre,deleteOffre,updateOffre};
export default offreSlice.reducer;
