import { useNavigate } from "react-router-dom";
import "./Process.scss";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    desc: "We visit your home, listen to your vision, and assess the space — completely free of charge.",
  },
  {
    number: "02",
    title: "Design & Quote",
    desc: "You receive a detailed plan and transparent quote with materials, timeline, and costs laid out clearly.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Our core team and trusted trades bring the design to life with quality craftsmanship and daily updates.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    desc: "We walk through every detail together and don't consider the job done until you love the result.",
  },
];

export default function Process() {
  const navigate = useNavigate();

  return (
    <section className="home-process">
      <div className="home-process__header">
        <span className="home-process__label">How We Work</span>
        <h2 className="home-process__title">Our Process</h2>
        <div className="home-process__divider"></div>
      </div>

      <div className="home-process__steps">
        {STEPS.map((step) => (
          <div key={step.number} className="home-process__step">
            <span className="home-process__number">{step.number}</span>
            <h3 className="home-process__step-title">{step.title}</h3>
            <p className="home-process__step-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="home-process__cta">
        <button
          className="home-process__btn"
          onClick={() => navigate("/contact-us")}
        >
          Start With a Free Consultation
        </button>
      </div>
    </section>
  );
}
