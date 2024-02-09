import React, {useState} from "react";
import { Bio } from "../../Data/data.js";
import { FaRegCopy } from "react-icons/fa6";
import Nav from "../Nav/Nav.jsx";
import './Contacto.css';

const Contacto = () => {
  const [copyMessage, setCopyMessage] = React.useState(null);

 
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Texto copiado al portapapeles:', text);
        setCopyMessage(`Copiado: ${text}`);
        setTimeout(() => setCopyMessage(null), 2000); // Ocultar después de 2 segundos
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
        setCopyMessage(`Error al copiar: ${err.message}`);
        setTimeout(() => setCopyMessage(null), 2000); // Ocultar después de 2 segundos
      });
  };

  return (
    <section className='contacto' id='contacto'>
      <Nav/>
      <div className="center">
        <ul>
          <li>
            <img src={Bio.icons.github} alt="GitHub" />
            <h2 className="name">github.com/GabR3924</h2>
            <FaRegCopy className="icon" onClick={() => handleCopyClick("github.com/GabR3924")} />
          </li>
          <li>
            <img src={Bio.icons.gmail} alt="Gmail" />
            <h2 className="name">garc392004@gmail.com</h2>
            <FaRegCopy className="icon" onClick={() => handleCopyClick("garc392004@gmail.com")} />
          </li>
          
        </ul>
        {copyMessage && <div className="copy-message">{copyMessage}</div>}

      </div>
      <div className="contacImg">
        <img src={Bio.titles.hero} alt="" />
      </div>
    </section>
  );
}

export default Contacto;
