import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
        {/* <Route path="/services" element={<ServicesPage/>} />
        <Route path="/about-us" element={<AboutPage/>} /> 
        <Route path="/contact-us" element={<ContactPage/>} /> 
        <Route path="/get-a-quote" element={<QuotePage/>} /> 
        <Route path="/login" element={<LoginPage/>} />  */}
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;