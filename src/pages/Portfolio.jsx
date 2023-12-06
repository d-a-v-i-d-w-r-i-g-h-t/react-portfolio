import projectsData from '../../public/assets/data/projects.json';
import Project from '../components/Project';

// call Project as framework for repeating project elements
const Portfolio = () => {
  return (
    <div>
      <h1 className='mb-4'>Projects</h1>
      <div className="row">
        {/* use map to apply each project in projectsData to the Project component */}
        {projectsData.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;