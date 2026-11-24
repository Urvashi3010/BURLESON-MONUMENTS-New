import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span>BURLESON</span>
          <small>MONUMENTS</small>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>

          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>

          <div className="nav-dropdown">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              Memorials <ChevronDown size={15} />
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/memorials" onClick={closeMenu}>
                  All Memorials
                </NavLink>
                <NavLink to="/gallery" onClick={closeMenu}>
                  Gallery
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink>
          <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>

          <NavLink to="/contact" className="nav-contact" onClick={closeMenu}>
            Contact Us
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;