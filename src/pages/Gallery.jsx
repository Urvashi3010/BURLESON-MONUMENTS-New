import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const excludedCategories = [
  'pet-memorials',
  'inscriptions',
  'flower-vases',
  'memorial-photos',
  'granite-colors',
  'bronze-plaques'
];

const galleryImages = Object.entries(
  import.meta.glob(
    '../assets/images/memorials/**/*.{jpg,jpeg,png,webp}',
    { eager: true, query: '?url', import: 'default' }
  )
)
  .filter(([path]) => {
    return !excludedCategories.some(category =>
      path.toLowerCase().includes(`/${category}/`)
    );
  })
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  );

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="gallery-page">

      <section className="page-banner">
        <div>
          <span className="section-label">OUR WORK</span>
          <h1>Memorial Gallery</h1>
          <p>
            Explore our collection of memorial designs and
            craftsmanship.
          </p>
        </div>
      </section>

      <section className="gallery-content">

        <ScrollReveal className="gallery-heading">
        <span className="section-label">OUR COLLECTION</span>
        <h2>Memorials and Designs</h2>
        <p>
          Browse different memorial styles and design options.
        </p>
      </ScrollReveal>

       <div className="gallery-grid">
        {galleryImages.map(([path, image]) => (
          <div
            className={`gallery-card ${selectedImage === path ? 'is-selected' : ''}`}
            key={path}
            onClick={() =>
              setSelectedImage(selectedImage === path ? null : path)
            }
          >
            <img src={image} alt="Memorial" />
          </div>
        ))}
      </div>

        {galleryImages.length === 0 && (
          <p className="no-memorial-images">
            Gallery images will appear here.
          </p>
        )}

        <div className="gallery-contact">
          <h2>Looking for a Personalized Memorial?</h2>
          <p>
            Contact our team to discuss your memorial preferences.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>

      </section>
    </div>
  );
}

export default Gallery;