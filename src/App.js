import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Footer from "./components/footer";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Donation from "./pages/donation";
import Voluteers from "./pages/volunteers";
import VolunteerRegistration from "./pages/volunteerRegistration";
import AnganwadiKitProgram from "./pages/campaigns/anganwadiKitProgram";
import FeedHomelessMothers from "./pages/campaigns/feedHomelessMothers";
import BreakfastProgram from "./pages/campaigns/breakfastProgram";
import MidDayMeal from "./pages/campaigns/midDayMeal";
import AdminList from "./pages/adminList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminList />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/volunteers" element={<Voluteers />} />
        <Route
          path="/volunteer-registration"
          element={<VolunteerRegistration />}
        />
        <Route
          path="/anganwadi-kit-program"
          element={<AnganwadiKitProgram />}
        />
        <Route
          path="/feed-homeless-mothers"
          element={<FeedHomelessMothers />}
        />
        <Route path="/breakfast-program" element={<BreakfastProgram />} />
        <Route path="/mid-day-meal" element={<MidDayMeal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
