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
import BalShikshaAhara from "./pages/campaigns/balShikshaAhara";
import FeedHomelessMothers from "./pages/campaigns/feedHomelessMothers";
import PaushtikAhara from "./pages/campaigns/paushtikAhara";
import SwasthyaAhara from "./pages/campaigns/swasthyaAhara";
import Donors from "./pages/donors";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/volunteers" element={<Voluteers />} />
        <Route
          path="/volunteer-registration"
          element={<VolunteerRegistration />}
        />
        <Route path="/bal-shiksha-ahara" element={<BalShikshaAhara />} />
        <Route
          path="/feed-homeless-mothers"
          element={<FeedHomelessMothers />}
        />
        <Route path="/paushtik-ahara" element={<PaushtikAhara />} />
        <Route path="/swasthya-ahara" element={<SwasthyaAhara />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
