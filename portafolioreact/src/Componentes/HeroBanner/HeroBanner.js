import React from "react";

class HeroBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estaActivo: false };

    // Este enlace es necesario para hacer que "this" funcione en el callback
    this.manejarClick = this.manejarClick.bind(this);
  }

  manejarClick() {
    this.setState((state) => ({
      estaActivo: !state.estaActivo,
    }));
  }

  render() {
    return (
      <section
        className="hero paddingHelper section"
        id="home"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/recursos/image/bg/bg02.jpg"
          }) #110503 center center;`,
        }}
      >
        <div className="hero--container">
          <div className="hero--content">
            <h1>
              Hola soy, <br />
              Jeremy Elizondo Castro
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate optio doloribus aliquid, nam commodi laboriosam error
              perferendis et excepturi minima!
            </p>
          </div>
          <div className="hero--image">
            <button className="mostrarImg" onClick={this.manejarClick}>
              {this.state.estaActivo ? (
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./recursos/image/avatar/avatar.png"
                  }
                  alt="Fotografiá de Jeremy, joven de cabello castaño y tez blanca, de aproximadamente 28 años"
                />
              ) : (
                "Mostrar Imagen"
              )}
            </button>
          </div>

          <div className="hero--social">
            <a href="#Github">
              <i className="fab fa-github"></i>
            </a>
            <a href="#Facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#Twitter">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBanner;
