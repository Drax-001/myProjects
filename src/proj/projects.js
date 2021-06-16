import React, { useState } from "react";
import { data } from "./proj";
import Category from "./Category";

const category = [
  ...new Set(data.map((category) => category.category.toLowerCase())),
];

const Project = () => {
  const [projects, setProjects] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState(projects);

  return (
    <>
      <Category
        category={category}
        data={projects}
        handleCategory={setSelectedCategory}
      />
      <div className="projectList">
        {/* mapping my projects */}
        {selectedCategory.map((project, index) => {
          const { id, img, name, tech, projLink } = project;
          return (
            <div key={id} className="project">
              <div className="project-header">
                <h2>{name}</h2>
              </div>
              <div className="project-body">
                <div className="project-image">
                  <img src={img} alt={name} className="projImg" />
                </div>
                <div className="project-detail">
                  <p className="tech"> {tech} </p>
                </div>
              </div>
              <div className="project-footer">
                <div className="project-number">
                  <p className="count">
                    {index + 1} / {projects.length}
                  </p>
                </div>
                <div className="visit-project">
                  <a
                    className="project-link"
                    href={projLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Project;
