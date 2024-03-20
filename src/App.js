import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Navbar from "../src/components/Header/Navbar";
import Burger from './components/Header/Burger';
import HomePage from './pages/HomePage/HomePage';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Burger />
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