import React from "react";

function ProjectItem({ name, about, technologies }) {
  let counter = 0
  const tech = technologies.map((item) => {
    counter += 1
    return <span key={counter}>{item}</span>
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
                   
      </div>
    </div>
  );
}

export default ProjectItem;
