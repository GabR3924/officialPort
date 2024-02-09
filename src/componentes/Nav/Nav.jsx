import {Bio} from "../../Data/data.js"
import './nav.css'
import { RiHomeLine } from "react-icons/ri";
import { RiUser4Line } from "react-icons/ri";
import { SlFolder } from "react-icons/sl";
import { BiMessageSquareDetail } from "react-icons/bi";


const Nav = () => {
  return (
    <div className="menu">
        <a href="#home"><RiHomeLine className="icon"/></a>
        <a href="#about"><RiUser4Line className="icon"/></a>
        <a href="#proyectos"><SlFolder className="icon"/></a>
        <a href="#contacto"><BiMessageSquareDetail className="icon"/></a>
      </div>
  )
}

export default Nav