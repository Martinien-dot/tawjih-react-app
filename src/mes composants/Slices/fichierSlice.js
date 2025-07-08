import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbFichiers: [],
    loading: false,
    error:null
};

const getFichiers = createAsyncThunk("fichier/getFichiers", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/fichiers`).then(res => res.data);
})

const addFichier = createAsyncThunk("fichier/addFichier", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/fichiers`,data).then(res => res.data);
})

const updateFichier = createAsyncThunk("fichier/updateFichier", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/fichiers/${data.id}`,data.content).then(res => res.data);
})

const deleteFichier = createAsyncThunk("fichier/deleteFichier", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/fichiers/${data}`).then(res => res.data);
})

const fichierSlice = createSlice({
    name: "fichier",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbFichiers= [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getFichiers.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getFichiers.fulfilled, (st, act) => {
            st.loading = false;
            st.dbFichiers = act.payload;
            st.error = null;
        }).addCase(
            getFichiers.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addFichier.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addFichier.fulfilled, (st, act) => {
            st.loading = false;
            st.dbFichiers.push(act.payload)
            st.error = null;
        }).addCase(
            addFichier.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateFichier.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateFichier.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbFichiers.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbFichiers = st.dbFichiers.splice(id,1,act.payload.newFichier)//splice
                st.error = null;
        }).addCase(
            updateFichier.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteFichier.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteFichier.fulfilled, (st, act ) => {
                st.loading = false;
                st.dbFichiers = st.dbFichiers.filter(x=>x.id!==act.payload.id)//filter
                    let id = st.dbFichiers.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbFichiers = st.dbFichiers.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteFichier.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});

export const {viderListe}=fichierSlice.actions;
export {getFichiers,addFichier,updateFichier,deleteFichier};
export default fichierSlice.reducer;