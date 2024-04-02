import "./ContactPage.scss";
import axios from "axios";
import { useState } from 'react';
import { toast } from 'react-toastify';
import PhoneIcon from "../../assets/icons/phone.png";
import EmailIcon from "../../assets/icons/email.png";
// import InstagramIcon from "../../assets/icons/instagram.png";
// import FacebookIcon from "../../assets/icons/facebook.png";
import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router";

export default function ContactPage(){
    const navigate = useNavigate();
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
            return toast("Please enter your name.", {className: 'toast'});
        }
        if (!formData.phone.trim() && !formData.email.trim()) {
            return toast("Please enter at least a phone number or an email address.", {className: 'toast'});
        }
        try {
            const response = await axios.post(`http://localhost:8080/requests`, formData);
            if (response.status === 201) {
                toast("Success! You will be contacted soon.", {className: 'toast'});
                setFormData({ name: '', city: '', phone: '', email: '', message: '' });
            } else {
                console.error('Failed to submit:', response);
                toast('Failed to submit your request. Please try again.', {className: 'toast'});
            }
        } catch (error) {
            console.error('Error saving to requests:', error);
            toast('An error occurred while submitting your request. Please try again.', {className: 'toast'});
        }
    };

    return(
        <main className="mainparent">
            {/* <div className="contact__image"></div> */}
            <section className="contact__parent">
                <section className="contact__child1">
                    <h3 className="contact__formtitle">Get a Consultation/ Quotation</h3>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <section className="contact__form--parent">
                            <input className="contact__form--name" name="name" type="name" placeholder="Name"  value={formData.name} onChange={handleInputChange}/>
                            <input className="contact__form--city" name="city" type="city" placeholder="City"  value={formData.city} onChange={handleInputChange} />
                        </section>
                        <input className="contact__form--phone" name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange}/>
                        <input className="contact__form--email" name="email" type="email"  placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                        <input className="contact__form--message" name="message" type="message"  placeholder="Message (optional)" value={formData.message} onChange={handleInputChange}/>
                        <button className="contact__form--button" type="submit">Submit</button>
                    </form>
                </section>
                <section className="contact__child2"></section>
                </section>
            <section className="contactinfo__parent">
                <section className="contactinfo__container1">
                    <h3 className="contactinfo__title">Connect with Us</h3>
                    <section className="contactinfo__phoneparent">
                        <img className="contactinfo__icon" src={PhoneIcon} alt="phone icon" />
                        <section className="contactinfo__phoneparent--text">
                            <p className="contactinfo__phone">(289) 489-9689</p>
                            <p className="contactinfo__phone">(437) 599-1717</p>
                        </section>
                    </section>
                    <section className="contactinfo__emailparent">
                        <img className="contactinfo__icon"  src={EmailIcon} alt="email icon" />
                        <p className="contactinfo__email">renontario@gmail.com</p>
                    </section>
                    {/* <img className="contactinfo__icon--insta" src={InstagramIcon} alt="email icon" />
                    <img  className="contactinfo__icon" src={FacebookIcon} alt="email icon" /> */}
                </section>
                <section className="contactinfo__container2">
                    <article className="contactinfo__operationhours">
                        <h2 className="contactinfo__operationhours--title">Hours of Operation</h2>
                        <p className="contactinfo__operationhours--text">Monday - Friday:<br/> 9:00AM - 5:00PM</p>
                        <p className="contactinfo__operationhours--text">Saturday - Sunday:<br/> By Appointment Only</p>
                    </article>
                    <img  className="contactinfo__logo" src={Logo} alt="company logo" onClick={()=> navigate("/")}/>
                    <p className="contactinfo__copyright">Copyright © Renontario Ltd. 2024</p>
                </section>         
            </section>
        </main>
    )
}