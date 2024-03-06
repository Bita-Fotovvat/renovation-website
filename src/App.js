import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<ServicesPage/>} />
        <Route path="/about-us" element={<AboutPage/>} /> 
        <Route path="/contact-us" element={<ContactPage/>} /> 
        <Route path="/get-a-quote" element={<QuotePage/>} /> 
        <Route path="/login" element={<LoginPage/>} />  */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;