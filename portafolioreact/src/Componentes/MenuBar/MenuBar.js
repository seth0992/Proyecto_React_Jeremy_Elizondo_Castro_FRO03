//  <li className="navbar--list--item">
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

function activarMenuItem(e) {
  e.preventDefault();
  alert("El botón fue clikeado 2.");
}
class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.ListText = [
      "Inicio",
      "Acerca",
      "Servicios",
      "Portafolio",
      "Contáctenos",
      "Blog",
    ];

    this.MenuItemList = [];

    this.listItem = this.ListText.map((item, index) => (
      <ListItem key={index} valor={item} />
    ));
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

          <ul className="navbar--list" id="navbar--list">
            {this.listItem}
            <Reloj />
          </ul>

          <button
            className="navbar--button"
            id="navbar--button"
            onClick={activarMenuItem}
          >
            <i className="bx bx-menu" id="toggle-icon"></i>
          </button>
        </nav>
      </header>
    );
  }
}

export default MenuBar;
