import "./WhyChooseUs.scss";

const STATS = [
  {
    value: "15+",
    label: "Years of Experience",
    desc: "A decade and a half of delivering premium renovations across Ontario.",
  },
  {
    value: "9",
    label: "Cities Served",
    desc: "Hamilton, Dundas, Ancaster, Burlington, Oakville, Mississauga, Milton, St. Catharines & the GTA.",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    desc: "Quality craftsmanship, clear communication, and fair pricing on every project.",
  },
  {
    value: "Free",
    label: "Consultations",
    desc: "In-home visits, detailed quotes, and honest advice at no cost.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="home-trust">
      <div className="home-trust__container">
        {STATS.map((stat) => (
          <div key={stat.label} className="home-trust__card">
            <span className="home-trust__value">{stat.value}</span>
            <h3 className="home-trust__label">{stat.label}</h3>
            <p className="home-trust__desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
