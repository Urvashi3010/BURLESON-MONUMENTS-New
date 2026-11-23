import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Award,
  Users
} from 'lucide-react';
import MemorialSidebar from '../components/MemorialSidebar';
import homeHeroImage from '../assets/images/fan-cards/home-01.webp';
import ScrollReveal from '../components/ScrollReveal';

const memorialImages = Object.entries(
  import.meta.glob(
    '../assets/images/memorials/**/*.{jpg,jpeg,png,webp}',
    { eager: true, query: '?url', import: 'default' }
  )
).sort(([a], [b]) =>
  a.localeCompare(b, undefined, { numeric: true })
);

const getCategoryImage = (folder, imageNumber = 0) => {
  const folderImages = memorialImages.filter(([path]) =>
    path.toLowerCase().includes(`/memorials/${folder}/`)
  );

  return folderImages[imageNumber]?.[1] || '';
};
function Home() {
const categories = [
  {
    title: 'Upright Monuments',
    image: getCategoryImage('single-monuments', 15),
    description: 'Traditional monuments crafted to honor a lasting legacy.'
  },
  {
    title: 'Memorial Markers',
    image: getCategoryImage('single-markers-granite', 20),
    description: 'Elegant and timeless memorial markers.'
  },
  {
    title: 'Custom Memorials',
    image: getCategoryImage('premium-monuments', 2),
    description: 'Personalized memorial designs created with care.'
  }
];
  return (
    <div className="home-page">
{/* HERO SECTION */}
<section className="home-hero">

  <div className="home-hero-inner">

    <div className="hero-content">
      <span className="hero-subtitle">
        HONORING MEMORIES • CREATING LEGACIES
      </span>

        <h1 className="hero-title">
        <span>A Lasting Tribute</span>
        <span>To A Life Remembered</span>
        </h1>       

      <p>
        Thoughtfully crafted memorials that preserve memories
        and celebrate the lives of those we hold dear.
      </p>

      <div className="hero-buttons">
        <Link to="/memorials" className="btn-primary">
          Explore Memorials <ArrowRight size={18} />
        </Link>

        <Link to="/contact" className="btn-outline">
          Get In Touch
        </Link>
      </div>
    </div>

    <div className="home-hero-image hero-image-reveal">
    <img src={homeHeroImage} alt="Memorial design" />
    </div>

  </div>

  <div className="hero-bottom">
    <span>Crafted With Care. Remembered Forever.</span>
  </div>

    </section>
        {/* TRUST SECTION */}
    <ScrollReveal>
    <section className="trust-section">
        <div className="trust-item">
        <ShieldCheck />
        <div>
            <h3>Quality Craftsmanship</h3>
            <p>Attention to every detail</p>
        </div>
        </div>

        <div className="trust-item">
        <Heart />
        <div>
            <h3>Personalized Designs</h3>
            <p>Memorials that tell a story</p>
        </div>
        </div>

        <div className="trust-item">
        <Award />
        <div>
            <h3>Dedicated Service</h3>
            <p>Guidance throughout the process</p>
        </div>
        </div>

        <div className="trust-item">
        <Users />
        <div>
            <h3>Family Focused</h3>
            <p>Understanding your needs</p>
        </div>
        </div>
    </section>
    </ScrollReveal>
      

      {/* MEMORIAL COLLECTION WITH SIDEBAR */}
<section className="home-categories">
  <div className="memorial-layout">

    <MemorialSidebar />

    <div className="memorial-main-content">
      <ScrollReveal className="section-heading">
        <span className="section-label">OUR MEMORIAL COLLECTION</span>
        <h2>Memorials Made Meaningful</h2>
        <p>
          Explore different memorial styles designed to preserve
          memories for generations.
        </p>
         </ScrollReveal>
        <ScrollReveal className="category-showcase">
        {categories.map((category, index) => (
            <div className="category-feature" key={index}>

            <img src={category.image} alt={category.title} />

            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <Link to="/memorials">
                Explore Collection <ArrowRight size={16} />
            </Link>

            </div>
        ))}
        </ScrollReveal>

      <Link to="/memorials" className="category-main-button">
        View All Memorials
      </Link>
    </div>

  </div>
</section>

{/* WHY CHOOSE US */}
<section className="why-choose-section">
  <ScrollReveal className="why-choose-heading">
    <span className="section-label">WHY BURLESON MONUMENTS</span>
    <h2>A Meaningful Tribute, Made With Care</h2>
    <p>
      We understand that choosing a memorial is a personal decision.
      Our focus is on helping families create tributes that reflect
      the memories and lives of their loved ones.
    </p>
  </ScrollReveal>

  <ScrollReveal className="why-choose-grid">
    <div className="why-card">
      <span>01</span>
      <h3>Personalized Memorials</h3>
      <p>
        Memorial options that allow families to choose meaningful
        designs, details and finishes.
      </p>
    </div>

    <div className="why-card">
      <span>02</span>
      <h3>Quality Materials</h3>
      <p>
        A selection of memorial materials and granite colors
        to suit different preferences.
      </p>
    </div>

    <div className="why-card">
      <span>03</span>
      <h3>Thoughtful Guidance</h3>
      <p>
        Support and guidance to help families make informed
        memorial choices.
      </p>
    </div>
  </ScrollReveal>
</section>

{/* CONTACT SECTION */}
<section className="home-cta">
  <ScrollReveal className="cta-content">
    <h2>Need Help Choosing a Memorial?</h2>

    <p>
      Our team is here to answer your questions and guide you
      through the process.
    </p>

    <Link to="/contact" className="btn-primary">
      Contact Us <ArrowRight size={18} />
    </Link>
  </ScrollReveal>
</section>
    </div>
  );
}

export default Home;