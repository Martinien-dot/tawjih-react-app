import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbNotes: [],
    loading: false,
    error:null
};

const getNotes = createAsyncThunk("notes/getNotes", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/notes`).then(res => res.data);
})

const addNote = createAsyncThunk("notes/addNote", async (data) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/notes`,data).then(res => res.data);
})

const updateNote = createAsyncThunk("notes/updateNote", async (data) => {
    return await Axios.put(`${process.env.REACT_APP_API_URL}/api/notes/${data.id}`,data.content).then(res => res.data);
})

const deleteNote = createAsyncThunk("notes/deleteNote", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/notes/${data}`).then(res => res.data);
})

const noteSlice = createSlice({
    name: "note",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbNotes= [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getNotes.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getNotes.fulfilled, (st, act) => {
            st.loading = false;
            st.dbNotes = act.payload;
            st.error = null;
        }).addCase(
            getNotes.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addNote.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addNote.fulfilled, (st, act) => {
            st.loading = false;
            st.dbNotes.push(act.payload)
            st.error = null;
        }).addCase(
            addNote.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateNote.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateNote.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbNotes.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbNotes = st.dbNotes.splice(id,1,act.payload.newNote)//splice
                st.error = null;
        }).addCase(
            updateNote.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteNote.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteNote.fulfilled, (st,act) => {
                st.loading = false;
                st.dbNotes = st.dbNotes.filter(x=>x.id!==act.payload.id)//filter
                let id = st.dbNotes.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbNotes = st.dbNotes.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteNote.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});

export const {viderListe}=noteSlice.actions;
export {getNotes,addNote,updateNote,deleteNote};
export default noteSlice.reducer;