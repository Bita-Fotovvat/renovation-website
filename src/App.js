import './App.scss';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
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

  return (
    <BrowserRouter>
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
        />
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
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