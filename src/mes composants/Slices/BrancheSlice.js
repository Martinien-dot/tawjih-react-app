import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbBranches: [],
    loading: false,
    error:null
};

const getBranches = createAsyncThunk("branche/getBranches", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/branches`).then(res => res.data);
})

const addBranche = createAsyncThunk("branche/addBranche", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/branches`,data).then(res => res.data);
})

const updateBranche = createAsyncThunk("branche/updateBranche", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/branches/${data.id}`,data.content).then(res => res.data);
})

const deleteBranche = createAsyncThunk("branche/deleteBranche", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/branches/${data}`).then(res => res.data);
})

const brancheSlice = createSlice({
    name: "branche",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbBranches = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getBranches.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getBranches.fulfilled, (st, act) => {
            st.loading = false;
            st.dbBranches = act.payload;
            st.error = null;
        }).addCase(
            getBranches.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addBranche.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addBranche.fulfilled, (st, act) => {
            st.loading = false;
            st.dbBranches.push(act.payload)
            st.error = null;
        }).addCase(
            addBranche.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateBranche.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateBranche.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbBranches.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbBranches = st.dbBranches.splice(id,1,act.payload.newBranche)//splice
                st.error = null;
        }).addCase(
            updateBranche.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteBranche.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteBranche.fulfilled, (st,act) => {
                st.loading = false;
                st.dbBranches = st.dbBranches.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbBranches.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbBranches = st.dbBranches.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteBranche.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=brancheSlice.actions;
export {getBranches,addBranche,deleteBranche,updateBranche};
export default brancheSlice.reducer;
