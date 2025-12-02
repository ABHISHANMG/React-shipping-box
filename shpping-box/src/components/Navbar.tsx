import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Shipping Box</h1>
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Add Box
          </Link>
          <Link
            to="/list"
            className={`nav-link ${location.pathname === '/list' ? 'active' : ''}`}
          >
            Box List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

