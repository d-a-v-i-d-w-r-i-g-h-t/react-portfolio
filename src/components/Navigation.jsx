// dependencies from react-router-dom
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg px-1 pb-0">
      <div className="container-fluid">
        <p className="navbar-brand mb-2 h1">David Wright</p>
        <ul className="nav nav-tabs justify-content-center">

          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
