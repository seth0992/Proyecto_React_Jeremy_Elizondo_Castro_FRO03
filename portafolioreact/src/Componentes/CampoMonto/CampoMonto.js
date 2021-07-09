import React from "react";

// Opciones
const nombresMonedas = {
  d: "Dolar",
  c: "Colon",
};

class CampoMonto extends React.Component {
  constructor(props) {
    super(props);
    this.ejecutarCambios = this.ejecutarCambios.bind(this);
  }

  ejecutarCambios(e) {
    this.props.ejecutarCambioMoneda(e.target.value);
  }

  render() {
    const monto = this.props.monto;
    const moneda = this.props.moneda;
    return (
      <fieldset>
        <legend>Ingrese por favor el monto en {nombresMonedas[moneda]}:</legend>
        <input value={monto} onChange={this.ejecutarCambios} />
      </fieldset>
    );
  }
}

export default CampoMonto;
