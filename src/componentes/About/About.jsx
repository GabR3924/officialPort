import { Bio, habilidades, skills } from "../../Data/data.js";
import { motion } from "framer-motion";
import "./About.css";
import WSP from "../../assets/wsp.jpeg";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="Skills"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="title"
      >
        <img src={Bio.titles.about} alt="" />
      </motion.div>

      <div className="cont">

        <div className="info">
          <div className="img"></div>
          <div className="txt">{/* <img src={WSP} alt="" /> */}</div>
          <div className="contact">
            <button>
              <h1>CV</h1>
            </button>
          </div>
        </div>

        <div className="about">
          <div className="one">
            <h1>19</h1>
            <h2>LEVEL</h2>
          </div>
          <div className="second">
            <p>
              Software Developer con background en Informatica que me ha
              proporcionado un sólido conjunto de competencias como la capacidad
              de trabajar eficazmente en equipo, adaptarme a nuevas tecnologías
              con facilidad y analizar datos de forma masiva especializado en
              Back-end y Cloud Computing. Conocimientos en metodologías ágiles,
              GIT, estructura de datos, algoritmos, frameworks CSS, arquitectura
              de datos. Experiencia en Back-end y Cloud Computing con AWS y
              Azure.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="softS">
            <h2>Soft Skills</h2>
          </div>

          <div className="softGrid">
            {habilidades?.map((hb) => {
              return (
                <ul key={hb.id}>
                  <li>
                    <img src={hb.image} alt={hb.id} />
                    <h4>{hb.name}</h4> {/* Mostrar el nombre del skill */}
                  </li>
                </ul>
              );
            })}
          </div>

          {/* <ul>
              <li>
                <img src={skills.skl.skill1} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
              <li>
                <img src={skills.svg.angular} alt="" /> <br /> Apis
              </li>
             
              
            </ul> */}
        </div>

        <div className="sks">

          <div className="uno">
            <h2>Tech Skills</h2>
          </div>

          <div className="dos">
            {Object.keys(skills.svg).map((key) => {
              return (
                <div className="cuadro" key={key}>
                  <img src={skills.svg[key]} alt={key} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;
