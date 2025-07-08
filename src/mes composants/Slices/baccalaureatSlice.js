import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbBaccalaureats: [],
    loading: false,
    error:null,
    id_bac : null
};

const getBaccalaureats = createAsyncThunk("baccalaureat/getBaccalaureats", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/baccalaureats").then(res => res.data);
})

const addBaccalaureat = createAsyncThunk("baccalaureat/addBaccalaureat", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/baccalaureats`,data).then(res => res.data);
})

const updateBaccalaureat = createAsyncThunk("baccalaureat/updateBaccalaureat", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/baccalaureats${data.id}`,data.content).then(res => res.data);
})

const deleteBaccalaureat = createAsyncThunk("baccalaureat/deleteBaccalaureat", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/baccalaureats${data}`).then(res => res.data);
})

const baccalaureatSlice = createSlice({
    name: "baccalaureat",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbBaccalaureats = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getBaccalaureats.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getBaccalaureats.fulfilled, (st, act) => {
            st.loading = false;
            st.dbBaccalaureats = act.payload;
            st.error = null;
        }).addCase(
            getBaccalaureats.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addBaccalaureat.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addBaccalaureat.fulfilled, (st, act) => {
            st.loading = false;
            // st.dbBaccalaureats.push(act.payload)
            st.id_bac = act.payload.id;
            st.error = null;
        }).addCase(
            addBaccalaureat.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateBaccalaureat.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateBaccalaureat.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbBaccalaureats.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbBaccalaureats = st.dbBaccalaureats.splice(id,1,act.payload.newBaccalaureat)//splice
                st.error = null;
        }).addCase(
            updateBaccalaureat.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteBaccalaureat.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteBaccalaureat.fulfilled, (st,act) => {
                st.loading = false;
                st.dbBaccalaureats = st.dbBaccalaureats.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbBaccalaureats.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbBaccalaureats = st.dbBaccalaureats.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteBaccalaureat.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=baccalaureatSlice.actions;
export {getBaccalaureats,addBaccalaureat,deleteBaccalaureat,updateBaccalaureat};
export default baccalaureatSlice.reducer;
