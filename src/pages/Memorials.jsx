import ScrollReveal from '../components/ScrollReveal';
import { useParams, Navigate } from 'react-router-dom';
import MemorialSidebar, {
  memorialCategories
} from '../components/MemorialSidebar';
import { useState } from 'react';

const images = import.meta.glob(
  '../assets/images/memorials/**/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

const memorialVerses = [
  'At Rest',
  'In Gods Care',
  'In Heaven',
  'Gone Home',
  'In Loving Memory',
  'In Loving Memory of',
  'Together Forever',
  'We Miss You',
  'We Love You',
  'Forever Missed',
  'Forever Loved',
  'Faithful Forever',
  'A Loving Companion',
  'Forever In Our Hearts',
  'Our Little Angel',
  'Eternal Love',
  'Our Love is Eternal',
  'Rest In Peace',
  'One Of A Kind',
  'In Memoriam',
  'In Remembrance',
  'Precious Memories',
  'Sweet Memories',
  "We'll be Together Again",
  'We Will Meet Again',
  'Devoted In Love',
  'Until We Meet Again',
  'Always In Our Hearts',
  'An Unforgettable Person',
  'A Friend In Deed',
  'A Special Kind Of Love',
  'Gone But Not Forgotten',
  'A Sharing Caring Person',
  'Life if Not Forever, Love Is',
  'A Loving Companion',
  'The Best Is Yet To Come',
  'Because He (She) Cared',
  'Brave In Spirit, Stong in Love',
  'Everybodys Best Friend',
  'Faith Hope And Courage',
  'Your light Will Shine Forever',
  'My Lifetime Companion',
  'He (She) Inspired Us All',
  'Strong in Love, Brave in Spirit',
  'An Inspiration to all of Us',
  'Darling, We Miss You',
  'A Love True and Constant',
  'A Loving Husband / Wife / Father / Mother',
  'A Woman (Man) of Grace and Dignity',
  'Always a Gentleman (Lady)',
  'He (She) Ask For So Little, But Gave So Much',
  'Consistent Of Faith, Generous By Heart',
  'He (She) Enriched Our Lives',
  'He(She) Lived To Help Others',
  'He (She)Touched The Lives Of Many',
  'He (She) Will Never Be Forgotten',
  'In One of the Stars I shall Be Living',
  'Love Is A Light That Never Dims',
  'May His (Her) Light Guide You',
  'Morn Not My Death, But Celebrate My Life',
  'We Remember How You Loved Us',
  'What We Keep in Memory Is Ours Forever',
  'Wonderful Was Your Love For Us',
  'In Heaven Too, Will Have Our Hand'
];

function Memorials() {
    const [selectedImage, setSelectedImage] = useState(null);
  const { category } = useParams();

  const selectedCategory = memorialCategories.find(
    (item) => item.slug === category
  );

  if (!selectedCategory) {
    return <Navigate to="/memorials/single-markers-granite" replace />;
  }

  const categoryImages = Object.entries(images)
    .filter(([path]) => path.includes(`/memorials/${category}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, {
      numeric: true
    }));

    const flowerVaseSections = {
  graniteShapes: [
    { file: 'flower-vases-01', name: 'Tapered' },
    { file: 'flower-vases-02', name: 'Turned' }
  ],

  graniteColors: [
    { file: 'flower-vases-03', name: 'Georgia Gray' },
    { file: 'flower-vases-04', name: 'Bahama Blue' },
    { file: 'flower-vases-05', name: 'Sunset Red' },
    { file: 'flower-vases-06', name: 'Jet Black' },
    { file: 'flower-vases-07', name: 'Indian Red' },
    { file: 'flower-vases-08', name: 'Salisbury Pink' },
    { file: 'flower-vases-09', name: 'Flash Black' },
    { file: 'flower-vases-10', name: 'Mahogany' },
    { file: 'flower-vases-11', name: 'Morning Rose' }
  ],

  bronze: [
    { file: 'flower-vases-13', name: 'Bronze Flower Vase Options' },
    { file: 'flower-vases-14', name: 'Bronze Flower Vase' }
  ],

  metalCraft: [
    { file: 'flower-vases-15', name: 'Monarch' },
    { file: 'flower-vases-16', name: 'Classic' },
    { file: 'flower-vases-17', name: 'Crown' },
    { file: 'flower-vases-18', name: 'Regal' }
  ]
};

const getFlowerVaseImage = (file) =>
  categoryImages.find(([path]) => path.includes(file))?.[1];
  return (
    <div className="memorials-page">

      <section className="page-banner memorials-banner">
        <div>
          <span className="section-label">OUR COLLECTION</span>
          <h1>Memorial Products</h1>
          <p>
            Explore our collection of thoughtfully crafted memorials.
          </p>
        </div>
      </section>

      <section className="memorials-content">
        <div className="memorial-layout">

          <MemorialSidebar />

          <div
  className={`memorial-main-content ${
    category === 'bronze-plaques' ? 'bronze-plaque-page' : ''
  }`}
>
          {category !== 'memorial-photos' && (
            <ScrollReveal>
              <span className="section-label">
                MEMORIAL COLLECTION
              </span>

              <h2 className="selected-category-title">
                {selectedCategory.name}
              </h2>
            </ScrollReveal>
          )}
{category === 'laser-etching' ? (

  <div className="laser-etching-page">

    <p className="laser-etching-intro">
      Add a personal touch to your memorial with detailed laser
      etching. Explore our collection of designs and custom
      engraving options.
    </p>

<div className="laser-etching-grid">
  {[
    'Landscape with Deer',
    'Fishing and Camping theme',
    'Farm theme with Cows',
    'Tranquil House Landscape',
    'Camp near Lake scene',
    'Fishing theme',
    'Church Background',
    'Construction',
    'Fish Jumping',
    'Fishing Theme in the Mountains',
    'Fishing in Boat'
  ].map((name, index) => {
    const item = categoryImages[index];

    if (!item) return null;

    return (
      <div className="laser-etching-card" key={item[0]}>
        <img
          src={item[1]}
          alt={name}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
        />
         <p>{name}</p>
       </div>
          );
        })}
      </div>

    <p className="laser-etching-contact">
      Contact us to discuss personalized laser etching options.
    </p>

  </div>

) : category === 'pet-memorials' ? (

  <div className="pet-memorials-page">

    <p className="pet-memorials-intro">
      Our pets hold a special place in our hearts.
      Explore our collection of pet memorials created
      to honor the love and memories of your faithful companions.
    </p>

    <div className="pet-memorials-grid">
      {categoryImages.map(([path, image], index) => (
        <div className="pet-memorial-card" key={path}>
          <img
            src={image}
            alt={`Pet memorial design ${index + 1}`}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}
    </div>

    <p className="pet-memorials-contact">
      Contact us to discuss a memorial for your beloved pet.
    </p>

  </div>

) : category === 'granite-colors' ? (
  <div className="granite-colors-page">

    <h2>Granite Color Selection</h2>

    <p className="granite-colors-intro">
      Choose from our selection of beautiful granite colors.
      Each natural stone has its own unique pattern and character.
    </p>

    <div className="granite-colors-grid">
      {categoryImages.map(([path, image], index) => {
        const fileName = path.split('/').pop();
        const colorName = fileName
          .replace(/\.[^/.]+$/, '')
          .replace(/[-_]/g, ' ')
          .replace(/\d+/g, '')
          .trim();

        return (
          <div className="granite-color-card" key={path}>
            <img
              src={image}
              alt={colorName || `Granite color ${index + 1}`}
              loading="lazy"
            />
            <h3>{colorName || `Granite Color ${index + 1}`}</h3>
          </div>
        );
      })}
    </div>

    <p className="granite-colors-note">
      Granite is a natural material. Actual colors and patterns may vary
      slightly from the photographs shown.
    </p>

    <p className="granite-colors-contact">
      Contact our staff to discuss available granite options.
    </p>

  </div>
) : category === 'flower-vases' ? (
  <div className="flower-vases-page">

    {/* GRANITE FLOWER VASES */}
    <section className="flower-vase-section">

      <h2>1) Granite Flower Vases</h2>

      <p className="flower-vase-subtitle">
        (2 shape options including Tapered and Turned)
      </p>

      <div className="flower-vase-shapes">
        {flowerVaseSections.graniteShapes.map((item) => (
          <div className="flower-vase-card" key={item.file}>
            <img
              src={getFlowerVaseImage(item.file)}
              alt={item.name}
              loading="lazy"
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      <div className="granite-color-grid">
        {flowerVaseSections.graniteColors.map((item) => (
          <div className="flower-vase-card" key={item.file}>
            <img
              src={getFlowerVaseImage(item.file)}
              alt={item.name}
              loading="lazy"
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </section>

    {/* BRONZE FLOWER VASES */}
    <section className="flower-vase-section">

      <h2>2) Bronze Flower Vases</h2>

      <p className="flower-vase-subtitle">
        4 Bronze Options Include:
      </p>

      <p className="bronze-vase-options">
        Signature - Regency <span>|</span> Garden - Patrician
      </p>

      <div className="bronze-vase-grid">
        {flowerVaseSections.bronze.map((item) => (
          <div className="flower-vase-card" key={item.file}>
            <img
              src={getFlowerVaseImage(item.file)}
              alt={item.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </section>

    {/* METALCRAFT FLOWER VASES */}
    <section className="flower-vase-section">

      <h2>3) MetalCraft Flower Vases</h2>

      <div className="metalcraft-vase-grid">
        {flowerVaseSections.metalCraft.map((item) => (
          <div className="flower-vase-card" key={item.file}>
            <img
              src={getFlowerVaseImage(item.file)}
              alt={item.name}
              loading="lazy"
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </section>

    <p className="flower-vase-contact">
      Contact our staff to discuss details.
    </p>

  </div>
) : category === 'inscriptions' ? (
  <div className="inscriptions-content">

    <h3>Memorial Verses – Epitaphs</h3>

    <p className="inscriptions-intro">
      Burleson Monuments offers Inscriptions on our Markers,
      Monuments, Cremation Memorials and Memorial Benches.
      Below you will find our many options at which we hope
      will be helpful in personalizing a forever detail.
    </p>

    <ScrollReveal className="verses-grid">
      {memorialVerses.map((verse, index) => (
        <div className="verse-item" key={index}>
          <span>{index + 1})</span>
          <p>{verse}</p>
        </div>
      ))}
    </ScrollReveal>

    </div>
      ) : category === 'memorial-photos' ? (
  <section className="porcelain-gallery">

    <h2 className="selected-category-title">
  {selectedCategory.name}
</h2>

    <div className="porcelain-pricing">
      <span>#4 Oval 3 1/8" X 4" = $265</span>
      <span>#5 Oval 3 1/2" X 4 3/4" = $295</span>
    </div>

    <div className="porcelain-grid">
      {categoryImages.slice(0, 5).map(([path, image], index) => {
        const names = ['Oval', 'Round', 'Heart', 'Rectangle', 'Dome'];

        return (
          <div className="porcelain-card" key={path}>
            <h3>{names[index]}</h3>
            <img
              src={image}
              alt={names[index]}
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      })}
    </div>

  </section>
) : (
    <>
        <div
          className={`memorial-photo-grid ${
            category === 'bronze-plaques' ? 'bronze-plaque-grid' : ''
          }`}
        >
        {categoryImages.map(([path, image], index) => (
            <div
            className={`memorial-photo-card ${selectedImage === path ? 'is-selected' : ''}`}
            key={path}
            onClick={() =>
                setSelectedImage(selectedImage === path ? null : path)
            }
            >
            <img
              src={image}
              alt="Memorial design"
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
            </div>
        ))}
        </div>

        {categoryImages.length === 0 && (
        <p className="no-memorial-images">
            No images found in this collection.
        </p>
        )}
    </>
    )}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Memorials;