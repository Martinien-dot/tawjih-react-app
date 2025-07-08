import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbEtudiants: [],
    loading: false,
    error:null,
    id_etu : null
};

const getEtudiants = createAsyncThunk("etudiant/getEtudiants", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/etudiants").then(res => res.data);
})

const addEtudiant = createAsyncThunk("etudiant/addEtudiant", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/etudiants`,data).then(res => res.data)
    .catch(error =>console.log(error));
})

const updateEtudiant = createAsyncThunk("etudiant/updateEtudiant", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/etudiants${data.id}`,data.content).then(res => res.data);
})

const deleteEtudiant = createAsyncThunk("etudiant/deleteEtudiant", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/etudiants${data}`).then(res => res.data);
})

const etudiantSlice = createSlice({
    name: "etudiant",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbEtudiants = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getEtudiants.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getEtudiants.fulfilled, (st, act) => {
            st.loading = false;
            st.dbEtudiants = act.payload;
            st.error = null;
        }).addCase(
            getEtudiants.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addEtudiant.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addEtudiant.fulfilled, (st, act) => {
            st.loading = false;
            // st.dbEtudiants.push(act.payload)
            st.id_etu = act.payload.id;
            st.error = null;
        }).addCase(
            addEtudiant.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateEtudiant.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateEtudiant.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbEtudiants.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbEtudiants = st.dbEtudiants.splice(id,1,act.payload.newEtudiant)//splice
                st.error = null;
        }).addCase(
            updateEtudiant.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteEtudiant.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteEtudiant.fulfilled, (st,act) => {
                st.loading = false;
                st.dbEtudiants = st.dbEtudiants.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbEtudiants.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbEtudiants = st.dbEtudiants.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteEtudiant.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=etudiantSlice.actions;
export {getEtudiants,addEtudiant,deleteEtudiant,updateEtudiant};
export default etudiantSlice.reducer;
