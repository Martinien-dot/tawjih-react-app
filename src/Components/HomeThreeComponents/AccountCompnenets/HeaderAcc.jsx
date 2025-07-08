/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenuAcc from "./MobileMenuAcc";
// import logo from "../assets/images/logo/logo.svg";


const HeaderAcc = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/react-templates/edumim"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              >
                {/* <img src={logo} alt="logo" /> */}
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li>
                      <Link to={"/react-templates/edumim"}>
                        Accueil
                      </Link>
                    </li>
                    
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/blog-standard"}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-blog"}>
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/contacts"}>
                        Contacts
                      </Link>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/candidatures"}>
                        Candidatures
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={"/react-templates/edumim/connect"}>
                      Se connecter / S'inscrire
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" hidden lg:block">
                    <a href="#" className="btn btn-primary py-[15px] px-8">
                      Start Free Trial
                    </a>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenuAcc
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default HeaderAcc;
