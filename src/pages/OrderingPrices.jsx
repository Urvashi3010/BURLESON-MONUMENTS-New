import MemorialSidebar from '../components/MemorialSidebar';
import memorialImage from '../assets/images/memorials/memorial-photos/memorial-photos-06.jpg';

function OrderingPrices() {
  return (
    <div className="ordering-page">
      <section className="page-banner">
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

              <img
                className="ordering-flower"
                src={memorialImage}
                alt="Memorial photo"
              />
            </div>

            <div className="ordering-options">
              <h3>Other Available Options</h3>
              <ul>
                <li>Flower Vase</li>
                <li>Memorial Portrait</li>
              </ul>
            </div>

            <div className="granite-pricing">
              <h2>Granite Prices</h2>
              <h3>Fluctuate Annually Please Contact Our Staff For A Quote.</h3>
            </div>

            <div className="ordering-phone">
              <p>For additional information or to place an order, please call</p>
              <a href="tel:+18008632662">1-800-863-2662</a>
            </div>

            <div className="ordering-assurance">
              <h3>Get the Service You Deserve With Burleson Monuments:</h3>
              <p>There’s never any pressure or obligation.</p>
              <p>All of our gravestones are guaranteed.</p>
              <p>We obtain and complete the required cemetery forms for you free of charge.</p>
              <p>
                We offer custom design and engraving for cemetery memorials,
                or you can choose from our wide selection of granite colors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderingPrices;
