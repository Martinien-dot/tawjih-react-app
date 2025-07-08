import React, { useEffect } from "react";
// import About from "../HomeThreeComponents/About";
// import Accordion from "../HomeThreeComponents/Accordion";
import Banner from "../HomeThreeComponents/Banner";
// import Brands from "../HomeThreeComponents/Brands";
// import CourseBlock from "../HomeThreeComponents/CourseBlock";
// import Event from "../HomeThreeComponents/Event";
// import Team from "../HomeThreeComponents/Team";
// import Testimonial from "../HomeThreeComponents/Testimonial";
// import BlogArticle from "../HomeTwoComponents/BlogArticle";
// import Footer from "../Footer";
// import CourseSection from "../HomeThreeComponents/CourseSection";
import HeaderAcc from "../HomeThreeComponents/AccountCompnenets/HeaderAcc";
// import MultiStep from "react-multistep";
import MultiStepForm from "../HomeThreeComponents/AccountCompnenets/MultiStepForm";
function Account() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <HeaderAcc />
      <Banner />
      {/* <Brands /> */}
      {/* <About />*/}
      {/* <CourseSection /> */}
      <MultiStepForm/>
     {/*  <Team />
      <Testimonial />
      <Event />
      <CourseBlock />
      <Accordion />
      <BlogArticle /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Account;
