import { useNavigate } from "react-router-dom";
import "./CtaBanner.scss";

export default function CtaBanner() {
  const navigate = useNavigate();

  return (
    <section className="home-cta">
      <div className="home-cta__container">
        <span className="home-cta__label">Let's Build Together</span>
        <h2 className="home-cta__title">Ready to Transform Your Home?</h2>
        <p className="home-cta__desc">
          Book a free in-home consultation and get a detailed, no-obligation
          quote from our team.
        </p>
        <div className="home-cta__actions">
          <button
            className="home-cta__btn"
            onClick={() => navigate("/contact-us")}
          >
            Get a Free Quote
          </button>
          <a href="tel:4375991717" className="home-cta__phone">
            437-599-1717
          </a>
        </div>
      </div>
    </section>
  );
}
