import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbPratiques: [],
    loading: false,
    error:null
};

const getPratiques = createAsyncThunk("pratique/getPratiques", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/pratiques").then(res => res.data);
})

const addPratique = createAsyncThunk("pratique/addPratique", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/pratiques",data).then(res => res.data);
})

const updatePratique = createAsyncThunk("pratique/updatePratique", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/pratiques${data.id}`,data.content).then(res => res.data);
})

const deletePratique = createAsyncThunk("pratique/deletePratique", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/pratiques${data}`).then(res => res.data);
})

const pratiqueSlice = createSlice({
    name: "pratique",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbPratiques = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getPratiques.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getPratiques.fulfilled, (st, act) => {
            st.loading = false;
            st.dbPratiques = act.payload;
            st.error = null;
        }).addCase(
            getPratiques.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addPratique.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addPratique.fulfilled, (st, act) => {
            st.loading = false;
            st.dbPratiques.push(act.payload)
            st.error = null;
        }).addCase(
            addPratique.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updatePratique.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updatePratique.fulfilled, (st) => {
                st.loading = false;
                id = st.dbPratiques.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbPratiques = st.dbPratiques.splice(id,1,act.payload.newPratique)//splice
                st.error = null;
        }).addCase(
            updatePratique.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deletePratique.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deletePratique.fulfilled, (st) => {
                st.loading = false;
                st.dbPratiques = st.dbPratiques.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbPratiques.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbPratiques = st.dbPratiques.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deletePratique.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=pratiqueSlice.actions;
export {getPratiques,addPratique,deletePratique,updatePratique};
export default pratiqueSlice.reducer;
