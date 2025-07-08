/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {
  bs1,
  bs2,
  bs3,
  user3,
  comment,
  q,
  calender,
  clockIcon,
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  rc3,
  rc1,
  insIcon1,
  insIcon3,
  insIcon2,
  search,
  rc2,
  insIcon4,
  insIcon5,
  insIcon6,
} from "../constant/images";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../mes composants/Slices/articleSlice";
import ContactForm from "./ContactForm";

const BlogPost = () => {
  let {idArticle} = useParams();
  const { loading,articleInfo,error } = useSelector(st => st.article);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getArticle(idArticle));
    console.log(articleInfo);
  },[dispatch])
  
    let extension1='jpg';
    let extension2='png';
    let extension3='svg';
    let extension4='jepg';
  
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      {
        loading?(
          <div class="text-center">
              <div role="status">
                  <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div>
          </div>
        ):(
          <div  className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-12 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={`${process.env.REACT_APP_API_URL}/storage/articles/${articleInfo.date_publication}/image_principale/${articleInfo.image_principale}`} alt="" className="rounded-t-md mb-10" />
                      {/* <div className="flex   lg:space-x-10 space-x-5 mt-6">
                        
                          <img src={calender} alt="" />
                          <span>{new Date(articleInfo.created_at).toLocaleDateString()+" "+new Date(articleInfo.created_at).toLocaleTimeString()}</span>
                        
                          <img src={clockIcon} alt="" />
                          <span>3 minutes de lecture</span>
                      </div> */}
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                      <div className="flex   lg:space-x-10 space-x-5 mt-6">
                        
                          <img src={calender} alt="" />
                          <span>{new Date(articleInfo.created_at).toLocaleDateString()+" "+new Date(articleInfo.created_at).toLocaleTimeString()}</span>
                        
                          <img src={clockIcon} alt="" />
                          <span>3 minutes de lecture</span>
                      </div>
                    {/* <img src={calender} alt="" />
                    <span>{new Date(articleInfo.created_at).toLocaleDateString()+" "+new Date(articleInfo.created_at).toLocaleTimeString()}</span>
                    <img src={clockIcon} alt="" />
                    <span>3 minutes de lecture</span> */}
                  {/* <a className=" flex items-center space-x-2" href="#">
                    <img src={comment} alt="" />
                    <span>02 Comments</span>
                  </a> */}
                </div>
                <h3>
                  {articleInfo.titre}
                </h3>
                <p className="mt-6" dangerouslySetInnerHTML={{ __html: articleInfo.contenu}} />
                {/* <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.png')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src={q} alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Education is one of the most powerful aspects of life.
                    Education and learning allow us to make sense of the world
                    around us, the world inside of us, and where we fit within
                    the world.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                    <span className=" text-xl font-semibold">
                      Rosalina D. Jackson
                    </span>
                  </div>
                </blockquote> */}
                <div>
                  {
                    articleInfo.documents?(
                      articleInfo.documents.filter(e=>e!=='null').map(y=>(
                        <>
                        {
                          y.endsWith(extension1) || y.endsWith(extension2) || y.endsWith(extension3) || y.endsWith(extension4)?(
                            <>
                              <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                                <img src={`${process.env.REACT_APP_API_URL}/storage/articles/${articleInfo.date_publication}/documents/${y}`} alt={articleInfo.titre} />
                              </div>
                            </>
                          ):(
                            <>
                              <div className="flex justify-center items-center" >

                                  {/* <img className="m-1" width="250" height="250" src={`${process.env.REACT_APP_BASE_URL}/storage/articles/${articleInfo.date_publication}/documents/${y}`} alt={articleInfo.titre} /> */}

                                  <iframe
                                      // frameborder="4"
                                      width="800" height="500"
                                      src={`${process.env.REACT_APP_API_URL}/storage/articles/${articleInfo.date_publication}/documents/${y}`}
                                      // allowFullScreen
                                  ></iframe>
                              
                              </div>
                              <br/><br/>
                              </>
                          )


                        }
                        </>
                        )
                      )
                    ):""
                  }
                  {/* <img src={bs2} alt="" />
                  <img src={bs3} alt="" /> */}

                </div>
                {/* <h4 className="text-2xl mb-4">
                  Education Is About Academic Excellence And Cultural Diversity
                  Learning Community
                </h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable.
                </p>
                <ul className="list-disc marker:text-secondary space-y-4 mt-6">
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul> */}
                {/* <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                  <ul className="flex space-x-3 xl:justify-end items-center  ">
                    <li className=" text-black font-semibold">Share On:</li>

                    {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                      <li key={indx}>
                        <a href="#" className="flex h-8 w-8">
                          <img src={item} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* <div className="grid xl:grid-cols-2 grid-cols-1  gap-[30px] md:mt-14 mt-8">
                  <a
                    className=" flex space-x-4 shadow-box7 rounded p-5 bg-white"
                    href="#"
                  >
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc1}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <span className=" text-primary  text-base mb-1">
                        Prev Post
                      </span>
                      <div className="mb-1 font-semibold text-black">
                        How Technology Can Help You Stay Health
                      </div>
                    </div>
                  </a>

                  <a
                    className=" flex  flex-row-reverse shadow-box7 bg-white rounded p-5"
                    href="#"
                  >
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded ml-4">
                        <img
                          src={rc3}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-right ">
                      <span className=" text-primary  text-base mb-1">
                        Next Post
                      </span>
                      <div className="mb-1 font-semibold text-black">
                        How Technology Can Help You Stay Healthy
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>

            {/* <div className=" mt-14">
              <h3 className=" mb-6">3 Comments</h3>
              <ul className="comments space-y-4">
                <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                  <div className="flex">
                    <div className="flex-none">
                      <div className="h-[72px] w-[72px] rounded-full mr-6">
                        <img
                          src={insIcon1}
                          alt=""
                          className="w-full block h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <span className="text-xl  font-semibold text-black block mb-1">
                            Ferira Watson
                          </span>
                          <span className=" block">Oct 09, 2021</span>
                        </div>
                        <a
                          href="#"
                          className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                            items-center space-x-2 leading-[1]"
                        >
                          <span className=" text-xl leading-[1] top-[3px] relative">
                            <iconify-icon
                              icon="charm:forward"
                              rotate="180deg"
                            ></iconify-icon>
                          </span>
                          <span className=" leading-[1]">Reply</span>
                        </a>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                  <ul className="comments mt-6 space-y-4 ml-14 border-t border-[#ECECEC]">
                    <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                      <div className="flex">
                        <div className="flex-none">
                          <div className="h-[72px] w-[72px] rounded-full mr-6">
                            <img
                              src={insIcon3}
                              alt=""
                              className="w-full block h-full object-contain rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between mb-2">
                            <div>
                              <span className="text-xl  font-semibold text-black block mb-1">
                                Ferira Watson
                              </span>
                              <span className=" block">Oct 09, 2021</span>
                            </div>
                            <a
                              href="#"
                              className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                                    items-center space-x-2 leading-[1]"
                            >
                              <span className=" text-xl leading-[1] top-[3px] relative">
                                <iconify-icon
                                  icon="charm:forward"
                                  rotate="180deg"
                                ></iconify-icon>
                              </span>
                              <span className=" leading-[1]">Reply</span>
                            </a>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <div className="flex">
                    <div className="flex-none">
                      <div className="h-[72px] w-[72px] rounded-full mr-6">
                        <img
                          src={insIcon2}
                          alt=""
                          className="w-full block h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <span className="text-xl  font-semibold text-black block mb-1">
                            Ferira Watson
                          </span>
                          <span className=" block">Oct 09, 2021</span>
                        </div>
                        <a
                          href="#"
                          className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                            items-center space-x-2 leading-[1]"
                        >
                          <span className=" text-xl leading-[1] top-[3px] relative">
                            <iconify-icon
                              icon="charm:forward"
                              rotate="180deg"
                            ></iconify-icon>
                          </span>
                          <span className=" leading-[1]">Reply</span>
                        </a>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div> */}
            {/* <div className=" mt-14">
              <h3 className=" mb-4">Leave A Reply</h3>
              <div>
                Your email address will not be published. Requires fields are
                marked*
              </div>
              <ContactForm />
            </div> */}
          </div>

          {/* <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="wdiget widget_search">
                <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search keyword..."
                      className="border-none focus:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="flex-none">
                    <button className="btn btn-primary">
                      <img src={search} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="wdiget widget_catagory">
                <h4 className="widget-title">Categories</h4>

                <ul className=" list-item space-y-4">
                  <li className=" block">
                    <a
                      href="#"
                      className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                    >
                      <span>Development (23)</span>
                      <span className=" text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </a>
                  </li>

                  <li className=" block">
                    <a
                      href="#"
                      className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                    >
                      <span>Art &amp; Design (45)</span>
                      <span className=" text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </a>
                  </li>

                  <li className=" block">
                    <a
                      href="#"
                      className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                    >
                      <span>Data Science (14)</span>
                      <span className=" text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </a>
                  </li>

                  <li className=" block">
                    <a
                      href="#"
                      className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                    >
                      <span>Data Science (14)</span>
                      <span className=" text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </a>
                  </li>

                  <li className=" block">
                    <a
                      href="#"
                      className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                    >
                      <span>Technology (28)</span>
                      <span className=" text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </a>
                  </li>

                  <li className=" block">
                    <a
                      href="#"
                      className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
                    >
                      <span>It Management (34)</span>
                      <span className=" text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wdiget widget-recent-post">
                <h4 className=" widget-title">Related Courses</h4>
                <ul className="list">
                  <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc1}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-semibold text-black">
                        How to Manage Ads For Clients The Right Way
                      </div>
                      <a className=" text-secondary font-semibold" href="#">
                        Read More
                      </a>
                    </div>
                  </li>
                  <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc2}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-semibold text-black">
                        How to Manage Ads For Clients The Right Way
                      </div>
                      <a className=" text-secondary font-semibold" href="#">
                        Read More
                      </a>
                    </div>
                  </li>
                  <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc3}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-semibold text-black">
                        How to Manage Ads For Clients The Right Way
                      </div>
                      <a className=" text-secondary font-semibold" href="#">
                        Read More
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="wdiget">
                <h4 className="widget-title">Popular Tags</h4>
                <ul className="flex flex-wrap">
                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Business
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Education
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Design
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Students
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Teachers
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      classNameroom
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Online
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      e-Learning
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text- 
                        white"
                    >
                      Book
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wdiget">
                <h4 className="widget-title">Instagram Feed</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    insIcon1,
                    insIcon2,
                    insIcon3,
                    insIcon4,
                    insIcon5,
                    insIcon6,
                  ].map((item, index) => (
                    <div key={index}>
                      <a
                        href="#"
                        className="group relative block h-20 w-full rounded"
                      >
                        <img
                          src={item}
                          alt=""
                          className="block h-full w-full rounded object-cover"
                        />
                        <div
                          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black 
                            bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                        >
                          <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                            <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
        )
      }
      
    </div>
  );
};

export default BlogPost;
