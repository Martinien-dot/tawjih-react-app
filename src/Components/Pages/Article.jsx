import React from "react";
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import ArticleList from "../ArticleList";

const Articles = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Article"} pageName="Article" />
      <ArticleList/>

      <Footer />
    </>
  );
};

export default Articles;
