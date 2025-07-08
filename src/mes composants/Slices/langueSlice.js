import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbLangues: [],
    loading: false,
    error:null
};

const getLangues = createAsyncThunk("langue/getLangues", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/langues").then(res => res.data);
})

const addLangue = createAsyncThunk("langue/addLangue", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/langues",data).then(res => res.data);
})

const updateLangue = createAsyncThunk("langue/updateLangue", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/langues${data.id}`,data.content).then(res => res.data);
})

const deleteLangue = createAsyncThunk("langue/deleteLangue", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/langues${data}`).then(res => res.data);
})

const LangueSlice = createSlice({
    name: "langue",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbLangues = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getLangues.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getLangues.fulfilled, (st, act) => {
            st.loading = false;
            st.dbLangues = act.payload;
            st.error = null;
        }).addCase(
            getLangues.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addLangue.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addLangue.fulfilled, (st, act) => {
            st.loading = false;
            st.dbLangues.push(act.payload)
            st.error = null;
        }).addCase(
            addLangue.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateLangue.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateLangue.fulfilled, (st) => {
                st.loading = false;
                id = st.dbLangues.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbLangues = st.dbLangues.splice(id,1,act.payload.newLangue)//splice
                st.error = null;
        }).addCase(
            updateLangue.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteLangue.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteLangue.fulfilled, (st) => {
                st.loading = false;
                st.dbLangues = st.dbLangues.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbLangues.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbLangues = st.dbLangues.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteLangue.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=LangueSlice.actions;
export {getLangues,addLangue,deleteLangue,updateLangue};
export default LangueSlice.reducer;
