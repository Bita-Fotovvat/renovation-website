import "./Hero.scss";
import Logo from "../../assets/logo/logo.png";
import axios from "axios";
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Hero(){
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        phone: '',
        email: '',
        message: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            return toast.warn('Please enter your name.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        if (!formData.phone.trim() && !formData.email.trim()) {
            return  toast.warn('Please enter at least a phone number or an email address.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        try {
            const response = await axios.post(`http://localhost:8080/requests`, formData);
            if (response.status === 201) {
                toast.success('Success! You will be contacted soon.', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setFormData({ name: '', city: '', phone: '', email: '', message: '' });
            } else {
                console.error('Failed to submit:', response);
                toast.error('Failed to submit your request. Please try again.', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        } catch (error) {
            console.error('Error saving to requests:', error);
            toast.error('An error occurred while submitting your request. Please try again.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    };
    

    return(
    <section className="hero__parent">
        <section className="hero__childmobile"></section>
            <section className="hero__child1">
                <section className="hero__branding">
                    {/* <h1 className="hero__brandname">Renontario</h1> */}
                    {/* <p className="hero__about1">slogan</p> */}
                    <section className="hero__logoparent">
                        <img className="hero__logo" src={Logo} alt="renontario logo" />
                        <p className="hero__slogan">A Step to Your Dream Home</p>
                    </section>
                    <p className="hero__about2">Renovation & Remodeling Company</p>
                </section>
                <h3 className="hero__formtitle">Get a Free Consultaion/ Quote</h3>
                {/* <p className="hero__about3">Schedule a Consultation</p> */}
                {/* <p className="hero__about4">Enter your contact information to get a quotation</p> */}
                <form className="hero__form" onSubmit={handleSubmit}>
                    <section className="hero__form--parent">
                        <input className="hero__form--name" name="name" type="name" placeholder="Name"  value={formData.name} onChange={handleInputChange}/>
                        <input className="hero__form--city" name="city" type="city" placeholder="City"  value={formData.city} onChange={handleInputChange} />
                    </section>
                    <input className="hero__form--phone" name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange}/>
                    <input className="hero__form--email" name="email" type="email"  placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                    <input className="hero__form--message" name="message" type="message"  placeholder="Message (optional)" value={formData.message} onChange={handleInputChange}/>
                    {/* <input className="hero__form--message" type="phone"  placeholder="Message (optional)" /> */}
                    <button className="hero__form--button" type="submit">Submit</button>
                </form>
            </section>
            <section className="hero__child2">
                {/* <img src={HeroImage} alt="Hero Image" className="hero__image" /> */}
        </section>
    </section>
    )
}