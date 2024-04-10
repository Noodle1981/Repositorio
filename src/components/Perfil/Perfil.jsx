import React from "react";

import "./Perfil.css";

import avatar from "../assets/yo.png";
import face from "../assets/face.png";
import inst from "../assets/insta.png";
import link from "../assets/link.png";
import wsp from "../assets/wsp.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { CgAddR } from "react-icons/cg";

/*const  cargarArchivoImg = document.getElementById("cargarArchivoImg")

cargarArchivoImg.addEventListener("click", ()=> {
  cargarArchivoImg.style.display= "block"
}

)
*/

const Perfil = () => {
  return (
    <div className="content">
      <div className="perfil">
        <img src={avatar} alt="" className="perfilImg" />
        <h1 className="nombre_apellido"> Omar Olivera</h1>
        <p className="rol">
          {" "}
          Rol <br />
          Front-End
        </p>
        <div className="contact">
          <img src={face} alt="Facebook" className="contactImg" />
          <img src={inst} alt="Instagram" className="contactImg" />
          <img src={link} alt="Linkedin" className="contactImg" />
          <img src={wsp} alt="Whatsapp" className="contactImg" />
        </div>
      </div>

      <div className="proyectos">
        <div className="proyectosImgs">
          <img src={p1} alt="" className="proyectosImg" />
          <img src={p2} alt="" className="proyectosImg" />
          <img src={p3} alt="" className="proyectosImg" />
          <img src={p4} alt="" className="proyectosImg" />
        </div>
        <div className="proyectosAdd">
          <input type="file" name="custom-file-input" id="customFile" />
          <label htmlFor="" className="custom-file-label" for="customFile">
            {" "}
            Elige Archivo
          </label>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
