// dependencies from react-router-dom
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  // get the current page (everything after the root url)
  const currentPage = useLocation().pathname;

  // return the nav bar
  // formatting here is bootstrap; other formatting is in the index.css file
  return (
    <nav className="navbar navbar-expand-lg pt-2 px-1 pb-0">
      <div className="container-fluid py-0 my-0">
        <p className="navbar-brand mb-0 p-0 fs-2">David Wright</p>
        <ul className="nav nav-tabs justify-content-center p-0 pt-2 m-0">

          <li className="nav-item">
            {/* link for first nav item, About Me, root route '/' */}
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            {/* link for second nav item, Portfolio, '/Portfolio' route */}
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            {/* link for third nav item, Contact, '/Contact' route */}
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            {/* link for fourth nav item, Resume */}
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
