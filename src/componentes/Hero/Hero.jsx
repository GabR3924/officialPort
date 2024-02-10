import { Bio } from "../../Data/data.js";
import { motion } from "framer-motion";
import Nav from "../Nav/Nav.jsx";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section" id="home">
      <Nav />
      <motion.div
      initial={{ color: "#000" }}
      transition={{ duration: 2 }}
      animate={{
        y: -190,
        color: "#fff",
      }}
      className="inno">
        <img src={Bio.titles.hero} alt="" className="img"/>
      </motion.div>
      <div className="rigth">
        <motion.h2
          initial={{ color: "#000" }}
          transition={{ duration: 2 }}
          animate={{
            x: -40,
            color: "#fff",
          }}
          className="name"
        >
          {Bio?.name}
        </motion.h2>
        <motion.h1
        initial={{ color: "#000" }}
        transition={{ duration: 2 }}
        animate={{
          x: -40,
          color: "#fff",
        }}
        className="roles">
          {Bio.roles}
        </motion.h1>
        <motion.ul
        initial={{ color: "#000" }}
        transition={{ duration: 2 }}
        animate={{
          x: -40,
          color: "#fff",
        }
        }
        className="ul">
          <a href="https://github.com/GabR3924" target="blanck">
            <img src={Bio.icons.github} />
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox" target="blanck">
            <img src={Bio.icons.gmail} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriela-r-24b4b0214/"
            target="blanck"
          >
            <img src={Bio.icons.linkedin} alt="" />
          </a>
        </motion.ul>
        <img className="arrow" src={Bio.icons.arrow} alt="" />
      </div>
    </section>
  );
};

export default Hero;
