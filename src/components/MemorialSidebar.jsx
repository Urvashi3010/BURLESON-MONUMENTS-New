import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const memorialCategories = [
  { name: 'Single Markers – Granite', slug: 'single-markers-granite' },
  { name: 'Companion Markers – Granite', slug: 'companion-markers-granite' },
  { name: 'Single Markers – Bronze', slug: 'single-markers-bronze' },
  { name: 'Companion Markers – Bronze', slug: 'companion-markers-bronze' },
  { name: 'Double Interment Markers', slug: 'double-interment-markers' },
  { name: 'Single Monuments', slug: 'single-monuments' },
  { name: 'Companion Monuments', slug: 'companion-monuments' },
  { name: 'Premium Monuments', slug: 'premium-monuments' },
  { name: 'Child Memorials', slug: 'child-memorials' },
  { name: 'Single Slant Memorials', slug: 'single-slant-memorials' },
  { name: 'Companion Slant Memorials', slug: 'companion-slant-memorials' },
  { name: 'Cremation Memorials', slug: 'cremation-memorials' },
  { name: 'Memorial Benches', slug: 'memorial-benches' },
  { name: 'Laser Etching', slug: 'laser-etching' },
  { name: 'Bronze Plaques', slug: 'bronze-plaques' },
  { name: 'Granite Colors', slug: 'granite-colors' },
  { name: 'Memorial Photos', slug: 'memorial-photos' },
  { name: 'Flower Vases', slug: 'flower-vases' },
  { name: 'Inscriptions', slug: 'inscriptions' },
  { name: 'Pet Memorials', slug: 'pet-memorials' }
];

function MemorialSidebar({ title = 'Memorial Products' }) {
  return (
    <aside className="memorial-sidebar">
      <h3>{title}</h3>

      <div className="sidebar-links">
        {memorialCategories.map((category) => (
          <NavLink
            key={category.slug}
            to={`/memorials/${category.slug}`}
            className="sidebar-link"
          >
            <span>{category.name}</span>
            <ChevronRight size={15} />
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default MemorialSidebar;