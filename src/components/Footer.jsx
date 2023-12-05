import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSquareGithub,
  faLinkedin,
  faMedium
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          className="icon"
          href="https://github.com/d-a-v-i-d-w-r-i-g-h-t"
          rel="noopener noreferrer"
          target="_blank"
          // style={{ color: '#a0a0a0', textDecoration: 'none' }}
        >
          <FontAwesomeIcon icon={faSquareGithub} size="3x" />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/davidspencerwright/"
          rel="noopener noreferrer"
          target="_blank"
          // style={{ color: '#a0a0a0', textDecoration: 'none' }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
          className="icon"
          href="https://medium.com/@d-a-v-i-d-w-r-i-g-h-t"
          rel="noopener noreferrer"
          target="_blank"
          // style={{ color: '#a0a0a0', textDecoration: 'none' }}
        >
          <FontAwesomeIcon icon={faMedium} size="3x" />
        </a>
      </div>
    </div>
  )
}
