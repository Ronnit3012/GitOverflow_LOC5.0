import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import SignUp from "./components/SignUp.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Courses from "./components/Courses.jsx";
import Trending from "./components/Trending.jsx";
import PinDetail from "./components/PinDetail.jsx";
import Feed from "./components/Feed.jsx";
import Search from "./components/Search.jsx";
import Home from "./container/Home";
import NavbarMain from "./components/NavbarMain";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useSelector } from "react-redux";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdDownloadForOffline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
// import { client, urlFor } from "../client";
import MasonryLayout from "./components/MasonryLayout";
// import { pinDetailMorePinQuery, pinDetailQuery } from "../utils/data";
// import Spinner from "./Spinner";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    // <GoogleOAuthProvider
    //   clientId={`{process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    // >
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="courses" element={<Courses />} />
      <Route path="contactform" element={<ContactForm />} />
      <Route path="trending" element={<Trending />} />
      <Route path="/" element={<Feed path="random" />} />
      <Route
        path="/category/:categoryId"
        element={<Feed path={"category"} />}
      />
      <Route
        path="/pin-detail/:pinId"
        element={<PinDetail user={user && user} />}
      />
      <Route path="/Home/*" element={<Home />} />
      {/* <Route
            path="/create-pin"
            element={<CreatePin user={user && user} />}
          /> */}
      {/* <Route
          path="/search"
          element={
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          }
        /> */}
    </Routes>
    // </GoogleOAuthProvider>
  );
}

export default App;
