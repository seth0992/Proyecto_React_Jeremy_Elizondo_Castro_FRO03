import "./Perfil.css";
import React, { Component } from "react";

class Perfil extends Component {
  render() {
    return (
      <section className="about paddingHelper section" id="about">
        <article className="about--info">
          <h2 className="tagSeccion">Acerca</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="about--info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet
            veniam cumque excepturi odio, maiores natus beatae autem qui. Iste
            repudiandae quaerat dignissimos eum atque?
          </p>
          <div className="about--info-personal">
            <div className="col">
              <h4>Nombre:</h4>
              <p>Jeremy Elizondo Castro</p>
              <h4>País:</h4>
              <p>Costa Rica</p>
              <h4>Freelance:</h4>
              <p>Disponible</p>
            </div>
            <div className="col">
              <h4>Universidad:</h4>
              <p>Universidad Nacional CR</p>
              <h4>Idiomas:</h4>
              <p>Español</p>
              <h4>Dirección:</h4>
              <p>Canoas, Corredores, Puntarenas</p>
            </div>
          </div>
        </article>
        <article className="about--image">
          <img
            src="./recursos/image/fotos/foto1.JPG"
            alt="Fotografiá de medio cuerpo de Jeremy, un hombre joven de cabello castaño y tez blanca, de aproximadamente 28 años"
          />
        </article>
      </section>
    );
  }
}

export default Perfil;
