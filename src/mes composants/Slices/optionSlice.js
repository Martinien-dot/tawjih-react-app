import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbOptions: [],
    loading: false,
    error:null
};

const getOptions = createAsyncThunk("option/getOptions", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/options").then(res => res.data);
})

const addOption = createAsyncThunk("option/addOption", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/options",data).then(res => res.data);
})

const updateOption = createAsyncThunk("option/updateOption", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/options${data.id}`,data.content).then(res => res.data);
})

const deleteOption = createAsyncThunk("option/deleteOption", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/options${data}`).then(res => res.data);
})

const optionSlice = createSlice({
    name: "option",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbOptions = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getOptions.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getOptions.fulfilled, (st, act) => {
            st.loading = false;
            st.dbOptions = act.payload;
            st.error = null;
        }).addCase(
            getOptions.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addOption.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addOption.fulfilled, (st, act) => {
            st.loading = false;
            st.dbOptions.push(act.payload)
            st.error = null;
        }).addCase(
            addOption.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateOption.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateOption.fulfilled, (st) => {
                st.loading = false;
                id = st.dbOptions.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbOptions = st.dbOptions.splice(id,1,act.payload.newOption)//splice
                st.error = null;
        }).addCase(
            updateOption.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteOption.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteOption.fulfilled, (st) => {
                st.loading = false;
                st.dbOptions = st.dbOptions.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbOptions.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbOptions = st.dbOptions.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteOption.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=optionSlice.actions;
export {getOptions,addOption,deleteOption,updateOption};
export default optionSlice.reducer;
