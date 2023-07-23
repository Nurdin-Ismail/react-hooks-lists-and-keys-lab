import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projs = projects.map((item) => {
    return <ProjectItem key={item.id} technologies={item.technologies} name={item.name} about={item.about}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projs}</div>
    </div>
  );
}

export default ProjectList;
