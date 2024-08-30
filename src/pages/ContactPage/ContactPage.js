import "./ContactPage.scss";
import axios from "axios";
import { useState , useRef } from 'react';
import { toast } from 'react-toastify';
import PhoneIcon from "../../assets/icons/phone.png";
import EmailIcon from "../../assets/icons/email.png";
// import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';

export default function ContactPage(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        phone: '',
        email: '',
        message: ''
    });
    const form = useRef();
    const yourServiceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const yourTemplateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const yourPublicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;
    const sendEmail = (e) => {
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
        emailjs
          .sendForm(yourServiceId, yourTemplateId, form.current, {
            publicKey: yourPublicKey,
          })
          .then(
            () => {
              console.log('SUCCESS!');
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
            },
            (error) => {
              console.log('FAILED...', error.text);
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
            },
          );
          setFormData({
            name:'',
            city:'',
            phone:'',
            email:'',
            message:''
          })
        }
    return(
        <main className="mainparent">
            <section className="contact__parent">
                <section className="contact__child1">
                    <h3 className="contact__formtitle">Get a Consultation/ Quotation</h3>
                    <form ref={form} className="hero__form" onSubmit={sendEmail}>
                    <section className="contact__form--parent">
                        <input 
                        className="contact__form--name" 
                        name="from_name" 
                        type="text" 
                        placeholder="Name"  
                        value={formData.name ? formData.name:''} 
                        onChange={e=>setFormData({...formData, name:e.target.value})}
                        />
                        <input 
                        className="contact__form--city" 
                        name="from_city" 
                        type="text" 
                        placeholder="City"  
                        value={formData.city ? formData.city:''} 
                        onChange={e=>setFormData({...formData, city:e.target.value})} 
                        />
                    </section>
                    <input 
                    className="contact__form--phone" 
                    name="from_phone" 
                    type="text" 
                    placeholder="Phone Number" 
                    value={formData.phone ? formData.phone: ''} 
                    onChange={e=>setFormData({...formData, phone:e.target.value})}
                    />
                    <input 
                    className="contact__form--email" 
                    name="from_email" 
                    type="email"  
                    placeholder="Email" 
                    value={formData.email ? formData.email:''} 
                    onChange={e=>setFormData({...formData, email:e.target.value})}
                    />
                    <input 
                    className="contact__form--message" 
                    name="message" 
                    type="text"  
                    placeholder="Message (optional)" 
                    value={formData.message ? formData.message:''} 
                    onChange={e=>setFormData({...formData, message:e.target.value})}
                    />
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
                            <p className="contactinfo__phone">(437) 599-1717</p>
                        </section>
                    </section>
                    <section className="contactinfo__emailparent">
                        <img className="contactinfo__icon"  src={EmailIcon} alt="email icon" />
                        <p className="contactinfo__email">contact@xeushome.ca</p>
                    </section>
                </section>
                <section className="contactinfo__container2">
                    <article className="contactinfo__operationhours">
                        <h2 className="contactinfo__operationhours--title">Hours of Operation</h2>
                        <p className="contactinfo__operationhours--text">Monday - Friday:<br/>8:30AM - 6:30PM</p>
                        <p className="contactinfo__operationhours--text">Saturday - Sunday:<br/>8:30AM - 6:30PM <br/>(By Appointment Only)</p>
                    </article>
                    {/* <img  className="contactinfo__logo" src={Logo} alt="company logo" onClick={()=> navigate("/")}/> */}
                    <p className="contactinfo__copyright">Copyright © Xeus Home Ltd. 2024</p>
                </section>         
            </section>
        </main>
    )
}