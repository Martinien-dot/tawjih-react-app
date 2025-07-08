import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbVilles: [],
    loading: false,
    error:null
};

const getVilles = createAsyncThunk("ville/getVilles", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/villes`).then(res => res.data);
})

const addVille = createAsyncThunk("ville/addVille", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/villes`,data).then(res => res.data);
})

const updateVille = createAsyncThunk("ville/updateVille", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/villes/${data.id}`,data.content).then(res => res.data);
})

const deleteVille = createAsyncThunk("ville/deleteVille", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/villes/${data}`).then(res => res.data);
})

const villeSlice = createSlice({
    name: "ville",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbVilles = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getVilles.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getVilles.fulfilled, (st, act) => {
            st.loading = false;
            st.dbVilles = act.payload;
            st.error = null;
        }).addCase(
            getVilles.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addVille.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addVille.fulfilled, (st, act) => {
            st.loading = false;
            st.dbVilles.push(act.payload)
            st.error = null;
        }).addCase(
            addVille.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateVille.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateVille.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbVilles.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbVilles = st.dbVilles.splice(id,1,act.payload.newVille)//splice
                st.error = null;
        }).addCase(
            updateVille.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteVille.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteVille.fulfilled, (st,act) => {
                st.loading = false;
                st.dbVilles = st.dbVilles.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbVilles.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbVilles = st.dbVilles.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteVille.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=villeSlice.actions;
export {getVilles,addVille,deleteVille,updateVille};
export default villeSlice.reducer;
