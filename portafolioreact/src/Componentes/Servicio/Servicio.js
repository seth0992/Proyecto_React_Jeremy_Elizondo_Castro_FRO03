import React from "react";
import "./Servicio.css";

class Servicio extends React.Component {
  render() {
    return (
      <article className="service--item">
        <p>{this.props.key}</p>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>

        <div className="service--item-icon">
          <img
            src={
              process.env.PUBLIC_URL +
              `./recursos/image/iconos/${this.props.id}.png`
            }
            alt="Icono React"
          />
        </div>
      </article>
    );
  }
}
export default Servicio;
