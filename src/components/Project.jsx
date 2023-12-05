 const Project = ({ project }) => {
  return(
    // responsive column numbers based on screen with breakpoints
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div className="card h-100 w-60">
        {/* project screenshot */}
        <img src={project.image} className="card-img-top" alt={`Screenshot of ${project.title}`} />
        <div className="card-body d-flex flex-column">
          {/* project title and description */}
          <h5 className="card-title">{project.title}</h5>
          <p>{project.description}</p>
          {/* links to deployed page and github repo */}
          <div className="mt-auto d-flex justify-content-between">
            <span className="card-text"><a href={project.deployedPage} className="link">Deployed Page</a></span>
            <span className="card-text"><a href={project.githubRepo} className="link">GitHub Repo</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;