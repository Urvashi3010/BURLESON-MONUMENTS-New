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

          <div className="memorial-main-content">

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
{category === 'inscriptions' ? (
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
        <ScrollReveal className="memorial-photo-grid">
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
        </ScrollReveal>

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