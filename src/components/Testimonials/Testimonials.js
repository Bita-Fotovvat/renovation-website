import "./Testimonials.scss";

// Excerpts from real reviews on the Xeus Home Google Business Profile.
const REVIEWS = [
  {
    quote:
      "We couldn't be happier with the results. They installed a beautiful new island and completely transformed the space. From start to finish, they were professional, skilled, and incredibly easy to work with. Their pricing was very fair for the high quality of work they delivered.",
    author: "Leila Hoseinzadeh",
    project: "Kitchen Renovation",
  },
  {
    quote:
      "Their attention to detail and the quality of their work is what stands out. The finishing was exceptionally clean, from the wall corners to every final detail. It wasn't just about getting the job done, it was about making sure their customer was happy with the final result.",
    author: "Fatemeh Bagheri",
    project: "Commercial Renovation",
  },
  {
    quote:
      "Six months after my basement renovation, the quality still impresses me. The crew's attention to detail, clear communication, and commitment to doing the job right made the whole process smooth. I trust them for my next projects.",
    author: "Mani Mahdavian",
    project: "Basement Renovation",
  },
  {
    quote:
      "Their pricing was the most competitive among all the quotes I received, and the quality of the work was clean, detailed, and very well done. He also recommended custom cabinetry at a similar price point, and the result looks far more luxurious and fits my space perfectly.",
    author: "Maryam HosseinKord",
    project: "Kitchen & Laundry Renovation",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Xeus+Home/@43.7760746,-80.6618992,8z/data=!3m1!4b1!4m8!3m7!1s0x85f6774c447a713f:0x6a856596ec983a0a!8m2!3d43.7836619!4d-79.3426914!9m1!1b1!16s%2Fg%2F11vyzxj613";

export default function Testimonials() {
  return (
    <section className="home-testimonials">
      <div className="home-testimonials__header">
        <span className="home-testimonials__label">Client Stories</span>
        <h2 className="home-testimonials__title">What Our Clients Say</h2>
        <div className="home-testimonials__divider"></div>
      </div>

      <div className="home-testimonials__grid">
        {REVIEWS.map((review, index) => (
          <blockquote key={index} className="home-testimonials__card">
            <div className="home-testimonials__stars" aria-label="5 out of 5 stars">
              {"★★★★★"}
            </div>
            <p className="home-testimonials__quote">{review.quote}</p>
            <footer className="home-testimonials__footer">
              <cite className="home-testimonials__author">{review.author}</cite>
              <span className="home-testimonials__location">{review.project}</span>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="home-testimonials__cta">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="home-testimonials__link"
        >
          Read Our Reviews on Google →
        </a>
      </div>
    </section>
  );
}
