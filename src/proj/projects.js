import React, { useState } from "react";
import { data } from "./proj";

const Project = () => {
  const [proj, setProj] = useState(data);
  const removeProj = (id) => {
    let remainingProj = proj.filter((card) => card.id !== id);
    setProj(remainingProj);
  };

  return (
    <>
      <header>
        <h1>My Projects</h1>
      </header>
      {proj.map((project) => {
        const { id, img, name, tech, projLink } = project;
        return (
          <div key={id} className="card">
            <div className="header">
              <a
                href={projLink}
                target="_blank"
                rel="noreferrer"
                className="projName"
              >
                {name}
              </a>
            </div>
            <div className="imagecont">
              <img className="img" src={img} alt={name} />
            </div>
            <div className="info">
              <h3 className="tech">Using: {tech}</h3>
            </div>
            <div className="btnCont">
              <a
                href={projLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View Project
              </a>
              <button className="btn remove" onClick={() => removeProj(id)}>
                Completed
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Project;
