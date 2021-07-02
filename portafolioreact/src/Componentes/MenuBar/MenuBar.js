import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import Reloj from "../Reloj/Reloj";

function ListItem(props) {
  return (
    <li className="navbar--list--item">
      {" "}
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
      <header className="header paddingHelper">
        <nav className="navbar">
          <a href="#Inicio" className="navbar--logo">
            <img
              src={
                process.env.PUBLIC_URL + "/recursos/image/logo/logoBlanco.svg"
              }
              alt="Logo con la inscripción Braseth desarrollador web"
            />
          </a>

          <ul className={this.state.estilo} id="navbar--list">
            {this.listItem}
            <Reloj />
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
    );
  }
}

export default MenuBar;
