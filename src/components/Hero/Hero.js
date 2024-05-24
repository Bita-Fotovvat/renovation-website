import "./Hero.scss";
import Logo from "../../assets/logo/logo.png";
import { useState , useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function Hero(){
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
    console.log(yourServiceId);
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
    <section className="hero__parent">
        <section className="hero__childmobile"></section>
            <section className="hero__child1">
                <section className="hero__branding">
                    <section className="hero__logoparent">
                        <img className="hero__logo" src={Logo} alt="renontario logo" />
                        <p className="hero__slogan">A Step to Your Dream Home</p>
                    </section>
                    <p className="hero__about2">Renovation & Remodeling Company</p>
                </section>
                <h3 className="hero__formtitle">Get a Free Consultaion/ Quote</h3>
                <form ref={form} className="hero__form" onSubmit={sendEmail}>
                    <section className="hero__form--parent">
                        <input 
                        className="hero__form--name" 
                        name="from_name" 
                        type="text" 
                        placeholder="Name"  
                        value={formData.name ? formData.name:''} 
                        onChange={e=>setFormData({...formData, name:e.target.value})}
                        />
                        <input 
                        className="hero__form--city" 
                        name="from_city" 
                        type="text" 
                        placeholder="City"  
                        value={formData.city ? formData.city:''} 
                        onChange={e=>setFormData({...formData, city:e.target.value})} 
                        />
                    </section>
                    <input 
                    className="hero__form--phone" 
                    name="from_phone" 
                    type="text" 
                    placeholder="Phone Number" 
                    value={formData.phone ? formData.phone: ''} 
                    onChange={e=>setFormData({...formData, phone:e.target.value})}
                    />
                    <input 
                    className="hero__form--email" 
                    name="from_email" 
                    type="email"  
                    placeholder="Email" 
                    value={formData.email ? formData.email:''} 
                    onChange={e=>setFormData({...formData, email:e.target.value})}
                    />
                    <input 
                    className="hero__form--message" 
                    name="message" 
                    type="text"  
                    placeholder="Message (optional)" 
                    value={formData.message ? formData.message:''} 
                    onChange={e=>setFormData({...formData, message:e.target.value})}
                    />
                    <button className="hero__form--button" type="submit">Submit</button>
                </form>
            </section>
            <section className="hero__child2">
        </section>
    </section>
    )
}