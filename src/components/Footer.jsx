import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <span>BURLESON</span>
            <small>MONUMENTS</small>
          </Link>

          <p>
            Since 1970, Burleson Monuments has been helping
            families create an everlasting expression of
            their devotion and love.
          </p>

          <Link to="/about" className="footer-read-more">
            Learn More <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/memorials">Memorials</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h3>Our Memorials</h3>
          <Link to="/memorials/single-markers-granite">
            Granite Markers
          </Link>
          <Link to="/memorials/single-markers-bronze">
            Bronze Markers
          </Link>
          <Link to="/memorials/single-monuments">
            Single Monuments
          </Link>
          <Link to="/memorials/companion-monuments">
            Companion Monuments
          </Link>
          <Link to="/memorials/cremation-memorials">
            Cremation Memorials
          </Link>
          <Link to="/memorials/memorial-benches">
            Memorial Benches
          </Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>

          <div>
            <MapPin size={19} />
            <p>
              216 East Ellison St.,<br />
              Burleson, TX 76028
            </p>
          </div>

          <div>
            <Phone size={19} />
            <p>
              <a href="tel:8172952662">817-295-2662</a>
              <a href="tel:8008632662">800-863-2662</a>
            </p>
          </div>

          <div>
            <Mail size={19} />
            <a href="mailto:info@burlesonmonuments.com">
              info@burlesonmonuments.com
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Burleson Monuments.
          All Rights Reserved.
        </p>

        <Link to="/contact">Contact Our Team</Link>
      </div>

    </footer>
  );
}

export default Footer;