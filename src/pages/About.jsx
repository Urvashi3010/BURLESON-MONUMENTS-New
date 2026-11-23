import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  Users,
  FileCheck,
  DraftingCompass
} from 'lucide-react';
import aboutImage from '../assets/images/fan-cards/home-03.jpg';

function About() {
  const features = [
    {
      icon: <Heart />,
      title: 'Personalized Attention',
      description:
        'We understand that every family has unique wishes. Our team helps create memorials that reflect individual memories and lives.'
    },
    {
      icon: <Users />,
      title: 'Experienced Consultants',
      description:
        'Our memorial consultants bring generations of experience in the monument business to help families make informed decisions.'
    },
    {
      icon: <FileCheck />,
      title: 'Written Order Confirmation',
      description:
        'Every order includes written confirmation so families can review the details of their selected memorial.'
    },
    {
      icon: <DraftingCompass />,
      title: 'Computer-Generated Designs',
      description:
        'We provide a computer-generated drawing with each order to help visualize the memorial design.'
    }
  ];

  return (
    <div className="about-page">

      {/* PAGE BANNER */}
      <section className="about-banner">
        <div className="about-banner-content">
          <span className="section-label">ABOUT BURLESON MONUMENTS</span>
          <h1>Honoring Memories Since 1970</h1>
          <p>
            Helping families create an everlasting expression
            of devotion and love.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <ScrollReveal>
  <section className="about-intro">
        <div className="about-intro-image">
                  <img
                src={aboutImage}
                alt="Burleson Monuments"
                />
        </div>

        <div className="about-intro-content">
          <span className="section-label">OUR STORY</span>

          <h2>A Tradition of Care and Remembrance</h2>

          <p>
            Since 1970, Burleson Monuments has been helping families
            create lasting expressions of love and devotion through
            thoughtfully designed memorials.
          </p>

          <p>
            We understand that choosing a memorial can be a stressful
            experience. Our memorial consultants make every effort
            to provide information and design assistance without
            sales pressure.
          </p>

          <p>
            With generations of experience in the monument business,
            our team is prepared to help families design beautiful
            and durable memorials for their loved ones.
          </p>

          <Link to="/memorials" className="text-link">
            Explore Our Memorials <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* OUR APPROACH */}
      <section className="about-approach">
        <ScrollReveal className="about-section-heading">
          <span className="section-label">OUR APPROACH</span>
          <h2>Guidance You Can Feel Confident In</h2>
          <p>
            We believe families deserve clear information,
            thoughtful assistance and confidence throughout
            the memorial selection process.
          </p>
        </ScrollReveal>

        <ScrollReveal className="about-feature-grid">
          {features.map((feature, index) => (
            <div className="about-feature-card" key={index}>
              <div className="about-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* OUR COMMITMENT */}
      <ScrollReveal>

      <section className="about-commitment">
        <div>
          <span className="section-label">OUR COMMITMENT</span>
          <h2>Beautiful Designs. Quality Materials. Lasting Memories.</h2>
          <p>
            From selecting materials to reviewing design details,
            we aim to make the memorial process more comfortable
            and straightforward for every family.
          </p>

          <Link to="/contact" className="btn-primary">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </ScrollReveal>
    </div>
  );
}

export default About;