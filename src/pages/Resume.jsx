import MiniCard from '../components/MiniCard';
import './Resume.css';

const Resume = () => {
  // file path for downloadable resume
  const resumeFilePath = 'src/assets/files/Resume-David-Wright.pdf';
  // proficiencies array
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub/Git",
    "Bootstrap",
    "The DOM",
    "APIs",
    "JQuery",
    "JSON",
    "AJAX",
    "ES6",
    "OOP",
    "MySQL",
    "MVC paradigm",
    "Sequelize",
    "Testing",
    "Agile Development",
    "PWAs",
    "NoSQL",
    "MERN Stack",
    "MongoDB",
    "Express",
    "React",
    "Node",
  ];
  

  return (
    <div>
      <p>
        Download my resume <a 
          href={resumeFilePath}
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>
      </p>
      {/* list of proficiencies as individual mini cards */}
      <h3 className="mt-5">Proficiencies</h3>
      <div className="proficiency-container d-flex flex-wrap">
        {proficiencies.map((proficiency, index) => (
          <MiniCard key={index} proficiency={proficiency} />
        ))}
      </div>
    </div>
  );
}

export default Resume;