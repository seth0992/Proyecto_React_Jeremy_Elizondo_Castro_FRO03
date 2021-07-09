import React from "react";
import "./Work.css";

class Work extends React.Component {
  render() {
    return (
      <article className="work">
        <div className="work--image">
          <img
            src={
              process.env.PUBLIC_URL +
              `./recursos/image/trabajos/${this.props.id}.jpg`
            }
            alt="Imagen sobre unos mockups de un posible trabajo, contiene cuatros y lineas para representar la distribución de los elementos de un sitio web"
          />
        </div>

        <div className="work--info">
          <p>Tipo</p>
          <h2>{this.props.title}</h2>
        </div>
        <i className="fas fa-info-circle work--info-button" id=""></i>
        <div className="work--details">
          <h3>Detalles</h3>
          <p>{this.props.desc}</p>
        </div>
      </article>
    );
  }
}
export default Work;

/* 


*/
