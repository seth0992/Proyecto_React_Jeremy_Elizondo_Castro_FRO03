import "./Servicios.css";
import React from "react";
import Servicio from "../Servicio/Servicio";

class Servicios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      estaCargado: false,
      elementos: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/seth0992/datosReactTestAPI/services"
    )
      .then((respuesta) => respuesta.json())
      .then(
        (resultado) => {
          var nuevalista = [];
          nuevalista.push(resultado);
          // console.log(resultado);

          this.setState({
            error: null,
            estaCargado: true,
            elementos: nuevalista,
          });
        },
        // Manejo de errores
        (errores) => {
          this.setState({
            error: errores,
            estaCargado: true,
            elementos: [],
          });
        }
      );
  }

  render() {
    const { error, estaCargado, elementos } = this.state;
    console.log(elementos);
    if (error) {
      return <div>Se encontró el siguiente error: {error.message}</div>;
    } else if (!estaCargado) {
      return <div>Cargando los datos...</div>;
    } else {
      return (
        <section className="services paddingHelper section" id="services">
          <h2 className="tagSeccion">Servicios</h2>

          <div className="service--container">
            {elementos[0].map((elemento) => (
              <Servicio
                id={elemento.id}
                title={elemento.title}
                desc={elemento.desc}
              />
            ))}
          </div>
        </section>
      );
    }
  }
}

export default Servicios;
