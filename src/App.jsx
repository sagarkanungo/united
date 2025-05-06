
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Company from "./pages/company/about/AboutCompany";
import WhyChooseUs from "./pages/company/why-choose-us/WhyChooseUs";
import ContactUs from "./pages/company/contact/ContactUs";
import FAQ from "./pages/company/Faq/FAQ";
import StaffAugmentation from "./pages/services/starff/StaffAuggmentation.";
import WebDevelopmentPage from "./pages/services/webDev/WebDevelopmentPage";
import CloudServicePage from "./pages/services/cloudservice/CloudServicePage";
import MobileAppDevelopment from "./pages/services/mobileapp/MobileAppDevelopment";
import ContactPage from "./pages/contact/ContactPage";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <>
      <div>
        <LoadingProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/company/about" element={<Company />}></Route>
            <Route
              path="/company/why-choose-us"
              element={<WhyChooseUs />}
            ></Route>
            <Route path="/company/contact-us" element={<ContactUs />}></Route>
            <Route path="/company/FAQ" element={<FAQ />}></Route>
            <Route
              path="/services/staff"
              element={<StaffAugmentation />}
            ></Route>
            <Route
              path="/services/webDev"
              element={<WebDevelopmentPage />}
            ></Route>
            <Route
              path="/services/cloudservice"
              element={<CloudServicePage />}
            ></Route>
            <Route
              path="/services/mobileapp"
              element={<MobileAppDevelopment />}
            ></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Routes>
        </LoadingProvider>
      </div>
    </>
  );
}

export default App;
