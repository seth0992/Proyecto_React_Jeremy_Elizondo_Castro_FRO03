import "./Trabajos.css";
import React from "react";
import Work from "../Work/Work";

class Trabajos extends React.Component {
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
      "https://my-json-server.typicode.com/seth0992/datosReactTestAPI/works"
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
        <section
          className="portafolio paddingHelper section"
          id="portafolio"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/recursos/image/bg/bg01.jpg"
            })`,
          }}
        >
          <h3 className="tagSeccion">Trabajos</h3>
          <div className="portafolio--filter">
            <a href="#" className="active">
              Web
            </a>
            <a href="#">Desktop</a>
            <a href="#">React</a>
          </div>

          <div className="works--container">
            {elementos[0].map((elemento) => (
              <Work
                id={elemento.id}
                title={elemento.type}
                desc={elemento.desc}
              />
            ))}
          </div>
        </section>
      );
    }
  }
}

export default Trabajos;
