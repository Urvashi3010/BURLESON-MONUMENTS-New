import { Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import home05 from '../assets/images/fan-cards/home-05.jpg';
import home06 from '../assets/images/fan-cards/home-06.jpg';
import home08 from '../assets/images/fan-cards/home-02.jpg';

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

      <section className="testimonials-hero">
        <div className="testimonials-hero-content">
          <span className="section-label">CUSTOMER TESTIMONIALS</span>
          <h1>
            Stories That
            <br />
            <span>Speak From The Heart</span>
          </h1>
          <p>
            Every memorial tells a story. Hear from families who have
            trusted us to create lasting tributes for their loved ones.
          </p>
          <Link to="/contact" className="testimonial-cta">
            Talk With Our Team
          </Link>
        </div>

        <div className="testimonials-hero-visual">
          <div className="vintage-frame frame-one">
            <img src={home05} alt="Memorial craftsmanship" />
          </div>
          <div className="vintage-frame frame-two">
            <img src={home06} alt="Memorial design" />
          </div>
          <div className="vintage-frame frame-three">
            <img src={home08} alt="Memorial monument" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-content">

        <ScrollReveal className="testimonials-heading">
          <span className="section-label">FAMILY EXPERIENCES</span>
          <h2>Words That Mean So Much</h2>
          <p>
            We are grateful for the trust families place in us.
            Their experiences reflect the care and dedication behind
            every memorial we create.
          </p>
        </ScrollReveal>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 120}>
              <div className="testimonial-card">

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
            </ScrollReveal>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Testimonials;