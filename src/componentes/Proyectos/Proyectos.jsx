import React from "react";
import { Bio, projects } from "../../Data/data.js";
import "./Proyectos.css";

const Proyectos = () => {
  return (
    <section className="proyectos" id='proyectos'> 
      <div className="tt">
        <img src={Bio.titles.proyectos} alt="" />
      </div>
      <div className="cards">
      {projects?.map((project) => {
          return (
            <div className="card" key={project.id} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${project.image})` }}>
              <h2>{project.title}</h2>
              {/* {console.log("info:", project)} */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
