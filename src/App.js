import './App.scss';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import OurProjectsPage from './pages/OurProjectsPage/OurProjects';
import NiagaraOneProjPage from './pages/NiagaraOneProjPage/NiagaraOneProjPage';
import OakvilleOneProjPage from './pages/OakvilleOneProPage/OakvilleOneProjPage';
import AncasterOneProjPage from './pages/AncasterOneProjPage/AncasterOneProjPage';
import BurlingtonOneProjPage from "./pages/BurlingtonOneProjPage/BurlingtonOneProjPage";
import MississaugaStoreProjPage from "./pages/MississaugaStoreProjPage/MississaugaStoreProjPage";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const FooterWithCondition = () => {
    const location = useLocation();
    if (location.pathname !== '/contact-us') {
      return <Footer />;
    }
    return null;
  };
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [location]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <ToastContainer
      position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-projects" element={<OurProjectsPage/>} /> 
        <Route path="/our-projects/niagara-1-project" element={<NiagaraOneProjPage/>} />
        <Route path="/our-projects/oakville-1-project" element={<OakvilleOneProjPage/>} />
        <Route path="/our-projects/ancaster-1-project" element={<AncasterOneProjPage/>} />
        <Route path="/our-projects/burlington-1-project" element={<BurlingtonOneProjPage/>} />
        <Route path="/our-projects/mississauga-store-project" element={<MississaugaStoreProjPage/>} />
        {/* <Route path="/services" element={<ServicesPage/>} /> */}
        <Route path="/about-us" element={<AboutUsPage/>} /> 
        <Route path="/contact-us" element={<ContactPage/>} /> 
        {/* <Route path="/get-a-quote" element={<QuotePage/>} /> 
        <Route path="/login" element={<LoginPage/>} />  */}
        </Routes>
      <FooterWithCondition/>
    </BrowserRouter>
  );
}
export default App;