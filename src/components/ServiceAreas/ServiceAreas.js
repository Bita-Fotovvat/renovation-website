import { Link } from "react-router-dom";
import "./ServiceAreas.scss";

const AREAS = [
  { city: "Hamilton", slug: "kitchen-renovation-hamilton" },
  { city: "Burlington", slug: "bathroom-renovation-burlington" },
  { city: "Oakville", slug: "home-renovation-oakville" },
  { city: "Mississauga", slug: "home-renovation-mississauga" },
  { city: "St. Catharines", slug: "renovation-contractor-st-catharines" },
  { city: "Greater Toronto Area", slug: "basement-renovation-gta" },
  { city: "Milton", slug: null },
  { city: "Dundas", slug: null },
  { city: "Ancaster", slug: null },
];

export default function ServiceAreas() {
  return (
    <section className="home-areas">
      <div className="home-areas__container">
        <div className="home-areas__header">
          <span className="home-areas__label">Where We Work</span>
          <h2 className="home-areas__title">Proudly Serving Ontario</h2>
          <p className="home-areas__desc">
            From Hamilton to the GTA, our team brings premium renovation
            craftsmanship to homes across the region.
          </p>
        </div>

        <ul className="home-areas__list">
          {AREAS.map((area) => (
            <li key={area.city} className="home-areas__item">
              {area.slug ? (
                <Link to={`/services/${area.slug}`} className="home-areas__link">
                  {area.city}
                </Link>
              ) : (
                <span className="home-areas__plain">{area.city}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
