import projectsData from '../assets/data/projects.json';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="row">
        {projectsData.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;