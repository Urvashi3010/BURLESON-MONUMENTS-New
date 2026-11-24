import MemorialSidebar from '../components/MemorialSidebar';
import memorialImage from '../assets/images/memorials/memorial-photos/memorial-photos-06.jpg';

function OrderingPrices() {
  return (
    <div className="ordering-page">
      <section className="page-banner ordering-banner">
        <div>
          <span className="section-label">ORDERING INFORMATION</span>
          <h1>Ordering &amp; Prices</h1>
          <p>
            Our staff is here to help you select and order a meaningful memorial.
          </p>
        </div>
      </section>

      <section className="ordering-content">
        <div className="memorial-layout">
          <MemorialSidebar title="Design Categories" />

          <div className="ordering-main">
            <div className="ordering-intro">
              <h2>Ordering Process</h2>
              <p>
                Please provide the following information with your order:
              </p>
            </div>

            <div className="ordering-details">
              <ol className="ordering-list">
                <li>Design Selection</li>
                <li>Granite Color</li>
                <li>Inscription (name(s), dates, verse, etc.)</li>
                <li>Cemetery</li>
              </ol>

              <figure className="ordering-image-card">
                <img src={memorialImage} alt="Memorial in a cemetery" />
                <figcaption>Every detail is selected with care.</figcaption>
              </figure>
            </div>

            <div className="ordering-options">
              <h3>Other Available Options</h3>
              <ul>
                <li>Flower Vase</li>
                <li>Memorial Portrait</li>
              </ul>
            </div>

            <div className="granite-pricing">
              <span className="pricing-kicker">PERSONALIZED QUOTES</span>
              <h2>Granite Prices</h2>
              <p>
                Granite prices fluctuate annually. Contact our staff for a
                current quote tailored to your memorial.
              </p>
            </div>

            <div className="ordering-phone">
              <p>Questions or ready to place an order?</p>
              <a href="tel:+18008632662">1-800-863-2662</a>
              <span>Call our team for friendly, no-pressure assistance.</span>
            </div>

            <div className="ordering-assurance">
              <h3>Get the Service You Deserve With Burleson Monuments:</h3>
              <ul>
                <li>There’s never any pressure or obligation.</li>
                <li>All of our gravestones are guaranteed.</li>
                <li>
                  We complete the required cemetery forms for you free of charge.
                </li>
                <li>
                  Choose custom design and engraving or select from a wide
                  range of granite colors.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderingPrices;
