import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeOne from "./Components/Home/HomeOne";
import HomeThree from "./Components/Home/HomeThree";
import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import AboutTwo from "./Components/Pages/AboutTwo";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";
import Connect from "./Components/connect";
import Inscription from "./Components/Inscription";

import Offre from "./Components/Pages/Offre";
import Articles from "./Components/Pages/Article";

import Account from "./Components/Pages/Account";
import OffreInformation from "./Components/OffreInformation";
import OffrreDetails from "./Components/Pages/OffreDetails";
import Candidatures from "./Components/Candidatures";
import SuiviCandidature from "./Components/SuiviCandidature";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={"/react-templates/edumim"} />}
          />
          <Route path="/react-templates/edumim" element={<HomeOne />} />
          <Route
            path="/react-templates/edumim/home-two"
            element={<HomeTwo />}
          />
          <Route
            path="/react-templates/edumim/home-three"
            element={<HomeThree />}
          />
          <Route path="/react-templates/edumim/about" element={<AboutOne />} />
          <Route
            path="/react-templates/edumim/about-two"
            element={<AboutTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor"
            element={<InstructorOne />}
          />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor-details"
            element={<InstructorDetails />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route path="/react-templates/edumim/courses" element={<Courses />} />




          <Route
            path="/react-templates/edumim/courses-sidebar"
            element={<CourseSideBar />}
          />
          <Route
            path="/react-templates/edumim/single-course"
            element={<SingleCourse />}
          />
          <Route
            path="/react-templates/edumim/blog-standard"
            element={<BLogStandard />}
          />
          <Route
            path="/react-templates/edumim/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/react-templates/edumim/contacts"
            element={<ContactUs />}
          />
          <Route
            path="/react-templates/edumim/connect"
            element={<Connect />}
          />

          <Route
            path="/react-templates/edumim/candidatures"
            element={<Candidatures />}
          />

          <Route
            path="/react-templates/edumim/suivicandidature"
            element={<SuiviCandidature />}
          />

          <Route
            path="/react-templates/edumim/inscription"
            element={<Inscription />}
          />
          <Route
            path="/react-templates/edumim/account"
            element={<Account />}
          />
          <Route path="/react-templates/edumim/offre">

            <Route
              index
              element={<Offre />}
            />

            <Route
              path="/react-templates/edumim/offre/:idOffre"
              element={<OffrreDetails />}
            />

          </Route>

          <Route path="/react-templates/edumim/Articles"  >
            <Route
              index
              element={<BLogStandard />}
            />
            <Route
              path="/react-templates/edumim/Articles/:idArticle"
              element={<SingleBlog />}
            />
          </Route>


          <Route path="/react-templates/edumim/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
