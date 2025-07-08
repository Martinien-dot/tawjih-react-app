import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbLoisirs: [],
    loading: false,
    error:null
};

const getLoisirs = createAsyncThunk("loisir/getLoisirs", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/loisirs").then(res => res.data);
})

const addLoisir = createAsyncThunk("loisir/addLoisir", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/loisirs",data).then(res => res.data);
})

const updateLoisir = createAsyncThunk("loisir/updateLoisir", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/loisirs${data.id}`,data.content).then(res => res.data);
})

const deleteLoisir = createAsyncThunk("loisir/deleteLoisir", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/loisirs${data}`).then(res => res.data);
})

const loisirSlice = createSlice({
    name: "loisir",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbLoisirs = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getLoisirs.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getLoisirs.fulfilled, (st, act) => {
            st.loading = false;
            st.dbLoisirs = act.payload;
            st.error = null;
        }).addCase(
            getLoisirs.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addLoisir.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addLoisir.fulfilled, (st, act) => {
            st.loading = false;
            st.dbLoisirs.push(act.payload)
            st.error = null;
        }).addCase(
            addLoisir.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateLoisir.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateLoisir.fulfilled, (st) => {
                st.loading = false;
                id = st.dbLoisirs.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbLoisirs = st.dbLoisirs.splice(id,1,act.payload.newLoisir)//splice
                st.error = null;
        }).addCase(
            updateLoisir.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteLoisir.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteLoisir.fulfilled, (st) => {
                st.loading = false;
                st.dbLoisirs = st.dbLoisirs.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbLoisirs.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbLoisirs = st.dbLoisirs.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteLoisir.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=loisirSlice.actions;
export {getLoisirs,addLoisir,deleteLoisir,updateLoisir};
export default loisirSlice.reducer;
