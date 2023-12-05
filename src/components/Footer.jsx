// get social media icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSquareGithub,
  faLinkedin,
  faMedium
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="footer mt-5 p-3">
      <div className="social-icons">

        {/* link for GitHub profile */}
        <a
          className="icon"
          href="https://github.com/d-a-v-i-d-w-r-i-g-h-t"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="3x" />
        </a>

        {/* link for LinkedIn profile */}
        <a
          className="icon"
          href="https://www.linkedin.com/in/davidspencerwright/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        {/* link for Medium profile */}
        <a
          className="icon"
          href="https://medium.com/@d-a-v-i-d-w-r-i-g-h-t"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Medium Profile"
        >
          <FontAwesomeIcon icon={faMedium} size="3x" />
        </a>

      </div>
    </div>
  );
}
