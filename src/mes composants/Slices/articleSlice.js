import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initState = {
    dbArticles: [],
    articleInfo: {},
    loading: false,
    error:null
};

const getArticles = createAsyncThunk("article/getArticles", async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/articles`).then(res => res.data);
})

const getArticle = createAsyncThunk("article/getArticle", async (data) => {
    // console.log(formDataFile);
    return await Axios.get(`${process.env.REACT_APP_API_URL}/api/articles/${data}`).then(res => res.data);
})

const addArticle = createAsyncThunk("article/addArticle", async (data) => {
    console.log(data);
    
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/articles`,data).headers({"Content-Type": 'Application/JSON'}).then(res => res.data);
})

const updateArticle = createAsyncThunk("article/updateArticle", async ({id,formDataFile}) => {
    console.log(id);
    console.log(formDataFile);
    
    return await Axios.post(`${process.env.REACT_APP_API_URL}/api/articles/${id}`,formDataFile).then(res => res.data);
})

const deleteArticle = createAsyncThunk("article/deleteArticle", async (data) => {
    return await Axios.delete(`${process.env.REACT_APP_API_URL}/api/articles/${data}`).then(res => res.data);
})

const articleSlice = createSlice({
    name: "article",
    initialState: initState,
    reducers: {
        viderListe: (st) => { st.dbArticles = [] }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getArticles.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getArticles.fulfilled, (st, act) => {
            st.loading = false;
            st.dbArticles = act.payload;
            st.error = null;
        }).addCase(
            getArticles.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            getArticle.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            getArticle.fulfilled, (st, act) => {
            st.loading = false;
            st.articleInfo = act.payload;
            st.error = null;
        }).addCase(
            getArticle.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            addArticle.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            addArticle.fulfilled, (st, act) => {
            st.loading = false;
            st.dbArticles.push(act.payload)
            st.error = null;
        }).addCase(
            addArticle.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            updateArticle.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            updateArticle.fulfilled, (st,act) => {
                st.loading = false;
                let id = st.dbArticles.findIndex(x=>x.id===act.payload.id)//findIndex
                // st.dbArticles = st.dbArticles.splice(id,1,act.payload.newArticle)//splice
                st.dbArticles[id] = act.payload//splice
                st.error = null;
        }).addCase(
            updateArticle.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        }).addCase(
            deleteArticle.pending, (st) => {
            st.loading = true;
            st.error = null;
        }).addCase(
            deleteArticle.fulfilled, (st,act) => {
                st.loading = false;
                st.dbArticles = st.dbArticles.filter(x=>x.id!==act.payload.id)//filter
                // let id = st.dbArticles.findIndex(x=>x.id===act.payload.id)//findIndex
                // st.dbArticles = st.dbArticles.splice(id,1)//splice
                // st.dbArticles[id] = act.payload
                st.error = null;
        }).addCase(
            deleteArticle.rejected, (st, act) => {
            st.loading = false;
            st.error = act.error.message;
        })
    }
});


export const {viderListe}=articleSlice.actions;
export {getArticles,getArticle,addArticle,deleteArticle,updateArticle};
export default articleSlice.reducer;
