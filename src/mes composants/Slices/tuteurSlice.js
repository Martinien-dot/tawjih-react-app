import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbTuteurs: [],
    loading: false,
    error:null
};

const getTuteurs = createAsyncThunk("tuteur/getTuteurs", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/tuteurs").then(res => res.data);
})

const addTuteur = createAsyncThunk("tuteur/addTuteur", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/tuteurs`,data).then(res => res.data);
})

const updateTuteur = createAsyncThunk("tuteur/updateTuteur", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/tuteurs${data.id}`,data.content).then(res => res.data);
})

const deleteTuteur = createAsyncThunk("tuteur/deleteTuteur", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/tuteurs${data}`).then(res => res.data);
})

const tuteurSlice = createSlice({
    name: "tuteur",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbTuteurs = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getTuteurs.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getTuteurs.fulfilled, (st, act) => {
            st.loading = false;
            st.dbTuteurs = act.payload;
            st.error = null;
        }).addCase(
            getTuteurs.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addTuteur.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addTuteur.fulfilled, (st, act) => {
            st.loading = false;
            st.dbTuteurs.push(act.payload)
            st.error = null;
        }).addCase(
            addTuteur.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateTuteur.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateTuteur.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbTuteurs.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbTuteurs = st.dbTuteurs.splice(id,1,act.payload.newTuteur)//splice
                st.error = null;
        }).addCase(
            updateTuteur.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteTuteur.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteTuteur.fulfilled, (st,act) => {
                st.loading = false;
                st.dbTuteurs = st.dbTuteurs.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbTuteurs.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbTuteurs = st.dbTuteurs.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteTuteur.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=tuteurSlice.actions;
export {getTuteurs,addTuteur,deleteTuteur,updateTuteur};
export default tuteurSlice.reducer;
