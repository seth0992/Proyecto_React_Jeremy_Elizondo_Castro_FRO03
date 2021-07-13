import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuBar from "./Componentes/MenuBar/MenuBar";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// Posibles componentes del proyecto
// Componente para el menu
// function navBar() {
//   return <div>Menu</div>;
// }

// Componente para el hero banner del portafolio
// function header() {
//   return <div>Sección para el hero banner</div>;
// }
// Componente para la información personal
// function perfil() {
//   return <div>Sección para la información personal</div>;
// }
// Componente para los servicios del portafolio
// function servicios() {
//   return <div>Sección para los servicios</div>;
// }
// Componente para los trabajos realizados
// function trabajos() {
//   return <div>Sección para la información personal</div>;
// }
// Componente para el formulario de contacto
// function contacto() {
//   return <div>Sección para el formulario de contacto</div>;
// }
// Componente para el footer
function footer() {
  return <div>Sección para el footer</div>;
}
// Componente para el blog de la pagina
function paginaBlog() {
  return <div>Sección general para el blog</div>;
}
// Componente para el la entrada del blog
function blogEntrada() {
  return <div>Entrada del blog</div>;
}

ReactDOM.render(
  // <React.StrictMode>
  [<MenuBar />],
  // </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//    paginaBlog(),
// blogEntrada(),
