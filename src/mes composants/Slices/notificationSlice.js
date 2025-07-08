import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbNotifications: [],
    loading: false,
    error:null
};

const getNotifications = createAsyncThunk("notification/getNotifications", async () => {
    return await Axios.get("http://127.0.0.1:8000/api/notifications").then(res => res.data);
})

const addNotification = createAsyncThunk("notification/addNotification", async (data) => {
    return await Axios.post("http://127.0.0.1:8000/api/notifications",data).then(res => res.data);
})

const updateNotification = createAsyncThunk("notification/updateNotification", async (data) => {
    return await Axios.put(`http://127.0.0.1:8000/api/notifications${data.id}`,data.content).then(res => res.data);
})

const deleteNotification = createAsyncThunk("notification/deleteNotification", async (data) => {
    return await Axios.delete(`http://127.0.0.1:8000/api/notifications${data}`).then(res => res.data);
})

const notificationSlice = createSlice({
    name: "notification",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbNotifications = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getNotifications.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getNotifications.fulfilled, (st, act) => {
            st.loading = false;
            st.dbNotifications = act.payload;
            st.error = null;
        }).addCase(
            getNotifications.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addNotification.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addNotification.fulfilled, (st, act) => {
            st.loading = false;
            st.dbNotifications.push(act.payload)
            st.error = null;
        }).addCase(
            addNotification.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateNotification.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateNotification.fulfilled, (st) => {
                st.loading = false;
                id = st.dbNotifications.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbNotifications = st.dbNotifications.splice(id,1,act.payload.newNotification)//splice
                st.error = null;
        }).addCase(
            updateNotification.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteNotification.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteNotification.fulfilled, (st) => {
                st.loading = false;
                st.dbNotifications = st.dbNotifications.filter(x=>x.id!==act.payload.id)//filter
                id = st.dbNotifications.findIndex(x=>x.id===act.payload.id)//findIndex
                st.dbNotifications = st.dbNotifications.splice(id,1)//splice
                st.error = null;
        }).addCase(
            deleteNotification.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=notificationSlice.actions;
export {getNotifications,addNotification,deleteNotification,updateNotification};
export default notificationSlice.reducer;
