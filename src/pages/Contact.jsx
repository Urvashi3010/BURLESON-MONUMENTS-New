import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import contactHeroImage from '../assets/images/fan-cards/home-04.webp';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const typingWords = [
  'We are here to help.',
  'Your questions matter to us.',
  'Let us help you create a lasting memory.'
];

const [wordIndex, setWordIndex] = useState(0);
const [displayText, setDisplayText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentWord = typingWords[wordIndex];

  let speed = isDeleting ? 45 : 100;

  if (!isDeleting && displayText === currentWord) {
    speed = 1600;
  }

  const timer = setTimeout(() => {
    if (!isDeleting && displayText === currentWord) {
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typingWords.length);
    } else if (isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
    }
  }, speed);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, wordIndex]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || 'Memorial Inquiry'
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:info@burlesonmonuments.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">

      <section className="page-banner contact-banner">
        <div className="contact-banner-content">
          <span className="section-label">GET IN TOUCH</span>
          <h1>Contact Us</h1>
          <p className="typing-text">
            {displayText}
            <span className="typing-cursor">|</span>
          </p>
        </div>
        <div className="contact-banner-image hero-image-reveal">
          <img src={contactHeroImage} alt="Memorial in a peaceful cemetery" />
        </div>
      </section>

      <section className="contact-content">

        <div className="contact-heading">
          <span className="section-label">WE ARE HERE TO HELP</span>
          <h2>Let's Talk About Your Memorial</h2>
          <p>
            Whether you have questions about memorial designs,
            materials, or ordering, our team is ready to assist you.
          </p>
        </div>

        <div className="contact-layout">

          <div className="contact-information">

            <h3>Contact Information</h3>

            <div className="contact-info-item">
              <MapPin />
              <div>
                <h4>Our Location</h4>
                <p>216 East Ellison St.,<br />Burleson, TX 76028</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone />
              <div>
                <h4>Office Phone</h4>
                <a href="tel:8172952662">817-295-2662</a>
                <a href="tel:8008632662">800-863-2662 (Toll-Free)</a>
              </div>
            </div>

            <div className="contact-info-item">
              <Mail />
              <div>
                <h4>Email Address</h4>
                <a href="mailto:info@burlesonmonuments.com">
                  info@burlesonmonuments.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <Clock />
              <div>
                <h4>Fax</h4>
                <p>817-295-3639</p>
              </div>
            </div>

            <div className="contact-note">
              <h4>Personalized Assistance</h4>
              <p>
                We provide memorial information and design assistance
                without sales pressure.
              </p>
            </div>

          </div>

          <div className="contact-form-wrapper">

            <h3>Send Us an Inquiry</h3>
            <p>Fill out the form and share how we can help.</p>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Inquiry <ArrowRight size={18} />
              </button>

            </form>
          </div>

        </div>

        <div className="contact-map">
          <iframe
            title="Burleson Monuments Location"
            src="https://www.google.com/maps?q=216+East+Ellison+St,+Burleson,+TX+76028&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </section>
    </div>
  );
}

export default Contact;