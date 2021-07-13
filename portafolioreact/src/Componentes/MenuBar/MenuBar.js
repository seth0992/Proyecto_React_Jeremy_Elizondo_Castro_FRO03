import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  Prompt,
  useRouteMatch,
} from "react-router-dom";
import Reloj from "../Reloj/Reloj";
import HeroBanner from "../../Componentes/HeroBanner/HeroBanner";
import Perfil from "../../Componentes/Perfil/Perfil";
import Servicios from "../../Componentes/Servicios/Servicios";
import Trabajos from "../../Componentes/Trabajos/Trabajos";
import Contacto from "../../Componentes/Contacto/Contacto";

function ListItem(props) {
  return (
    <li className="navbar--list--item">
      <MenuItem texto={props.valor} />
    </li>
  );
}

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { estilo: "navbar--list" };

    this.ListText = [
      "Inicio",
      "Acerca",
      "Servicios",
      "Portafolio",
      "Contáctenos",
      "Blog",
    ];

    this.activarMenuItem = this.activarMenuItem.bind(this);

    this.MenuItemList = [];

    this.listItem = this.ListText.map((item, index) => (
      <ListItem key={index} valor={item} />
    ));
  }

  activarMenuItem(e) {
    e.preventDefault();
    if (this.state.estilo === "navbar--list") {
      this.setState((state) => ({
        estilo: "navbar--list show",
      }));
    } else {
      this.setState((state) => ({
        estilo: "navbar--list",
      }));
    }
  }

  render() {
    return (
      <div>
        {" "}
        <Router>
          <header className="header paddingHelper">
            <nav className="navbar">
              <a href="#Inicio" className="navbar--logo">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/recursos/image/logo/logoBlanco.svg"
                  }
                  alt="Logo con la inscripción Braseth desarrollador web"
                />
              </a>

              <ul className={this.state.estilo} id="navbar--list">
                {this.listItem}
                {/* <Reloj /> */}
              </ul>

              <button
                className="navbar--button"
                id="navbar--button"
                onClick={this.activarMenuItem}
              >
                <i className="bx bx-menu" id="toggle-icon"></i>
              </button>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/Inicio">
                <HeroBanner />
              </Route>
              <Route path="/Acerca">
                <Perfil />
              </Route>
              <Route path="/Servicios">
                <Servicios />
              </Route>
              <Route path="/Portafolio">
                <Trabajos />
              </Route>
              <Route path="/Contáctenos">
                <Contacto />
              </Route>
              <Route exact path="/">
                <HeroBanner />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default MenuBar;
