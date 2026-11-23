import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    title: 'Above and Beyond the Call of Duty',
    message:
      'Their artistic and dedicated work truly honors our heroes.',
    name: 'River Oaks Volunteer Fire Dept.',
    location: 'River Oaks, Texas'
  },
  {
    title: 'A Company That Really Cares',
    message:
      'You went beyond the normal in your care and workmanship. Thank you for a company that really cares.',
    name: 'Shelby K.',
    location: 'Franklin, Texas'
  },
  {
    title: 'Beautiful Work',
    message:
      'The monument is beautiful and the craftsmanship is excellent. Thank all of you for blessing us.',
    name: 'The Ruby Family',
    location: 'Venus, Texas'
  },
  {
    title: 'Very Pleased',
    message:
      'Just wanted to thank you for my family’s nice monument. I am very pleased with it.',
    name: 'Betty',
    location: 'Buchanan Dam, Texas'
  }
];

function Testimonials() {
  return (
    <div className="testimonials-page">

      <section className="page-banner">
        <div>
          <span className="section-label">KIND WORDS</span>
          <h1>Customer Testimonials</h1>
          <p>Hear from families who have trusted us to honor their loved ones.</p>
        </div>
      </section>

      <section className="testimonials-content">

        <div className="testimonials-heading">
          <span className="section-label">FAMILY EXPERIENCES</span>
          <h2>Words That Mean So Much</h2>
          <p>
            We are grateful for the trust families place in us.
            Their experiences reflect the care and dedication behind
            every memorial we create.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <Quote className="testimonial-quote-icon" size={34} />

              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>

              <h3>{item.title}</h3>

              <p className="testimonial-message">
                “{item.message}”
              </p>

              <div className="testimonial-author">
                <span className="author-line"></span>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Testimonials;