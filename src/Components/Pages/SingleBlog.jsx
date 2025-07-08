import React from "react";
import BlogPost from "../BlogPost";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const SingleBlog = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Détails du Article"} pageName="Article" />
      <BlogPost />
      <Footer />
    </>
  );
};

export default SingleBlog;
