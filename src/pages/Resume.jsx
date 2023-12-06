import MiniCard from '../components/MiniCard';
import proficiencies from 'assets/data/proficiencies';

const Resume = () => {
  // file path for downloadable resume
  const resumeFilePath = 'assets/files/Resume-David-Wright.pdf';

  return (
    <div>
      <p>
        Download my resume <a 
          href={resumeFilePath}
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          download="Resume-David-Wright.pdf"
        >here</a>
      </p>
      {/* list of proficiencies as individual mini cards */}
      <h3 className="mt-5 mb-2">Proficiencies</h3>
      <div className="proficiency-container d-flex flex-wrap">
        {proficiencies.map((proficiency, index) => (
          <MiniCard key={index} proficiency={proficiency} />
        ))}
      </div>
    </div>
  );
}

export default Resume;